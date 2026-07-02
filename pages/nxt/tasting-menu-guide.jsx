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
import Arrow from '@/components/utils/arrow'
import NextArticle from '@/components/modules/editorial/nextArticle'
import Footer from '@/components/modules/footer'
import { HUB_HREF, nextLiveGuide } from '@/helpers/nxt/guides'

// Michelin/fine-dining SEO cluster, piece 2 of 8 — tasting menu / price.
// Amber-highlighted spans mark facts to VERIFY before publishing (price, course
// count, duration, dress code). FAQ items feed both the visible list and the
// FAQPage JSON-LD.

const PUBLISH_DATE = '2026-07-11'
const CURRENT_HREF = '/nxt/tasting-menu-guide'

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

const Fill = ({ children }) => (
  <>
    {Children.map(children, (child, ci) =>
      typeof child === 'string' ? highlight(child, ci) : child,
    )}
  </>
)

const FAQS = [
  {
    question: 'How many courses is the Locavore NXT tasting menu?',
    answer:
      'Locavore NXT serves a single set tasting menu of [number] courses that changes with the seasons. There is no à la carte option — every guest at the table is served the same progression on the night.',
  },
  {
    question: 'How much does the Locavore NXT tasting menu cost?',
    answer:
      'The menu is [price] per person, with an optional wine or non-alcoholic pairing from [pairing price]. Prices are confirmed at booking; service and any additional drinks are [added on the night / included].',
  },
  {
    question: 'How long does dinner at Locavore NXT take?',
    answer:
      'Plan for roughly [3–4 hours]. It is a single seating built as one continuous experience, so it is best treated as the whole evening rather than a quick dinner before other plans.',
  },
  {
    question: 'Is there a dress code at Locavore NXT?',
    answer:
      'The dress code is [smart casual — no jacket required]. Ubud is warm and humid year-round, so comfortable, breathable clothing is the norm; there is [no formal requirement].',
  },
  {
    question: 'Can the tasting menu be adapted for dietary needs?',
    answer:
      'With notice at booking, yes. Because the menu is composed for the whole table, [vegetarian / pescatarian / specific-allergy] adaptations are arranged in advance rather than on the night.',
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

const TastingMenuGuide = ({ homeAPI, settingAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [home] = homeAPI
  const [setting] = settingAPI
  const [footer] = footerAPI

  const [baseUrl, setBaseUrl] = useState()
  const [snackBar, setSnackBar] = useState(false)

  const article = {
    title: 'Locavore NXT Tasting Menu: Courses, Price & What to Expect',
    category: { title: 'Food' },
    date: PUBLISH_DATE,
    description: [],
    show_article: false,
  }

  const next = nextLiveGuide(CURRENT_HREF)

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
        title="Locavore NXT Tasting Menu: Courses, Price & What to Expect"
        pagelink={router.pathname}
        inputSEO={{
          seo_description:
            'What to expect from the Locavore NXT tasting menu in Ubud, Bali — how many courses, the price, pairings, dress code and how long dinner takes.',
        }}
        defaultSEO={typeof home !== 'undefined' && home.seo}
        webTitle={typeof setting !== 'undefined' && setting.webTitle}
      />
      <FAQPageSchema faqs={FAQS} />
      <BreadcrumbSchema path={router.asPath} />

      <div className="relative z-10 bg-white text-black flow-root">
        <HeaderGap />

        <OpeningArticle
          general={setting}
          article={article}
          baseUrl={baseUrl}
          snackBar={snackBar}
          setSnackBar={setSnackBar}
        />

        <section className="mt-10 w-full h-full">
          <Container className="max-md:px-6">
            <article className="max-w-[800px] w-full mx-auto text-black">
              <P className="text-xl sm:text-2xl leading-snug font-serif">
                <Fill>
                  Locavore NXT is a single set tasting menu of [number] courses,
                  [price] per person, that changes with what&rsquo;s growing and
                  being foraged around Ubud.
                </Fill>{' '}
                There&rsquo;s no à la carte — the whole table follows the same
                progression, over roughly [3–4 hours], as one continuous
                experience.
              </P>

              <div className="my-12 border border-black/20 rounded-2xl p-6 sm:p-8">
                <span className="font-serif italic text-[20px] sm:text-[24px] flex items-center">
                  <Arrow
                    position="right"
                    fill="black"
                    sizeLeftRight="14"
                    className="mr-3"
                  />
                  At a glance
                </span>
                <ul className="mt-5 flex flex-col gap-3 text-[1.0625rem] leading-relaxed">
                  <li>
                    <Fill>
                      <strong>The menu:</strong> one set tasting menu of [number]
                      courses, no à la carte, changing with the season.
                    </Fill>
                  </li>
                  <li>
                    <Fill>
                      <strong>Price:</strong> [price] per person, plus an optional
                      pairing from [pairing price].
                    </Fill>
                  </li>
                  <li>
                    <Fill>
                      <strong>Time:</strong> allow [3–4 hours] — it&rsquo;s the
                      whole evening, not a quick dinner.
                    </Fill>
                  </li>
                  <li>
                    <Fill>
                      <strong>Dress:</strong> [smart casual], comfortable for a
                      warm, humid climate.
                    </Fill>
                  </li>
                </ul>
              </div>

              <H2>What is on the Locavore NXT tasting menu?</H2>
              <P>
                <Fill>
                  The menu is a set progression of [number] courses built around
                  Balinese and Indonesian ingredients — much of it grown,
                  fermented or foraged by the team.
                </Fill>{' '}
                It changes regularly, so the exact dishes on your night depend on
                the season rather than a fixed carte.
              </P>
              <P className="mt-4">
                Expect a mix of small opening bites, a run of savoury courses,
                and a sweet finish, each introduced as it&rsquo;s served. The
                emphasis is on place and provenance — dishes are designed to show
                where you are, not to replicate fine dining from elsewhere.
              </P>

              <H2>How much does the Locavore NXT tasting menu cost?</H2>
              <P>
                <Fill>
                  The tasting menu is [price] per person. An optional wine
                  pairing is [wine pairing price], and a non-alcoholic pairing —
                  often built from house ferments and garden botanicals — is
                  [NA pairing price].
                </Fill>
              </P>
              <P className="mt-4">
                <Fill>
                  A deposit is taken at booking and is [applied to your final
                  bill]. Service and any drinks beyond the pairing are [added on
                  the night]. Prices are confirmed when you reserve, so check the
                  booking page for the current menu price.
                </Fill>
              </P>
              <P className="mt-4">
                For booking steps, lead times and the deposit policy, see our{' '}
                <FancyLink
                  destination="/nxt/reservation-guide"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  guide to getting a reservation at Locavore NXT
                </FancyLink>
                .
              </P>

              <H2>How long does dinner take?</H2>
              <P>
                <Fill>
                  Plan for around [3–4 hours]. Because it&rsquo;s a single
                  seating run as one continuous experience, it&rsquo;s best to
                  keep the evening free rather than book it before other plans.
                </Fill>
              </P>

              <H2>What should you wear to Locavore NXT?</H2>
              <P>
                <Fill>
                  The dress code is [smart casual] — [no jacket or formal wear
                  required]. Ubud is warm and humid all year, so most guests wear
                  something comfortable and breathable.
                </Fill>{' '}
                The setting is considered but relaxed; you won&rsquo;t feel out of
                place in smart-casual attire.
              </P>

              <H2>Can the menu be adapted for dietary needs?</H2>
              <P>
                <Fill>
                  With advance notice, most needs can be accommodated. Flag
                  allergies and preferences <em>when you book</em> — because the
                  menu is composed for the whole table, [vegetarian / pescatarian
                  / specific-allergy] versions are arranged ahead, not on the
                  night.
                </Fill>
              </P>

              <div className="my-14 flex justify-center">
                <FancyLink
                  target="_blank"
                  destination="/nxt/visit"
                  className="w-fit p-4 text-d-small uppercase text-black font-default tracking-widest transition-all ease-linear hover:bg-black hover:text-white border border-black rounded-xl"
                >
                  Reserve your table at Locavore NXT
                </FancyLink>
              </div>

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
    props: { homeAPI, settingAPI, footerAPI, headerAPI, familyListAPI },
  }
}

export default TastingMenuGuide
