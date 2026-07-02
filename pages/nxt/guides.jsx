import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import { BreadcrumbSchema } from '@/components/utils/structuredData'
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Container from '@/components/modules/container'
import HeaderGap from '@/components/modules/headerGap'
import FancyLink from '@/components/utils/fancyLink'
import Arrow from '@/components/utils/arrow'
import NxtNavigation from '@/components/utils/nxtNavigation'
import Footer from '@/components/modules/footer'
import { NXT_GUIDES as GUIDES } from '@/helpers/nxt/guides'

// Hub page for the Locavore NXT guides cluster (hub-and-spoke). Live entries
// link out; upcoming ones show as "Coming soon" so the hub never links to a
// page that doesn't exist yet. Guide list lives in helpers/nxt/guides.js.

const Guides = ({ homeAPI, settingAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [home] = homeAPI
  const [setting] = settingAPI
  const [footer] = footerAPI

  useEffect(() => {
    window.scroll(0, 0)
    appContext.setHeader({ headerStyle: 'default' })
    return () => {
      appContext.setHeader({ headerStyle: 'default' })
    }
  }, [])

  return (
    <Layout>
      <SEO
        title="Locavore NXT Guides: Reservations, Menu & Visiting"
        pagelink={router.pathname}
        inputSEO={{
          seo_description:
            'Practical guides to visiting Locavore NXT in Ubud, Bali — how to reserve, what the tasting menu costs, and what to expect on the night.',
        }}
        defaultSEO={typeof home !== 'undefined' && home.seo}
        webTitle={typeof setting !== 'undefined' && setting.webTitle}
      />
      <BreadcrumbSchema path={router.asPath} />

      {/* /nxt routes get a black body (see _app.jsx); restore the light theme. */}
      <div className="relative z-10 bg-white text-black min-h-screen">
        <HeaderGap />

        <section className="pt-10 w-full h-full">
          <Container className="max-md:px-6">
            <div className="max-w-[900px] w-full mx-auto">
              {/* Header */}
              <span className="uppercase tracking-widest text-xs opacity-50">
                Visiting Locavore NXT
              </span>
              <h1 className="m-0 mt-4 font-sans font-normal text-5xl sm:text-6xl md:text-7xl leading-none">
                Guides
              </h1>
              <p className="mt-6 max-w-[640px] text-lg leading-relaxed opacity-80">
                Everything you need to plan an evening at Locavore NXT — how to
                book, what the tasting menu involves, and what to know before you
                go.
              </p>

              {/* Guide list */}
              <div className="mt-12 flex flex-col divide-y divide-black/15 border-y border-black/15">
                {GUIDES.map((guide, i) =>
                  guide.live ? (
                    <FancyLink
                      key={i}
                      destination={guide.href}
                      className="group py-7 flex items-start justify-between gap-6 transition-opacity hover:opacity-60"
                    >
                      <span className="flex flex-col gap-2">
                        <span className="font-default font-bold text-xl sm:text-2xl">
                          {guide.title}
                        </span>
                        <span className="text-[1.0625rem] leading-relaxed opacity-70 max-w-[640px]">
                          {guide.description}
                        </span>
                      </span>
                      <Arrow
                        position="right"
                        fill="black"
                        className="mt-2 shrink-0"
                      />
                    </FancyLink>
                  ) : (
                    <div
                      key={i}
                      className="py-7 flex items-start justify-between gap-6 opacity-40"
                    >
                      <span className="flex flex-col gap-2">
                        <span className="font-default font-bold text-xl sm:text-2xl">
                          {guide.title}
                        </span>
                        <span className="text-[1.0625rem] leading-relaxed max-w-[640px]">
                          {guide.description}
                        </span>
                      </span>
                      <span className="mt-2 shrink-0 uppercase tracking-widest text-[0.65rem] border border-black/40 rounded-full px-3 py-1">
                        Coming soon
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </Container>
        </section>

        <NxtNavigation />
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

export default Guides
