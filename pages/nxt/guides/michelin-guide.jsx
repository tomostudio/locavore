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
import NextArticle from "@/components/modules/editorial/nextArticle";
import Footer from "@/components/modules/footer";
import { HUB_HREF, nextLiveGuide } from "@/helpers/nxt/guides";

const PUBLISH_DATE = "2026-09-08";
const CURRENT_HREF = "/nxt/guides/michelin-guide";

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
      "Locavore was the only Indonesian restaurant to rank consistently on Asia’s 50 Best Restaurants at the time and was named the most sustainable restaurant in Asia. Since opening in December 2023, NXT has been recognised with the Sustainable Restaurant Award from Asia’s 50 Best (2025) and the Ethical & Sustainability Award from La Liste, and it ranks #44 on Asia’s 50 Best Restaurants in 2026. In this region, those lists are the closest thing to a Michelin benchmark.",
  },
  {
    question: "Is Locavore NXT fine dining?",
    answer:
      "Yes. Locavore NXT serves one seasonal tasting menu in Ubud, The Source 2.0, built around Indonesian ingredients, especially those from around Bali and the ones that the team grows and forages. Walk-ins are welcome depending on availability, though reservations are recommended. The format and the standard are what you would expect from fine dining, whether or not a Michelin guide covers the country.",
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
    title: "Is Locavore NXT a Michelin Starred Restaurant?",
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
        title="Is Locavore NXT a Michelin Starred Restaurant?"
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
                Locavore NXT doesn’t have a Michelin star, and neither does any
                restaurant in Indonesia. Michelin doesn’t run a restaurant guide
                in Indonesia as of 2026, so no Bali restaurant is eligible for a
                star yet. That’s down to where Michelin publishes, not the
                quality of the restaurant. The first decade when we opened, the
                original Locavore was the only Indonesian restaurant to rank
                consistently on Asia’s 50 Best and received the Sustainable
                Restaurant Award from the same institution, and Locavore NXT,
                the progression of the original restaurant, has carried that
                reputation on.
              </P>

              <div className="my-12 border border-black/20 rounded-2xl p-6 sm:p-8">
                <span className="block font-default font-bold text-[20px] sm:text-[24px]">
                  The short answer
                </span>
                <ul className="list-disc pl-6 mt-5 flex flex-col gap-3 text-[1.0625rem] leading-relaxed marker:opacity-40">
                  <li>
                    There is no Michelin restaurant guide for Indonesia as of
                    2026, so no Bali restaurant holds a star.
                  </li>
                  <li>
                    Locavore is recognised through Asia’s 50 Best and awards for
                    sustainability, not Michelin.
                  </li>
                  <li>
                    Locavore NXT is a full fine-dining experience: one seasonal
                    tasting menu, The Source 2.0, with reservations recommended.
                  </li>
                </ul>
              </div>

              <H2>Does Locavore have a Michelin star?</H2>
              <P>
                No. Neither the original Locavore nor Locavore NXT holds a
                Michelin star, because Michelin doesn’t rate restaurants in
                Indonesia as of 2026. A star can only be awarded where Michelin
                publishes a guide, and Bali isn’t currently within that
                coverage.
              </P>
              <P className="mt-4">
                If you’ve seen Locavore called “Michelin-level” or
                “Michelin-worthy,” that’s a compliment about quality rather than
                an official rating. There are no Michelin-starred restaurants in
                Bali today.
              </P>

              <H2>Is there a Michelin Guide for Bali or Indonesia?</H2>
              <P>
                Not for restaurants, as of 2026. Michelin runs its restaurant
                guide in selected markets and keeps adding new ones (Thailand,
                Singapore, and the Philippines from 2026), but Indonesia isn’t
                among them yet.
              </P>
              <P className="mt-4">
                In October 2025 Michelin brought its hotel rating, the Michelin
                Keys, to Indonesia, and several Bali properties earned them.
                That is a distinction for hotels, not a restaurant star, so it
                doesn’t change the fact that no Indonesian restaurant holds a
                Michelin star.
              </P>

              <H2>What awards has Locavore won?</H2>
              <P>
                Locavore was founded by chefs Eelke Plasmeijer and Ray
                Adriansyah in 2013, and the original restaurant’s reputation was
                built on Asia’s 50 Best Restaurants, where it was the only
                Indonesian restaurant to rank year after year at the time, and
                was named the most sustainable restaurant in Asia.
              </P>

              <P className="mt-4">
                The recognition since NXT opened spans the world’s dining lists
                and the sustainability world in equal measure.
              </P>

              <h3 className="font-default font-bold text-lg sm:text-xl mt-8 mb-3">
                2026
              </h3>
              <ul className="list-disc pl-6 flex flex-col gap-2 text-[1.0625rem] leading-relaxed marker:opacity-40">
                <li>#44, Asia’s 50 Best Restaurants</li>
                <li>Indonesia’s 20 Best Restaurants, Tatler Best Indonesia</li>
                <li>Indonesia’s 30 Best Restaurants, Prestige Gourmet</li>
                <li>
                  Three Stars, Food Made Good Standard (Sustainable Restaurant
                  Association)
                </li>
              </ul>

              <h3 className="font-default font-bold text-lg sm:text-xl mt-8 mb-3">
                2025
              </h3>
              <ul className="list-disc pl-6 flex flex-col gap-2 text-[1.0625rem] leading-relaxed marker:opacity-40">
                <li>#92, Asia’s 50 Best Restaurants</li>
                <li>Sustainable Restaurant Award, Asia’s 50 Best</li>
                <li>Ethical &amp; Sustainability Award, La Liste</li>
                <li>Gold Award, Prestige Gourmet Awards</li>
                <li>Top Restaurants, Opinionated About Dining</li>
                <li>Three Knives, the top rating at The Best Chef Awards</li>
                <li>
                  Three Stars, Food Made Good Standard (Sustainable Restaurant
                  Association)
                </li>
                <li>Best 100 Restaurants, Tatler Best Asia Pacific</li>
                <li>Tastemakers 2025/26, Travel + Leisure</li>
              </ul>

              <P className="mt-8">
                For most travellers, these lists are how they find the
                restaurant in the first place, and together they are the closest
                thing the region has to a Michelin benchmark.
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
                was again recognised with the Sustainable Restaurant Award from
                Asia’s 50 Best (2025) and the Ethical &amp; Sustainability Award
                from La Liste.
              </P>

              <H2>Is Locavore NXT fine dining?</H2>
              <P>
                Yes. Locavore NXT serves one seasonal tasting menu, The Source
                2.0, built around Indonesian ingredients, much of it grown and
                foraged by the team. Walk-ins are welcome depending on
                availability, though reservations are recommended. The format,
                the sourcing and the level of the cooking are what you’d expect
                from a destination fine-dining restaurant.
              </P>
              <P className="mt-4">
                For the courses, the price and what to expect on the night, see
                our{" "}
                <FancyLink
                  destination="/nxt/guides/tasting-menu-guide"
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
