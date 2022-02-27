import client from '@/helpers/sanity/client'
import Error from 'next/error'

export default function Error404() {
  return (
    <>
      <Error statusCode={404} />
    </>
  )
}

export async function getStaticProps() {
  const seoAPI = await client.fetch(`
    *[_type == "settings"]
    `)
  const headerAPI = await client.fetch(`
      *[_type == "header"]
      `)

  const footerAPI = await client.fetch(`
      *[_type == "footer"]
      `)
  return {
    props: {
      seoAPI,
      headerAPI,
      footerAPI,
    },
  }
}
