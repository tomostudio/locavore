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

const PUBLISH_DATE = "2026-07-07";

// Article hero — feeds the OG / Article-schema image and the in-body hero.
const HERO_IMAGE = "/guides/nxt-dining-room.webp";

const FAQS = [
  {
    question: "Do I need a reservation to eat at Locavore NXT?",
    answer:
      "Reservations are strongly recommended. NXT serves a set tasting menu at lunch (Thursday to Saturday) and dinner (Monday to Saturday), with a limited number of seats. Walk-ins are possible, but a table can never be guaranteed, so it is best to book through the reservation link on the NXT visit page.",
  },
  {
    question: "How far in advance do Locavore NXT reservations open?",
    answer:
      "Availability is published through the online reservation system, and the most-wanted nights go first. There is no fixed release date, so the safest approach is to book as soon as your dates are firm rather than waiting until you land in Bali.",
  },
  {
    question: "Do you need to pay a deposit to book Locavore NXT?",
    answer:
      "You add a credit card to secure the booking rather than paying for the menu upfront. The cancellation terms are shown before you confirm, so read them before you finish booking.",
  },
  {
    question: "Is there somewhere for drivers to wait at Locavore NXT?",
    answer:
      "Yes. There is a dedicated waiting area for drivers on site, with its own toilet, so your driver can wait comfortably while you eat.",
  },
  {
    question: "Can Locavore NXT accommodate dietary restrictions?",
    answer:
      "With advance notice, yes. The kitchen already cooks without imports, dairy or wheat and leans lightly on animal protein, so it is well set up for dietary needs. Because the menu is planned for the whole table, note any allergies or restrictions when you book, not on the night.",
  },
  {
    question: "Where is Locavore NXT located?",
    answer:
      "NXT is at Jl. A.A. Gede Rai, Gang Pura Panti Bija, in Lodtunduh, just south of central Ubud. It replaced the original Locavore, which closed in 2023, and sits on its own purpose-built site, so check the map on the visit page before you travel.",
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

const ReservationGuide = ({ homeAPI, settingAPI, footerAPI }) => {
  const router = useRouter();
  const appContext = useAppContext();
  const [home] = homeAPI;
  const [setting] = settingAPI;
  const [footer] = footerAPI;

  const [baseUrl, setBaseUrl] = useState();
  const [snackBar, setSnackBar] = useState(false);

  const article = {
    title: "How to Get a Reservation at Locavore NXT",
    category: { title: "Visiting NXT" },
    date: PUBLISH_DATE,
    description: [],
    show_article: false,
  };

  const next = nextLiveGuide("/nxt/guides/reservation-guide");

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
        title="How to Get a Reservation at Locavore NXT: The Complete Booking Guide"
        pagelink={router.pathname}
        inputSEO={{
          seo_description:
            "How to book Locavore NXT in Ubud, Bali: booking steps, how far ahead to reserve, what it costs, and what to know before you arrive.",
        }}
        defaultSEO={typeof home !== "undefined" && home.seo}
        webTitle={typeof setting !== "undefined" && setting.webTitle}
      />
      <FAQPageSchema faqs={FAQS} />
      <BreadcrumbSchema path={router.asPath} />
      <ArticleSchema
        headline={article.title}
        description="How to book Locavore NXT in Ubud, Bali: booking steps, lead time, what it costs, and what to know before you arrive."
        url={absoluteUrl(router.pathname)}
        image={absoluteUrl(HERO_IMAGE)}
        datePublished={PUBLISH_DATE}
        section={article.category.title}
      />

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
              {/* Byline — visible author for E-E-A-T */}
              <p className="text-sm opacity-60 mb-8">
                By the <span className="font-medium">Locavore NXT</span> team
              </p>
              {/* Answer-first lede */}
              <P className="text-xl sm:text-2xl leading-snug font-serif">
                To book Locavore NXT, open the reservation link on the NXT visit
                page, pick a lunch or dinner seating, and add your credit card
                to secure the booking. NXT serves a set tasting menu for a
                limited number of guests each service, so tables go quickly. If
                you’re planning a dinner or lunch here, reserve as soon as your
                dates are firm.
              </P>

              <Figure
                src={HERO_IMAGE}
                alt="The dining room at Locavore NXT in Lodtunduh, Ubud"
                width={1600}
                height={1067}
                caption="Inside Locavore NXT, the group's flagship in Lodtunduh, Ubud."
              />

              {/* Key takeaways box */}
              <div className="my-12 border border-black/20 rounded-2xl p-6 sm:p-8">
                <span className="font-serif italic text-[20px] sm:text-[24px] flex items-center">
                  <Arrow
                    position="right"
                    fill="black"
                    sizeLeftRight="14"
                    className="mr-3"
                  />
                  Good to know
                </span>
                <ul className="mt-5 flex flex-col gap-3 text-[1.0625rem] leading-relaxed">
                  <li>
                    NXT serves a set tasting menu at lunch (Thursday to
                    Saturday) and dinner (Monday to Saturday). Walk-ins are
                    possible, but reservations are recommended.
                  </li>
                  <li>
                    Book as early as you can. Weekends and Bali’s busy months
                    are the first to go.
                  </li>
                  <li>
                    You add a credit card to secure the booking; the
                    cancellation terms are shown before you confirm.
                  </li>
                </ul>
              </div>

              <H2>How do you book a table at Locavore NXT?</H2>
              <P>
                You book online through the reservation link on the NXT visit
                page. Getting in touch by phone or email is possible, but most
                contact happens over WhatsApp. Walk-ins are possible, but with a
                limited number of seats each service, booking ahead is the only
                way to be sure of a table.
              </P>
              <ol className="list-decimal pl-6 mt-5 flex flex-col gap-3 text-[1.0625rem] leading-relaxed marker:opacity-50">
                <li>
                  <strong>Open the booking link.</strong> Go to the{" "}
                  <FancyLink
                    destination="/nxt/visit"
                    className="underline hover:opacity-60 transition-opacity"
                  >
                    Locavore NXT visit page
                  </FancyLink>{" "}
                  and select <em>Reserve</em>.
                </li>
                <li>
                  <strong>Choose your date, service and party size.</strong>{" "}
                  Seats are limited, so a greyed-out slot is full. If your date
                  won’t budge, try lunch or a weekday.
                </li>
                <li>
                  <strong>Secure it with your credit card.</strong> Adding your
                  card details holds the table, and you’ll get an email
                  confirmation. The cancellation terms are shown before you
                  confirm.
                </li>
                <li>
                  <strong>Add your details.</strong> Note any allergies, dietary
                  needs or a celebration here so the kitchen can plan ahead.
                </li>
              </ol>
              <P className="mt-5">
                For larger groups or private dining, message the team on
                WhatsApp at{" "}
                <FancyLink
                  destination="https://wa.me/6282144956226"
                  blank
                  className="underline hover:opacity-60 transition-opacity"
                >
                  +62 821-4495-6226
                </FancyLink>{" "}
                or email{" "}
                <FancyLink
                  destination="mailto:reservations@locavorenxt.com"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  reservations@locavorenxt.com
                </FancyLink>
                . Group availability is handled separately from the standard
                booking flow.
              </P>

              <H2>How far in advance should you book Locavore NXT?</H2>
              <P>
                Book as early as you can, and earlier still for weekends or
                Bali’s busy season. NXT serves a set tasting menu to a limited
                number of guests each service, so seats run out faster than at a
                regular à la carte restaurant.
              </P>
              <P className="mt-4">
                If you’re travelling to Ubud mainly to eat here, reserve before
                you lock in flights and hotels rather than after. A flexible
                date gives you much better odds than a fixed one, and the
                most-requested nights can be gone weeks out.
              </P>

              <H2>How much does a reservation at Locavore NXT cost?</H2>
              <P>
                NXT is a set tasting menu, so you pay per person for the full
                menu rather than à la carte. The Source, the current menu, is
                IDR 2,200,000++ per person (the ++ is tax and service on top).
                An optional beverage pairing is IDR 850,000++ with alcohol, or
                IDR 650,000++ for the non-alcoholic version. A wine pairing is
                IDR 1,500,000++.
              </P>
              <P className="mt-4">
                You add a credit card to secure the table when you book, rather
                than paying for the menu upfront. Pairings and any drinks beyond
                them are added to your bill on the night. A pairing isn’t
                required, but each one is built to follow the menu course by
                course.
              </P>
              <P className="mt-4">
                For the full course-by-course breakdown, see our{" "}
                <FancyLink
                  destination="/nxt/guides/tasting-menu-guide"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  Locavore NXT tasting menu guide
                </FancyLink>
                .
              </P>

              <H2>What to know before you arrive</H2>
              <P>
                A few things help the evening run smoothly. NXT is built around
                a set menu and a booked seating time, so a little planning goes
                further than it would at a drop-in spot.
              </P>
              <ul className="list-disc pl-6 mt-5 flex flex-col gap-3 text-[1.0625rem] leading-relaxed marker:opacity-40">
                <li>
                  <strong>Location:</strong> Jl. A.A. Gede Rai, Gang Pura Panti
                  Bija, in Lodtunduh, a short drive south of central Ubud. This
                  is NXT’s own site, not the old Locavore address, so check the
                  map on the visit page to arrive at the right door.
                </li>
                <li>
                  <strong>Arrival time:</strong> Come at your booked seating
                  time. Dinner seatings run from 17:30 to 20:30 and lunch from
                  12:00 to 13:30. Your table is served as one flowing menu.
                </li>
                <li>
                  <strong>Dress code:</strong> We have a relaxed and casual
                  dress code, but feel free to dress up the way you like. Please
                  refrain from wearing beachwear or attire that isn’t
                  appropriate for a public space like our restaurant.
                </li>
                <li>
                  <strong>Dietary needs:</strong> Flag allergies when you book.
                  The kitchen already works without dairy or wheat and with
                  little animal protein, and can adapt with notice, but not
                  always on the night.
                </li>
                <li>
                  <strong>Getting there:</strong> Most people come by car or
                  scooter, often with a driver. Lodtunduh is quieter than the
                  town centre, so allow buffer time for Ubud’s evening traffic.
                  There’s a dedicated waiting area for drivers on site, with its
                  own toilet.
                </li>
              </ul>

              <H2>Can you get a last-minute or walk-in table?</H2>
              <P>
                You can turn up and ask, but with a limited number of seats each
                service there is no guarantee of a table, so reservations are
                recommended. Seats do open up when other guests cancel, and the
                best route is to message the team on WhatsApp at{" "}
                <FancyLink
                  destination="https://wa.me/6282144956226"
                  blank
                  className="underline hover:opacity-60 transition-opacity"
                >
                  +62 821-4495-6226
                </FancyLink>{" "}
                and ask to be told about cancellations for the dates you want.
              </P>
              <P className="mt-4">
                Keep your dates flexible and check back close to the day. A seat
                freed up by a cancellation is the most common way people get in
                at short notice.
              </P>

              <H2>Other ways to visit NXT</H2>
              <P>
                Dinner isn’t the only way in. You can pair your booking with a
                morning of foraging, guided by NXT’s forager through Bali’s
                jungle and farmland. It runs about three hours, ends with lunch
                cooked in nature, and costs IDR 1,250,000++ per person with
                transport from NXT included.
              </P>
              <P className="mt-4">
                There’s also the Full NXT Experience: dinner, a night in one of
                three onsite Wood Room cabins, a backstage tour with the chefs,
                and breakfast the next morning. It’s IDR 5,500,000++ for one or
                IDR 8,000,000++ for two, and with only three cabins it books out
                well ahead. Mention either when you reserve and the team will
                schedule it together with your lunch or dinner reservation.
              </P>

              <Figure
                src="/guides/nxt-aerial.webp"
                alt="Aerial view of the Locavore NXT site and its onsite Wood Rooms cabins"
                width={1600}
                height={900}
                caption="The NXT site from above. The three Wood Rooms cabins sit onsite, among replanted forest."
              />

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
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Container>
        </section>

        {/* Next Guide marquee (editorial-style) */}
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
    props: {
      homeAPI,
      settingAPI,
      footerAPI,
      headerAPI,
      familyListAPI,
    },
  };
}

export default ReservationGuide;
