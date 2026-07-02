import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import {
  FAQPageSchema,
  BreadcrumbSchema,
} from '@/components/utils/structuredData'
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import { useRouter } from 'next/router'
import { Children, useEffect, useState } from 'react'
import Container from '@/components/modules/container'
import HeaderGap from '@/components/modules/headerGap'
import OpeningArticle from '@/components/modules/editorial/openingArticle'
import StickyButton from '@/components/modules/stickyButton'
import FancyLink from '@/components/utils/fancyLink'
import NextArticle from '@/components/modules/editorial/nextArticle'
import Footer from '@/components/modules/footer'
import { HUB_HREF, nextLiveGuide } from '@/helpers/nxt/guides'

// DRAFT — Michelin/fine-dining SEO cluster, piece 1 of 8.
// Styled to match the editorial article template (light theme, OpeningArticle
// header, editorial body typography). Amber-highlighted spans mark facts to
// VERIFY before publishing — most live in the Sanity `visit` document.
// FAQ items are the single source of truth for both the visible list and the
// FAQPage JSON-LD, so editing one updates both.

const PUBLISH_DATE = '2026-07-07'

// Highlight any [...] bracketed placeholder in a string as amber so unverified
// facts are obvious on the rendered page.
const highlight = (text, keyPrefix) =>
  String(text)
    .split(/(\[[^\]]+\])/g)
    .map((part, i) =>
      part.startsWith('[') && part.endsWith(']') ? (
        <mark
          key={`${keyPrefix}-${i}`}
          className="bg-amber-300/90 text-black px-1 rounded-sm font-medium"
        >
          {part}
        </mark>
      ) : (
        <span key={`${keyPrefix}-${i}`}>{part}</span>
      ),
    )

// Render children, highlighting bracketed placeholders in string nodes while
// passing nested JSX (e.g. <strong>) through untouched.
const Fill = ({ children }) => (
  <>
    {Children.map(children, (child, ci) =>
      typeof child === 'string' ? highlight(child, ci) : child,
    )}
  </>
)

const FAQS = [
  {
    question: 'Do I need a reservation to eat at Locavore NXT?',
    answer:
      'Yes. Locavore NXT is reservation-only with a single evening seating and limited seats — there are no walk-ins. Every table requires an online booking and a deposit made in advance through the reservation link on the NXT visit page.',
  },
  {
    question: 'How far in advance do Locavore NXT reservations open?',
    answer:
      'Seats are released [on a rolling basis / monthly], typically [4–8 weeks] ahead. Weekend and peak-season dates go first, so booking as early as your plans allow gives you the best chance of your preferred night.',
  },
  {
    question: 'Is there a deposit to book Locavore NXT?',
    answer:
      'Yes. A deposit confirms your table and is [applied to your final bill / non-refundable within a set window]. The exact amount and cancellation terms are shown at checkout when you book through the reservation link.',
  },
  {
    question: 'Can Locavore NXT accommodate dietary restrictions?',
    answer:
      'With advance notice, yes. Because the tasting menu is planned for the whole table, note allergies and dietary needs when you book rather than on the night. [Vegetarian / pescatarian / specific-allergy] requests are handled with notice.',
  },
  {
    question: 'Where is Locavore NXT located?',
    answer:
      'Locavore NXT is in [area], Ubud, Bali — [relationship to the original Locavore]. Check the map on the visit page before you travel, as the address differs from [the original restaurant].',
  },
]

const H2 = ({ children }) => (
  <h2 className="font-default font-bold text-3xl sm:text-4xl mt-16 mb-5 first:mt-0">
    {children}
  </h2>
)

const P = ({ children, className = '' }) => (
  <p className={`text-[1.0625rem] sm:text-lg leading-relaxed ${className}`}>
    {children}
  </p>
)

