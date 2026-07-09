import Layout from "@/components/modules/layout";
import SEO from "@/components/utils/seo";
import Image from "next/image";
import {
  FAQPageSchema,
  BreadcrumbSchema,
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
import { HUB_HREF, nextLiveGuide } from "@/helpers/nxt/guides";

const PUBLISH_DATE = "2026-07-09";
const CURRENT_HREF = "/nxt/michelin-guide";

// Article hero — feeds the OG / Article-schema image and the in-body figure.
const HERO_IMAGE = "/guides/chefs-eelke-ray.webp";

const FAQS = [
  {
    question: "Does Locavore have a Michelin star?",
    answer:
      "No, and no restaurant in Indonesia does. The Michelin Guide does not rate restaurants in Indonesia as of 2026, so Bali restaurants cannot be awarded stars. Locavore is recognised in other ways: it was rated the most sustainable restaurant in Asia and was the only Indonesian restaurant to rank consistently on Asia’s 50 Best.",
  },
  {
    question: "Is there a Michelin Guide for Bali or Indonesia?",
    answer:
      "Not for restaurants, as of 2026. Michelin publishes restaurant guides in selected countries, and Indonesia is not among them yet (its Michelin Keys, launched in 2025, rate hotels, not restaurants). With no restaurant guide for the region, no Bali restaurant holds a Michelin star, however good the cooking.",
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
      <ArticleSchema
        headline={article.title}
        description="Does Locavore have a Michelin star? Why there is no Michelin restaurant guide in Bali or Indonesia, and the awards Locavore actually holds."
        url={absoluteUrl(router.pathname)}
        image={absoluteUrl(HERO_IMAGE)}
        datePublished={PUBLISH_DATE}
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
                No, Locavore NXT doesn&rsquo;t have a Michelin star, and neither
                does any restaurant in Indonesia. Michelin doesn&rsquo;t run a
                restaurant guide in Indonesia as of 2026, so no Bali restaurant
                is eligible for a star yet. That&rsquo;s down to where Michelin
                publishes, not the cooking. The recognition comes from
                elsewhere: the original Locavore was the only Indonesian
                restaurant to rank consistently on Asia&rsquo;s 50 Best and the
                most sustainable in Asia, and Locavore NXT, the restaurant that
                replaced it in 2023, has carried that reputation on.
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
                    There is no Michelin restaurant guide for Indonesia as of
                    2026, so no Bali restaurant holds a star.
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
                No. Neither the original Locavore nor Locavore NXT holds a
                Michelin star, because Michelin doesn&rsquo;t rate restaurants in
                Indonesia as of 2026. A star can only be awarded where Michelin
                publishes a guide, and Bali isn&rsquo;t currently within that
                coverage.
              </P>
              <P className="mt-4">
                If you&rsquo;ve seen Locavore called
                &ldquo;Michelin-level&rdquo; or &ldquo;Michelin-worthy,&rdquo;
                that&rsquo;s a compliment about quality rather than an official
                rating. There are no Michelin-starred restaurants in Bali today.
              </P>

              <H2>Is there a Michelin Guide for Bali or Indonesia?</H2>
              <P>
                Not for restaurants, as of 2026. Michelin runs its restaurant
                guide in selected markets and keeps adding new ones (Thailand,
                Singapore, and the Philippines from 2026), but Indonesia
                isn&rsquo;t among them yet.
              </P>
              <P className="mt-4">
                There is one wrinkle worth knowing. In October 2025 Michelin
                brought its hotel rating, the Michelin Keys, to Indonesia, and
                several Bali properties earned them. That is a distinction for
                hotels, not a restaurant star, so it doesn&rsquo;t change the
                fact that no Indonesian restaurant holds a Michelin star.
              </P>

              <H2>What awards has Locavore won?</H2>
              <P>
                Locavore was founded by chefs Eelke Plasmeijer and Ray
                Adriansyah in 2013, and the original restaurant&rsquo;s
                reputation was built on Asia&rsquo;s 50 Best Restaurants, where
                it was the only Indonesian restaurant to rank year after year,
                and on being named the most sustainable restaurant in Asia.
              </P>

              <Figure
                src={HERO_IMAGE}
                alt="Locavore NXT co-founders and chefs Eelke Plasmeijer and Ray Adriansyah"
                width={1600}
                height={1067}
                caption="Locavore co-founders Eelke Plasmeijer and Ray Adriansyah, who opened NXT in 2023."
              />

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
