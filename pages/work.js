import Layout from "../components/Layout";

import WorkPage from "../components/Pages/WorkPage";

import axios from "axios";

export default function Work({ pageData, settings }) {
  return (
    <Layout PageComponent={<WorkPage content={pageData} />} SiteSettings={settings} />
  )
}

export async function getStaticProps() {

  return axios({
    url: `${process.env.API_SERVER}/work`,
    method: "GET"
  }).then(data => {

    return {
      props: {
        pageData: data.data.pageData,        
        settings: data.data.settings
      },
      revalidate: 1800
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