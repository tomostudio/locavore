// Subscribes an email to the Newsletter Brevo list (single opt-in).
// POST { email } -> { status: 'success' | 'already' | 'error', message? }
//
// Existing Brevo contacts (e.g. already on other lists) are added to this list
// rather than rejected. We look the contact up first so we can tell apart
// "already on this list" from "newly added".

const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID) || 16; // default: Newsletter (16)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BREVO_BASE = 'https://api.brevo.com/v3';

const MAX_ATTEMPTS = 3;
const RETRY_BASE_DELAY = 300; // ms

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// A Brevo response is worth retrying when it's a transient failure: a network
// error (no response), rate limiting (429), or a server-side error (5xx).
// Auth/IP failures (401/403) are also retried in case Brevo's edge routed the
// request inconsistently, but a persistent 401 usually means the API key's
// Authorized-IPs allowlist is blocking Vercel's egress IPs — fix that in Brevo.
const isRetryableStatus = (status) =>
  status === 429 || status === 401 || status === 403 || status >= 500;

// fetch() that retries transient failures with exponential backoff.
async function fetchBrevo(url, options) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const res = await fetch(url, options);

      if (res.ok || !isRetryableStatus(res.status) || attempt === MAX_ATTEMPTS) {
        return res;
      }

      console.error('subscribe: retrying', url, res.status, `attempt ${attempt}`);
    } catch (err) {
      lastError = err;
      if (attempt === MAX_ATTEMPTS) throw err;
      console.error('subscribe: retrying after error', `attempt ${attempt}`, err?.message);
    }

    await sleep(RETRY_BASE_DELAY * 2 ** (attempt - 1));
  }

  // Unreachable in practice, but keeps the type honest.
  throw lastError || new Error('subscribe: exhausted retries');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ status: 'error', message: 'method' });
  }

  const email = (req.body?.email || '').toString().trim();

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ status: 'error', message: 'invalid' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('subscribe: BREVO_API_KEY is not set');
    return res.status(500).json({ status: 'error', message: 'server' });
  }

  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    'api-key': apiKey,
  };

  try {
    // 1. Does the contact already exist?
    const lookup = await fetchBrevo(
      `${BREVO_BASE}/contacts/${encodeURIComponent(email)}`,
      { headers },
    );

    if (lookup.ok) {
      const contact = await lookup.json().catch(() => ({}));
      const listIds = Array.isArray(contact.listIds) ? contact.listIds : [];

      if (listIds.includes(BREVO_LIST_ID)) {
        return res.status(200).json({ status: 'already' });
      }

      // Existing contact, not on this list yet -> add them to it.
      const added = await fetchBrevo(
        `${BREVO_BASE}/contacts/lists/${BREVO_LIST_ID}/contacts/add`,
        {
          method: 'POST',
          headers,
          body: JSON.stringify({ emails: [email] }),
        },
      );

      if (added.ok) {
        return res.status(200).json({ status: 'success' });
      }

      console.error('subscribe: add-to-list failed', added.status);
      return res.status(502).json({ status: 'error', message: 'server' });
    }

    // 2. Unknown contact -> create them on the list.
    if (lookup.status === 404) {
      const created = await fetchBrevo(`${BREVO_BASE}/contacts`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          email,
          listIds: [BREVO_LIST_ID],
          updateEnabled: false,
        }),
      });

      if (created.ok) {
        return res.status(200).json({ status: 'success' });
      }

      const data = await created.json().catch(() => ({}));

      // Created between lookup and create (race) -> treat as added.
      if (data?.code === 'duplicate_parameter') {
        return res.status(200).json({ status: 'success' });
      }

      if (data?.code === 'invalid_parameter') {
        return res.status(400).json({ status: 'error', message: 'invalid' });
      }

      console.error('subscribe: create failed', created.status, data?.code);
      return res.status(502).json({ status: 'error', message: 'server' });
    }

    console.error('subscribe: lookup failed', lookup.status);
    return res.status(502).json({ status: 'error', message: 'server' });
  } catch (err) {
    console.error('subscribe: request failed', err);
    return res.status(500).json({ status: 'error', message: 'server' });
  }
}
