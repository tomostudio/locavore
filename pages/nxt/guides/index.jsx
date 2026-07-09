import Layout from "@/components/modules/layout";
import SEO from "@/components/utils/seo";
import { BreadcrumbSchema } from "@/components/utils/structuredData";
import client from "@/helpers/sanity/client";
import { useAppContext } from "context/state";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Container from "@/components/modules/container";
import HeaderGap from "@/components/modules/headerGap";
import HeadingTitle from "@/components/utils/headingTitle";
import FancyLink from "@/components/utils/fancyLink";
import ArticleCard from "@/components/modules/editorial/articleCard";
import NxtNavigation from "@/components/utils/nxtNavigation";
import Footer from "@/components/modules/footer";
import { NXT_GUIDES } from "@/helpers/nxt/guides";

const ROTATIONS = ["-rotate-2", "rotate-2", "-rotate-1"];

const Guides = ({ homeAPI, settingAPI, footerAPI }) => {
  const router = useRouter();
  const appContext = useAppContext();
  const [home] = homeAPI;
  const [setting] = settingAPI;
  const [footer] = footerAPI;

  useEffect(() => {
    window.scroll(0, 0);
    appContext.setHeader({ headerStyle: "default" });
    return () => appContext.setHeader({ headerStyle: "default" });
  }, []);

  return (
    <Layout>
      <SEO
        title="Locavore NXT Guides: Reservations, Menu & Visiting"
        pagelink={router.pathname}
        inputSEO={{
          seo_description:
            "Practical guides to visiting Locavore NXT in Ubud, Bali — how to reserve, what the tasting menu costs, and what to expect on the night.",
        }}
        defaultSEO={typeof home !== "undefined" && home.seo}
        webTitle={typeof setting !== "undefined" && setting.webTitle}
      />
      <BreadcrumbSchema path={router.asPath} />

      <div className="relative z-10 bg-white text-black flow-root min-h-screen">
        <HeaderGap />
        <section className="pt-6">
          <Container className="max-md:px-6">
            {/* Centered title — site convention: sans display with a
                serif-italic accent word (see the Family page title). */}
            <HeadingTitle>
              <span className="sub">The</span>NXT Guides
            </HeadingTitle>

            {/* Card grid */}
            <div className="max-w-[1080px] mx-auto mt-12 mb-28 grid grid-cols-3 max-md:grid-cols-1 gap-x-12 gap-y-16">
              {NXT_GUIDES.map((guide, i) => {
                const card = (
                  <ArticleCard
                    className={`h-[440px] max-md:h-[380px] ${
                      ROTATIONS[i % ROTATIONS.length]
                    } group-hover:rotate-0`}
                    title={guide.title}
                    category={guide.category}
                    timeRead={guide.live ? guide.readTime : "Coming soon"}
                    src={guide.live ? guide.thumbnail : undefined}
                    alt={guide.title}
                    bgColor="#CF7D57"
                    border={true}
                  />
                );
                return guide.live ? (
                  <FancyLink key={i} destination={guide.href} className="group">
                    {card}
                  </FancyLink>
                ) : (
                  <div key={i} className="opacity-50 pointer-events-none">
                    {card}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
        <NxtNavigation />
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
    props: {
      homeAPI,
      settingAPI,
      footerAPI,
      headerAPI,
      familyListAPI,
    },
  };
}

export default Guides;
