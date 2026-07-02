import client from "@/helpers/sanity/client";
import { absoluteUrl } from "@/helpers/seo/siteConfig";

// Dynamic XML sitemap served at /sitemap.xml.

// Static, hand-maintained routes with sensible crawl priorities.
const STATIC_ROUTES = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/family", priority: 0.8, changefreq: "monthly" },
  { path: "/editorial", priority: 0.8, changefreq: "weekly" },
  { path: "/social", priority: 0.5, changefreq: "monthly" },
  { path: "/nxt/menu", priority: 0.9, changefreq: "weekly" },
  { path: "/nxt/visit", priority: 0.9, changefreq: "monthly" },
  { path: "/nxt/collaborators", priority: 0.6, changefreq: "monthly" },
  { path: "/nxt/events-programs", priority: 0.7, changefreq: "weekly" },
  { path: "/nxt/features", priority: 0.6, changefreq: "monthly" },
];

const CONTENT_QUERY = `{
  "families": *[_type == "family_list" && defined(slug.current)]{ "slug": slug.current, _updatedAt },
  "issues": *[_type == "issue" && comingSoon == false && defined(slug.current)]{ "slug": slug.current, _updatedAt },
  "articles": *[_type == "article" && defined(slug.current) && defined(issue->slug.current)]{
    "slug": slug.current,
    "issue": issue->slug.current,
    _updatedAt
  },
  "collaborators": *[_type == "collaboratorList" && defined(slug.current)]{ "slug": slug.current, _updatedAt },
  "events": *[_type == "eventList" && defined(slug.current)]{ "slug": slug.current, _updatedAt },
  "facilities": *[_type == "facilitiesList" && defined(slug.current)]{ "slug": slug.current, _updatedAt },
}`;

const toDate = (iso) =>
  iso ? new Date(iso).toISOString().split("T")[0] : null;

const urlEntry = ({ path, priority, changefreq, lastmod }) => {
  const parts = [
    `    <loc>${absoluteUrl(path)}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority != null ? `    <priority>${priority.toFixed(1)}</priority>` : null,
  ].filter(Boolean);
  return `  <url>\n${parts.join("\n")}\n  </url>`;
};

const buildSitemap = (entries) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  entries.map(urlEntry).join("\n") +
  `\n</urlset>\n`;

export async function getServerSideProps({ res }) {
  const data = await client.fetch(CONTENT_QUERY);

  const entries = [...STATIC_ROUTES];

  for (const f of data.families || []) {
    entries.push({
      path: `/family/${f.slug}`,
      priority: 0.7,
      changefreq: "monthly",
      lastmod: toDate(f._updatedAt),
    });
  }
  for (const i of data.issues || []) {
    entries.push({
      path: `/editorial/${i.slug}`,
      priority: 0.6,
      changefreq: "monthly",
      lastmod: toDate(i._updatedAt),
    });
  }
  for (const a of data.articles || []) {
    entries.push({
      path: `/editorial/${a.issue}/${a.slug}`,
      priority: 0.6,
      changefreq: "monthly",
      lastmod: toDate(a._updatedAt),
    });
  }
  for (const c of data.collaborators || []) {
    entries.push({
      path: `/nxt/collaborators/${c.slug}`,
      priority: 0.5,
      changefreq: "monthly",
      lastmod: toDate(c._updatedAt),
    });
  }
  for (const e of data.events || []) {
    entries.push({
      path: `/nxt/events-programs/${e.slug}`,
      priority: 0.6,
      changefreq: "monthly",
      lastmod: toDate(e._updatedAt),
    });
  }
  for (const fa of data.facilities || []) {
    entries.push({
      path: `/nxt/features/${fa.slug}`,
      priority: 0.5,
      changefreq: "monthly",
      lastmod: toDate(fa._updatedAt),
    });
  }

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );
  res.write(buildSitemap(entries));
  res.end();

  return { props: {} };
}

// The route only exists to emit XML from getServerSideProps; nothing renders.
export default function Sitemap() {
  return null;
}
