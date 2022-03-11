import EditorialTemplate from '@/components/modules/editorial/editorialTemplate';

// Helpers
import client from '@/helpers/sanity/client';

export default function Home({
  issueAPI,
  seoAPI,
  editorialAPI,
  footerAPI,
  homeAPI,
}) {
  const [seo] = seoAPI;
  const [editorial] = editorialAPI;
  const [footer] = footerAPI;
  const [home] = homeAPI;

  return (
    <>
      <SEO
        inputSEO={home.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <EditorialTemplate
        issueAPI={issueAPI}
        seo={seo}
        editorial={editorial}
        footer={footer}
        mailchimp={seo.mailchimpID}
      />
    </>
  );
}

export async function getServerSideProps() {
  const homeAPI = await client.fetch(`
  *[_type == "home"] {
    issue->
  }
  `);
  const issueAPI = await client.fetch(`
                    *[_type == "issue"] | order(issueNumber asc) {
                      ...,
                      "articleCount": count(*[_type=='article' && references(^._id)])
                    }
                    `);
  const seoAPI = await client.fetch(`
                    *[_type == "settings"]
                    `);
  const editorialAPI = await client.fetch(`
                    *[_type == "editorial"]
                    `);
  const headerAPI = await client.fetch(`
                    *[_type == "header"]
                    `);
  const footerAPI = await client.fetch(`
                    *[_type == "footer"]
                    `);
  return {
    props: {
      issueAPI,
      seoAPI,
      editorialAPI,
      footerAPI,
      homeAPI,
      headerAPI,
    },
    redirect: {
      destination: `/editorial/${homeAPI[0].issue.slug.current}`,
      permanent: false,
    },
  };
}
