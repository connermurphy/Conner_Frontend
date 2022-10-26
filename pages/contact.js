import Layout from "../components/Layout";

import ContactPage from "../components/Pages/ContactPage";

import axios from "axios";

export default function Contact({ pageData, settings }) {
  return (
    <Layout PageComponent={<ContactPage content={pageData} />} SiteSettings={settings} />
  )
}

export async function getStaticProps() {

  return axios({
    url: `${process.env.API_SERVER}/contact`,
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