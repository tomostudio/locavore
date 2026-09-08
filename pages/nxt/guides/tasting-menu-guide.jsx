import Layout from "@/components/modules/layout";
import SEO from "@/components/utils/seo";
import Image from "next/image";
import {
  FAQPageSchema,
  ArticleSchema,
} from "@/components/utils/structuredData";
import { absoluteUrl } from "@/helpers/seo/siteConfig";
import client from "@/helpers/sanity/client";
import { useAppContext } from "context/state";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "@/components/modules/container";
import HeaderGap from "@/components/modules/headerGap";
import OpeningArticle from "@/components/modules/editorial/openingArticle";
import StickyButton from "@/components/modules/stickyButton";
import FancyLink from "@/components/utils/fancyLink";
import Arrow from "@/components/utils/arrow";
import NextArticle from "@/components/modules/editorial/nextArticle";
import Footer from "@/components/modules/footer";
import { HUB_HREF, guideByHref, nextLiveGuide } from "@/helpers/nxt/guides";

const CURRENT_HREF = "/nxt/guides/tasting-menu-guide";
// Dates live in helpers/nxt/guides.js so the hub, the sitemap lastmod and the
// Article schema can't drift apart.
const { published: PUBLISH_DATE, updated: UPDATED_DATE } =
  guideByHref(CURRENT_HREF);

// Article hero — feeds the OG / Article-schema image and the in-body figure.
const HERO_ALT =
  "The whole banana ‘tree’, a course from The Source 2.0 tasting menu at Locavore NXT";
const HERO_IMAGE = "/guides/whole-banana-tree.webp";

const FAQS = [
  {
    question: "Is the Creative Beverage Pairing optional?",
    answer:
      "Yes. The pairing is optional but recommended, and it is made with the same local, foraged and fermented ingredients as the food. It is IDR 950,000++ with alcohol or IDR 750,000++ for the non-alcoholic (or very low-ABV) version, and any drinks beyond the pairing are added to your bill on the night.",
  },
  {
    question: "What does the ++ mean at Locavore NXT?",
    answer:
      "It means tax and service are added on top of the listed price, so IDR 2,250,000++ is not the final figure. You add a credit card to secure the table when you book rather than paying for the menu upfront, and the bill is settled on the night.",
  },
  {
    question: "Can you have the tasting menu at lunch?",
    answer:
      "Yes. Lunch and dinner serve the same tasting menu, though the dining experience differs between the two. Lunch service runs Thursday to Saturday from 12:00 to 13:30, and dinner seatings begin between 17:30 and 20:30. Either way, plan for three to three and a half hours at Locavore NXT.",
  },
  {
    question: "How often does the Locavore NXT menu change?",
    answer:
      "The menu changes every 6 months, following a research and development cycle that brings an entirely new set of dishes and Creative Beverage Pairings each time. The current menu is The Source 2.0, with 14 courses made completely with ingredients that grow in Indonesia.",
  },
  {
    question: "Can you celebrate a birthday or anniversary at Locavore NXT?",
    answer:
      "Yes. Mention the occasion when you book, along with any allergies or dietary needs, so the team can plan ahead. Because the menu is set and planned for the whole table, anything you would like arranged is far easier to handle in advance than on the night.",
  },
];

const H2 = ({ children }) => (
  <h2 className="font-default font-bold text-3xl sm:text-4xl mt-16 mb-5 first:mt-0">
    {children}
  </h2>
);

const P = ({ children, className = "" }) => (
  <p className={`text-[1.0625rem] sm:text-lg leading-relaxed ${className}`}>
    {children}
  </p>
);

// Responsive article figure: full-column WebP with an optional caption.
const Figure = ({ src, alt, width, height, caption }) => (
  <figure className="my-10">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="(max-width: 800px) 100vw, 800px"
      className="w-full h-auto rounded-2xl"
    />
    {caption && (
      <figcaption className="mt-3 text-sm opacity-60">{caption}</figcaption>
    )}
  </figure>
);