const ReservationGuide = ({ homeAPI, settingAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [home] = homeAPI
  const [setting] = settingAPI
  const [footer] = footerAPI

  const [baseUrl, setBaseUrl] = useState()
  const [snackBar, setSnackBar] = useState(false)

  // Minimal article-shaped object so we can reuse the editorial OpeningArticle
  // header (category pill, display title, month/year, share row). show_article
  // is false — the SEO body below is rendered by this page, not from Sanity.
  const article = {
    title: 'How to Get a Reservation at Locavore NXT',
    category: { title: 'Visiting NXT' },
    date: PUBLISH_DATE,
    description: [],
    show_article: false,
  }

  // "Next Guide" card — next live guide in the cluster, else the hub.
  const next = nextLiveGuide('/nxt/reservation-guide')

  useEffect(() => {
    window.scroll(0, 0)
    setBaseUrl(window.location.href)
    appContext.setHeader({ headerStyle: 'default' })
    return () => {
      appContext.setHeader({ headerStyle: 'default' })
    }
  }, [])

  return (
    <Layout>
      <SEO
        title="How to Get a Reservation at Locavore NXT: The Complete Booking Guide"
        pagelink={router.pathname}
        inputSEO={{
          seo_description:
            'How to book Locavore NXT in Ubud, Bali — booking steps, how far ahead to reserve, deposit and cancellation policy, and what to know before you arrive.',
        }}
        defaultSEO={typeof home !== 'undefined' && home.seo}
        webTitle={typeof setting !== 'undefined' && setting.webTitle}
      />
      <FAQPageSchema faqs={FAQS} />
      <BreadcrumbSchema path={router.asPath} />

      {/* /nxt routes get a black body (see _app.jsx). This panel restores the
          light editorial theme for the article; the footer stays dark.
          flow-root makes the panel a block-formatting context so the sticky
          button's mb-10 stays inside it (matching editorial's spacing) instead
          of collapsing through and exposing the black body behind it. */}
      <div className="relative z-10 bg-white text-black flow-root">
      <HeaderGap />

      {/* Editorial-style header (reused component) */}
      <OpeningArticle
        general={setting}
        article={article}
        baseUrl={baseUrl}
        snackBar={snackBar}
        setSnackBar={setSnackBar}
      />

      {/* Body */}
      <section className="mt-10 w-full h-full">
        <Container className="max-md:px-6">
          <article className="max-w-[800px] w-full mx-auto text-black">
            {/* Answer-first lede */}
            <P className="text-xl sm:text-2xl leading-snug font-serif">
              <Fill>
                Booking Locavore NXT takes three steps: reserve through the
                &ldquo;Book&rdquo; link on the NXT visit page up to [X weeks/months]
                in advance, confirm your seats with a [deposit], and arrive for
                the single evening seating at [seating time].
              </Fill>{' '}
              Because NXT runs one seating a night with a limited number of
              seats, tables go quickly — booking early is the difference between
              dining this month and waiting for the next release.
            </P>

            {/* Key takeaways box */}
            <div className="my-12 border border-black/20 rounded-2xl p-6 sm:p-8">
              <span className="uppercase tracking-widest text-xs opacity-50">
                Before you book
              </span>
              <ul className="mt-4 flex flex-col gap-3 text-[1.0625rem] leading-relaxed">
                <li>
                  <Fill>
                    Locavore NXT is reservation-only — no walk-ins, and seats
                    release [on a rolling basis / on the 1st of each month].
                  </Fill>
                </li>
                <li>
                  <Fill>
                    Reserve as far ahead as you can; weekends and high season
                    ([Jul–Sep, Dec–Jan]) fill first.
                  </Fill>
                </li>
                <li>
                  <Fill>
                    A deposit secures your table and is [deducted from the final
                    bill / non-refundable within X days].
                  </Fill>
                </li>
                <li>
                  Tell them about dietary needs <em>when you book</em>, not on
                  the night — the menu is planned around the whole table.
                </li>
              </ul>
            </div>

            <H2>How do you book a table at Locavore NXT?</H2>
            <P>
              You book online through the reservation link on the NXT visit
              page — there&rsquo;s no phone-only or email-only requirement,
              though the team is reachable on WhatsApp for special requests.
              NXT doesn&rsquo;t take walk-ins, so every table starts with an
              online reservation and a deposit.
            </P>
            <ol className="list-decimal pl-6 mt-5 flex flex-col gap-3 text-[1.0625rem] leading-relaxed marker:opacity-50">
              <li>
                <strong>Open the booking link.</strong> Go to the{' '}
                <FancyLink
                  destination="/nxt/visit"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  Locavore NXT visit page
                </FancyLink>{' '}
                and select <em>Reserve</em>.
              </li>
              <li>
                <strong>Choose your date and party size.</strong> Seats are
                limited per evening; a greyed-out date is fully booked — try an
                adjacent weekday.
              </li>
              <li>
                <Fill>
                  <strong>Pay the deposit.</strong> [Deposit amount / what it
                  covers] confirms the table. You&rsquo;ll get an email
                  confirmation.
                </Fill>
              </li>
              <li>
                <strong>Add your details.</strong> Note any dietary
                restrictions, allergies, or celebrations here so the kitchen can
                plan ahead.
              </li>
            </ol>
            <P className="mt-5">
              <Fill>
                For larger groups or private dining, contact the team directly
                on [WhatsApp number / email] — group availability is handled
                separately from the standard booking flow.
              </Fill>
            </P>

            <H2>How far in advance should you book Locavore NXT?</H2>
            <P>
              <Fill>
                Book as early as you can — ideally [3–4 weeks] ahead, and more
                for weekends or peak season.
              </Fill>{' '}
              NXT serves a limited number of guests each night in a single
              seating, so demand outpaces availability far more than at a
              conventional à la carte restaurant.
            </P>
            <P className="mt-4">
              <Fill>
                If you&rsquo;re travelling to Ubud specifically to dine here,
                reserve before you finalise your travel dates rather than after.
                A flexible booking date gives you far better odds than a fixed
                one. Seats for [the next release window] typically open [on the
                1st / rolling 60 days out], and the most-requested nights can go
                within [days/hours].
              </Fill>
            </P>

            <H2>How much does a reservation at Locavore NXT cost?</H2>
            <P>
              Locavore NXT is a set tasting-menu experience, so the price is per
              person for the full menu rather than à la carte. For the current
              course count, menu price, and optional wine or non-alcoholic
              pairing, see the full breakdown in our tasting-menu guide.
            </P>
            <P className="mt-4">
              <Fill>
                The deposit you pay at booking is [applied to your final bill /
                separate]. Pairings, additional drinks, and service are [added
                on the night / included].
              </Fill>{' '}
              There&rsquo;s no obligation to add a pairing, but it&rsquo;s the
              intended way to experience the menu.
            </P>
            <P className="mt-4 opacity-60 italic">
              → Internal link: &ldquo;Locavore NXT Tasting Menu: Courses, Price
              &amp; What to Expect&rdquo; (piece 2, once published).
            </P>

            <H2>What to know before you arrive</H2>
            <P>
              A few things make the evening go smoothly. NXT is an
              experience-led, single-seating dinner, so timing and preparation
              matter more than at a drop-in restaurant.
            </P>
            <ul className="list-disc pl-6 mt-5 flex flex-col gap-3 text-[1.0625rem] leading-relaxed marker:opacity-40">
              <li>
                <Fill>
                  <strong>Location:</strong> [address] in [Ubud area] —
                  [separate from / near] the original Locavore. Check the map on
                  the visit page so you arrive at the right door.
                </Fill>
              </li>
              <li>
                <strong>Arrival time:</strong>{' '}
                <Fill>
                  Come at [arrival window]. Because it&rsquo;s one seating,
                  arriving late means missing opening courses.
                </Fill>
              </li>
              <li>
                <Fill>
                  <strong>Dress code:</strong> [smart casual / no formal
                  requirement]. Ubud is warm and humid — [guidance].
                </Fill>
              </li>
              <li>
                <Fill>
                  <strong>Dietary needs:</strong> Flag allergies at booking. The
                  kitchen can accommodate [vegetarian / most allergies] with
                  notice, but not always on the night.
                </Fill>
              </li>
              <li>
                <Fill>
                  <strong>Getting there:</strong> Parking is [detail]; a driver
                  or scooter is the usual way in Ubud. Allow buffer time for
                  evening traffic.
                </Fill>
              </li>
            </ul>

            <H2>Can you get a last-minute or walk-in table?</H2>
            <P>
              <Fill>
                Walk-ins aren&rsquo;t available, but last-minute seats do open
                up when other guests cancel. Your best route is to [join the
                waitlist / message on WhatsApp] and ask to be added to the
                cancellation list for your preferred dates.
              </Fill>
            </P>
            <P className="mt-4">
              Keep your dates flexible and check back close to the day — a
              released seat from a cancellation is the most common way people
              get in on short notice.
            </P>

            {/* CTA */}
            <div className="my-14 flex justify-center">
              <FancyLink
                target="_blank"
                destination="/nxt/visit"
                className="w-fit p-4 text-d-small uppercase text-black font-default tracking-widest transition-all ease-linear hover:bg-black hover:text-white border border-black rounded-xl"
              >
                Reserve your table at Locavore NXT
              </FancyLink>
            </div>

            {/* FAQ */}
            <H2>Frequently asked questions</H2>
            <div className="mt-4 flex flex-col divide-y divide-black/15 border-y border-black/15">
              {FAQS.map((faq, i) => (
                <div key={i} className="py-6">
                  <h3 className="font-default font-bold text-lg sm:text-xl">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed opacity-80">
                    <Fill>{faq.answer}</Fill>
                  </p>
                </div>
              ))}
            </div>
          </article>
        </Container>
      </section>

        {/* Next Guide marquee (editorial-style) */}
        <NextArticle
          articleTitle={next ? 'Next Guide' : 'More Guides'}
          destination={next ? next.href : HUB_HREF}
          title={next ? next.title : 'Explore all NXT guides'}
          category={next ? next.category : 'Guides'}
          timeRead={next ? next.readTime : 'Browse'}
          thumbnail={next ? next.thumbnail : '/nxt2/visit/hero.png'}
          bgColor="#CF7D57"
          border={true}
        />

        <StickyButton destination="/nxt/guides" arrow="left">
          All NXT Guides
        </StickyButton>
      </div>

      <Footer footer={footer} mailchimp={setting.mailchimpID} />
    </Layout>
  )
}

export async function getStaticProps() {
  const homeAPI = await client.fetch(`*[_type == "homeNxt"]`)
  const settingAPI = await client.fetch(`*[_type == "settings"]`)
  const footerAPI = await client.fetch(`*[_type == "footer"]`)
  const headerAPI = await client.fetch(`*[_type == "header"]`)
  const familyListAPI = await client.fetch(
    `*[_type == "family_list"] | order(order asc)`,
  )
  return {
    props: {
      homeAPI,
      settingAPI,
      footerAPI,
      headerAPI,
      familyListAPI,
    },
  }
}

export default ReservationGuide
