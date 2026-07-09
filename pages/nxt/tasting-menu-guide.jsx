import Layout from "@/components/modules/layout";
import SEO from "@/components/utils/seo";
import {
  FAQPageSchema,
  BreadcrumbSchema,
} from "@/components/utils/structuredData";
import client from "@/helpers/sanity/client";
import { useAppContext } from "context/state";
import { useRouter } from "next/router";
import { Children, useEffect, useState } from "react";
import Container from "@/components/modules/container";
import HeaderGap from "@/components/modules/headerGap";
import OpeningArticle from "@/components/modules/editorial/openingArticle";
import StickyButton from "@/components/modules/stickyButton";
import FancyLink from "@/components/utils/fancyLink";
import Arrow from "@/components/utils/arrow";
import NextArticle from "@/components/modules/editorial/nextArticle";
import Footer from "@/components/modules/footer";
import { HUB_HREF, nextLiveGuide } from "@/helpers/nxt/guides";

const PUBLISH_DATE = "2026-07-11";
const CURRENT_HREF = "/nxt/tasting-menu-guide";

const highlight = (text, keyPrefix) =>
  String(text)
    .split(/(\[[^\]]+\])/g)
    .map((part, i) =>
      part.startsWith("[") && part.endsWith("]") ? (
        <mark
          key={`${keyPrefix}-${i}`}
          className="bg-amber-300/90 text-black px-1 rounded-sm font-medium"
        >
          {part}
        </mark>
      ) : (
        <span key={`${keyPrefix}-${i}`}>{part}</span>
      ),
    );

const Fill = ({ children }) => (
  <>
    {Children.map(children, (child, ci) =>
      typeof child === "string" ? highlight(child, ci) : child,
    )}
  </>
);

const FAQS = [
  {
    question: "How many courses is the Locavore NXT tasting menu?",
    answer:
      "Locavore NXT serves one set tasting menu, called The Source, of 16 courses that changes with the seasons. There is no à la carte, so everyone at the table is served the same progression.",
  },
  {
    question: "How much does the Locavore NXT tasting menu cost?",
    answer:
      "The Source is IDR 2,200,000++ per person. A beverage pairing is optional but recommended: IDR 850,000++ with alcohol, or IDR 650,000++ for the non-alcoholic version. The ++ covers tax and service, and any extra drinks are added on the night.",
  },
  {
    question: "How long does dinner at Locavore NXT take?",
    answer:
      "Plan for three to three and a half hours. It is a single, unhurried tasting menu meant to be the evening itself, so it is best not booked before other plans.",
  },
  {
    question: "Is there a dress code at Locavore NXT?",
    answer:
      "There is no formal dress code. Ubud is warm and humid year-round, so comfortable, breathable clothing is the norm and smart-casual is plenty.",
  },
  {
    question: "Can the tasting menu be adapted for dietary needs?",
    answer:
      "With notice at booking, yes. NXT already cooks without imports, dairy or wheat and with little animal protein, so it is well suited to dietary needs. Because the menu is composed for the whole table, adaptations are arranged in advance rather than on the night.",
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

const TastingMenuGuide = ({ homeAPI, settingAPI, footerAPI }) => {
  const router = useRouter();
  const appContext = useAppContext();
  const [home] = homeAPI;
  const [setting] = settingAPI;
  const [footer] = footerAPI;

  const [baseUrl, setBaseUrl] = useState();
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
        inputSEO={{
          seo_description:
            "What to expect from the Locavore NXT tasting menu in Ubud, Bali — how many courses, the price, pairings, dress code and how long dinner takes.",
        }}
        defaultSEO={typeof home !== "undefined" && home.seo}
        webTitle={typeof setting !== "undefined" && setting.webTitle}
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
                Locavore NXT serves one set tasting menu, called The Source: 16
                courses at IDR 2,200,000++ per person, changing with
                what&rsquo;s growing, ripening and being foraged around Ubud.
                There&rsquo;s no à la carte. Everyone at the table eats the same
                progression, and it runs about three to three and a half hours.
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
                    &mdash; 16 courses, no à la carte, changing with the season.
                  </li>
                  <li>
                    <strong>Price:</strong> IDR 2,200,000++ per person, plus an
                    optional pairing from IDR 650,000++.
                  </li>
                  <li>
                    <strong>Time:</strong> about 3 to 3.5 hours, so keep the
                    whole evening free.
                  </li>
                  <li>
                    <strong>Dress:</strong> no formal code; comfortable for a
                    warm, humid climate.
                  </li>
                </ul>
              </div>

              <H2>What is on the Locavore NXT tasting menu?</H2>
              <P>
                The Source is built almost entirely from ingredients the team
                grows, ferments or forages: NXT&rsquo;s rooftop food forest, the
                rice paddies next door, and the jungle around Ubud. The kitchen
                sticks to a few firm rules &mdash; no imports, no dairy or
                wheat, less animal protein, and as close to zero waste as they
                can get (they&rsquo;re currently running a 98%-plus waste-free
                kitchen). What lands on your table depends on what&rsquo;s wild
                and ripe that week, not a fixed carte.
              </P>
              <P className="mt-4">
                Expect 16 courses that start small and build, each one
                introduced as it lands. The whole thing is about where
                you&rsquo;re sitting: dishes are meant to taste of this patch of
                Bali, pairing things you half-recognise with others that are
                genuinely wild and unfamiliar.
              </P>

              <H2>How much does the Locavore NXT tasting menu cost?</H2>
              <P>
                The Source is IDR 2,200,000++ per person. The optional beverage
                pairing, made with the same local, foraged and fermented
                ingredients as the food, is IDR 850,000++ with alcohol or IDR
                650,000++ for the non-alcoholic (or very low-ABV) version. The
                ++ is tax and service on top.
              </P>
              <P className="mt-4">
                You pay to secure the table when you book, and any drinks beyond
                the pairing are added on the night. Prices are confirmed at
                checkout, so the booking page always shows the current figure.
              </P>
              <P className="mt-4">
                For booking steps, lead times and how payment works, see our{" "}
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
                Plan for three to three and a half hours at the table. Dinner
                seatings begin between 17:30 and 20:30, with a lunch service too
                (Thursday to Saturday from 12:00), and the 16 courses unfold at
                an unhurried pace. It&rsquo;s best kept as the whole evening
                rather than slotted in before other plans.
              </P>

              <H2>What should you wear to Locavore NXT?</H2>
              <P>
                There&rsquo;s no formal dress code and no jacket required. Ubud
                is warm and humid all year, so most guests wear something smart
                but breathable. The room is considered without being stiff, so
                you won&rsquo;t feel underdressed in smart-casual.
              </P>

              <H2>Can the menu be adapted for dietary needs?</H2>
              <P>
                With advance notice, most needs can be handled. Flag allergies
                and preferences <em>when you book</em>, not on the night, since
                the menu is composed for the whole table. The kitchen already
                cooks without dairy or wheat and with little animal protein,
                which gives it plenty to work with.
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
          articleTitle={next ? "Next Guide" : "More Guides"}
          destination={next ? next.href : HUB_HREF}
          title={next ? next.title : "Explore all NXT guides"}
          category={next ? next.category : "Guides"}
          timeRead={next ? next.readTime : "Browse"}
          thumbnail={next ? next.thumbnail : "/nxt2/visit/hero.png"}
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
