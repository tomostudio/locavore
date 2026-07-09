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

const PUBLISH_DATE = "2026-07-14";
const CURRENT_HREF = "/nxt/michelin-guide";

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
    question: "Does Locavore have a Michelin star?",
    answer:
      "No, and no restaurant in Indonesia does. The Michelin Guide does not cover Indonesia as of 2026, so Bali restaurants cannot be awarded stars. Locavore is recognised in other ways: it was rated the most sustainable restaurant in Asia and was the only Indonesian restaurant to rank consistently on Asia’s 50 Best.",
  },
  {
    question: "Is there a Michelin Guide for Bali or Indonesia?",
    answer:
      "Not at present, as of 2026. Michelin publishes guides for selected countries and cities, and Indonesia is not among them yet. Because there is no guide for the region, no Bali restaurant holds a Michelin star, however good the cooking.",
  },
  {
    question: "What awards has Locavore won?",
    answer:
      "Locavore was the only Indonesian restaurant to rank consistently on Asia’s 50 Best Restaurants and was rated the most sustainable restaurant in Asia. Since opening in December 2023, NXT has won the Sustainable Restaurant Award from Asia’s 50 Best (2025) and the Ethical & Sustainability Award from La Liste. In this region, those lists are the closest thing to a Michelin benchmark.",
  },
  {
    question: "Is Locavore NXT fine dining?",
    answer:
      "Yes. Locavore NXT is a reservation-only tasting-menu restaurant in Ubud, built around Balinese and Indonesian ingredients the team grows and forages. The format and the standard are what you would expect from fine dining, whether or not a Michelin guide covers the country.",
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

const MichelinGuide = ({ homeAPI, settingAPI, footerAPI }) => {
  const router = useRouter();
  const appContext = useAppContext();
  const [home] = homeAPI;
  const [setting] = settingAPI;
  const [footer] = footerAPI;

  const [baseUrl, setBaseUrl] = useState();
  const [snackBar, setSnackBar] = useState(false);

  const article = {
    title: "Is Locavore Michelin Star? Bali & the Michelin Guide, Explained",
    category: { title: "Visiting NXT" },
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
        title="Is Locavore Michelin Star? Bali & the Michelin Guide, Explained"
        pagelink={router.pathname}
        inputSEO={{
          seo_description:
            "Does Locavore have a Michelin star? Why there is no Michelin Guide in Bali or Indonesia, and the awards Locavore actually holds.",
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
                No, Locavore doesn&rsquo;t have a Michelin star, and neither
                does any restaurant in Indonesia. The Michelin Guide
                doesn&rsquo;t cover the country as of 2026, so no Bali
                restaurant is eligible for a star yet. That&rsquo;s down to
                where Michelin publishes, not the cooking. Locavore&rsquo;s
                recognition comes from elsewhere: it was named the most
                sustainable restaurant in Asia and was the only Indonesian
                restaurant to rank consistently on Asia&rsquo;s 50 Best.
              </P>

              <div className="my-12 border border-black/20 rounded-2xl p-6 sm:p-8">
                <span className="font-serif italic text-[20px] sm:text-[24px] flex items-center">
                  <Arrow
                    position="right"
                    fill="black"
                    sizeLeftRight="14"
                    className="mr-3"
                  />
                  The short answer
                </span>
                <ul className="mt-5 flex flex-col gap-3 text-[1.0625rem] leading-relaxed">
                  <li>
                    There is no Michelin Guide for Indonesia as of 2026, so no
                    Bali restaurant holds a star.
                  </li>
                  <li>
                    Locavore is recognised through Asia&rsquo;s 50 Best and
                    awards for sustainability, not Michelin.
                  </li>
                  <li>
                    Locavore NXT is still a full fine-dining experience:
                    reservation-only, one seasonal tasting menu.
                  </li>
                </ul>
              </div>

              <H2>Does Locavore have a Michelin star?</H2>
              <P>
                No. Locavore holds no Michelin star because Michelin
                doesn&rsquo;t rate restaurants in Indonesia as of 2026. A star
                can only be awarded where Michelin publishes a guide, and Bali
                isn&rsquo;t currently within that coverage.
              </P>
              <P className="mt-4">
                If you&rsquo;ve seen Locavore called
                &ldquo;Michelin-level&rdquo; or &ldquo;Michelin-worthy,&rdquo;
                that&rsquo;s a compliment about quality rather than an official
                rating. There are no Michelin-starred restaurants in Bali today.
              </P>

              <H2>Is there a Michelin Guide for Bali or Indonesia?</H2>
              <P>
                Not right now, as of 2026. Michelin runs guides in selected
                markets and adds new countries over time, but Indonesia
                isn&rsquo;t included yet. Until that changes, nowhere in the
                country, Bali or Jakarta included, can hold a Michelin star.
              </P>

              <H2>What awards has Locavore won?</H2>
              <P>
                Locavore was founded by chefs Eelke Plasmeijer and Ray
                Adriansyah in 2013, and its reputation was built on Asia&rsquo;s
                50 Best Restaurants, where it was the only Indonesian restaurant
                to rank year after year, and on being named the most sustainable
                restaurant in Asia.
              </P>
              <P className="mt-4">
                That thread continues at NXT, which opened in December 2023 and
                has already won the Sustainable Restaurant Award from
                Asia&rsquo;s 50 Best (2025) and the Ethical &amp; Sustainability
                Award from La Liste. For most travellers, those lists are how
                they find the restaurant in the first place.
              </P>

              <H2>Is Locavore NXT still fine dining?</H2>
              <P>
                Yes. Locavore NXT is a reservation-only restaurant serving one
                seasonal tasting menu built around Balinese and Indonesian
                ingredients, much of it grown and foraged by the team. The
                format, the sourcing and the level of the cooking are what
                you&rsquo;d expect from a destination fine-dining restaurant.
                The lack of a star reflects the guide&rsquo;s map, not the
                kitchen.
              </P>
              <P className="mt-4">
                For the courses, the price and what to expect on the night, see
                our{" "}
                <FancyLink
                  destination="/nxt/tasting-menu-guide"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  Locavore NXT tasting menu guide
                </FancyLink>
                .
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

export default MichelinGuide;
