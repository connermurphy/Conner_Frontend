import Layout from "../components/Layout";

import HomePage from "../components/Pages/HomePage";

import axios from "axios";

export default function Home({ pageData, settings }) {
  return (
    <Layout PageComponent={<HomePage content={pageData} />} SiteSettings={settings} />
  )
}

export async function getStaticProps() {

  return axios({
    url: `${process.env.API_SERVER}/home`,
    method: "GET"
  }).then(data => {

    return {
      props: {
        pageData: data.data.pageData,        
        settings: data.data.settings
      },
      revalidate: 1
    }

  }).catch(err => {

    return {
      props: {
        pageData: {},
        settings: {}        
      }
    }
  })

}