const TastingMenuGuide = ({ homeAPI, settingAPI, footerAPI }) => {
  const router = useRouter();
  const appContext = useAppContext();
  const [home] = homeAPI;
  const [setting] = settingAPI;
  const [footer] = footerAPI;

  const [baseUrl, setBaseUrl] = useState(absoluteUrl(CURRENT_HREF));
  const [snackBar, setSnackBar] = useState(false);

  const article = {
    title: "Locavore NXT Tasting Menu: Courses, Price & What to Expect",
    category: { title: "Food" },
    date: PUBLISH_DATE,
    description: [],
    show_article: false,
  };

  const next = nextLiveGuide(CURRENT_HREF);

  useEffect(() => {
    window.scroll(0, 0);
    setBaseUrl(window.location.href);
    appContext.setHeader({ headerStyle: "default" });
    return () => {
      appContext.setHeader({ headerStyle: "default" });
    };
  }, []);

  return (
    <Layout>
      <SEO
        title="Locavore NXT Tasting Menu: Courses, Price & What to Expect"
        pagelink={router.pathname}
        type="article"
        image={{
          url: absoluteUrl(HERO_IMAGE),
          alt: HERO_ALT,
          width: 1600,
          height: 1067,
        }}
        inputSEO={{
          seo_description:
            "What to expect from the Locavore NXT tasting menu in Ubud, Bali — how many courses, the price, pairings, dress code and how long dinner takes.",
        }}
        defaultSEO={typeof home !== "undefined" && home.seo}
        webTitle={typeof setting !== "undefined" && setting.webTitle}
      />
      <FAQPageSchema faqs={FAQS} />
      <ArticleSchema
        headline={article.title}
        description="What to expect from the Locavore NXT tasting menu in Ubud, Bali: 14 courses, the price, pairings, dress code and how long dinner takes."
        url={absoluteUrl(router.pathname)}
        image={absoluteUrl(HERO_IMAGE)}
        datePublished={PUBLISH_DATE}
        dateModified={UPDATED_DATE}
        section={article.category.title}
      />

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
              {/* Byline — visible author for E-E-A-T */}
              <p className="text-sm opacity-60 mb-8">
                By the <span className="font-medium">Locavore NXT</span> team
              </p>
              <P className="text-xl sm:text-2xl leading-snug font-serif">
                Locavore NXT serves one set tasting menu, called The Source 2.0:
                14 courses at IDR 2,250,000++ per person. The tasting menu
                follows a 6-month research and development cycle, and each new
                season presents an entirely new set of dishes and Creative
                Beverage Pairings. There’s no à la carte. Everyone at the table
                eats the same progression, and it runs about three to three and
                a half hours.
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
                    <strong>The menu:</strong> one set tasting menu, The Source
                    2.0 (14 courses), no à la carte options available. The menu
                    changes every season on a 6-month cycle.
                  </li>
                  <li>
                    <strong>Price:</strong> IDR 2,250,000++ per person, plus
                    optional Creative Beverage Pairings which start at IDR
                    750,000++, with options for alcoholic and non-alcoholic
                    beverages.
                  </li>
                  <li>
                    <strong>Time:</strong> about 3 to 3.5 hours.
                  </li>
                  <li>
                    <strong>Dress:</strong> no formal code; comfortable for a
                    warm, humid climate.
                  </li>
                </ul>
              </div>

              <H2>What is on the Locavore NXT tasting menu?</H2>
              <P>
                The Source 2.0 is built entirely from ingredients found around
                the NXT gardens and Rooftop Food Forest, with some foraged
                across the island by our in-house foraging team, and many are
                found across Indonesia through local farmers and foragers who
                share the same values with us around sustainability and quality.
                The kitchen sticks to a few firm rules: no imports, no dairy, no
                wheat, less animal protein and as close to zero-waste as we can
                get (currently running a 98% waste-free kitchen).
              </P>

              <Figure
                src={HERO_IMAGE}
                alt={HERO_ALT}
                width={1600}
                height={1067}
                caption="The whole banana ‘tree’, one of the 14 courses on The Source 2.0."
              />

              <H2>How much does the Locavore NXT tasting menu cost?</H2>
              <P>
                The Source 2.0 is IDR 2,250,000++ per person. The Creative
                Beverage Pairing, made with the same local, foraged and
                fermented ingredients as the food, is IDR 950,000++ with alcohol
                or IDR 750,000++ for the non-alcoholic (or very low-ABV)
                version. The ++ is tax and service on top.
              </P>
              <P className="mt-4">
                You add a credit card to secure the table when you book, and any
                drinks beyond the pairing are added on the night. Prices are
                confirmed at checkout, so the booking page always shows the
                current figure.
              </P>
              <P className="mt-4">
                For booking steps, lead times and how payment works, see our{" "}
                <FancyLink
                  destination="/nxt/guides/reservation-guide"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  guide to getting a reservation at Locavore NXT
                </FancyLink>
                .
              </P>

              <H2>How long does the dining experience take?</H2>
              <P>
                Plan for three to three and a half hours at Locavore NXT. The
                tasting menu consists of 14 courses and they arrive one at a
                time, so the meal is meant to be the evening, not slotted in
                before something else. We’d keep the rest of the night clear.
              </P>
              <P className="mt-4">
                Dinner seatings begin between 17:30 and 20:30, with lunch
                service available on Thursday to Saturday from 12:00 to 13:30.
              </P>

              <H2>What should you wear to Locavore NXT?</H2>
              <P>
                There’s no formal dress code and no jacket required. Ubud is
                warm and humid all year, so most guests wear something smart but
                breathable.
              </P>

              <H2>Can the menu be adapted for dietary needs?</H2>
              <P>
                With advance notice, most needs can be handled. Flag allergies
                and preferences <em>when you book</em>, not on the night, since
                each menu is planned ahead for the whole table, so the kitchen
                needs to know in advance rather than on the night. It’s good to
                note that our kitchen already cooks without dairy or wheat and
                with little animal protein.
              </P>

              <div className="my-14 flex justify-center">
                <FancyLink
                  blank
                  destination="https://revasi.net/restaurants/locavorenxt/availability?utm_source=website&utm_medium=referral&utm_campaign=locavore-nxt-tasting-menu-courses-price-what-to-expect"
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
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Container>
        </section>

        <NextArticle
          articleTitle={next ? "Next Guide" : "More Guides"}
          destination={next ? next.href : HUB_HREF}
          title={next ? next.title : "Explore all NXT guides"}
          category={next ? next.category : "Guides"}
          timeRead={next ? next.readTime : "Browse"}
          thumbnail={next ? next.thumbnail : "/nxt2/visit/hero.png"}
          alt={next ? next.title : "Explore all NXT guides"}
          bgColor="#CF7D57"
          border={true}
        />

        <StickyButton destination="/nxt/guides" arrow="left">
          All NXT Guides
        </StickyButton>
      </div>

      <Footer footer={footer} mailchimp={setting.mailchimpID} />
    </Layout>
  );
};

export async function getStaticProps() {
  const homeAPI = await client.fetch(`*[_type == "homeNxt"]`);
  const settingAPI = await client.fetch(`*[_type == "settings"]`);
  const footerAPI = await client.fetch(`*[_type == "footer"]`);
  const headerAPI = await client.fetch(`*[_type == "header"]`);
  const familyListAPI = await client.fetch(
    `*[_type == "family_list"] | order(order asc)`,
  );
  return {
    props: { homeAPI, settingAPI, footerAPI, headerAPI, familyListAPI },
  };
}

export default TastingMenuGuide;
