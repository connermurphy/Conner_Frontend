import { React, useEffect, useState } from "react";

import Head from 'next/head';
import { useRouter } from "next/router";

import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";
import Menu from "./Layout/Menu";

import { neueFont } from "../utils/font";

function Layout({ PageComponent, SiteSettings }) {

    const router = useRouter();

    const [ ogUrl, setOgUrl ] = useState("");

    useEffect(() => {        

        document.body.classList.remove('menu-open')

        setOgUrl(`${window.location.protocol}//${window.location.host}${router.asPath}`);

    }, [router, PageComponent.props.content.Dark])

    return (
        <>
            <Head>
            <meta charSet="UTF-8" />                
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />                
                <link rel="shortcut icon" type="image/x-icon" href={SiteSettings != null && SiteSettings.Favicon != null ? `${process.env.NEXT_PUBLIC_SERVER}${SiteSettings.Favicon.url}` : ''} />

                <title>{SiteSettings.Title != null && PageComponent.props.content.SEO != null && PageComponent.props.content.SEO.Title != null ? `${SiteSettings.Title} - ${PageComponent.props.content.SEO.Title}` : "Page Title"}</title>
                - {PageComponent.props.content.SEO != null && PageComponent.props.content.SEO.Title != null ? PageComponent.props.content.SEO.Title : ""}
                <meta name="title" content={SiteSettings.Title != null && PageComponent.props.content.SEO != null && PageComponent.props.content.SEO.Title != null ? `${SiteSettings.Title} - ${PageComponent.props.content.SEO.Title}` : "Page Title"} />
                <meta name="description" content={`${PageComponent.props.content.SEO != null && PageComponent.props.content.SEO.Description != null ? PageComponent.props.content.SEO.Description : ""}`} />
                <meta name="keywords" content='Glasgow web development, Glasgow website developer, Website design Glasgow, Affordable website development Glasgow' />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={ogUrl} />
                <meta property="og:title" content={SiteSettings.Title != null && PageComponent.props.content.SEO != null && PageComponent.props.content.SEO.Title != null ? `${SiteSettings.Title} - ${PageComponent.props.content.SEO.Title}` : "Page Title"} />
                <meta property="og:description" content={`${PageComponent.props.content.SEO != null && PageComponent.props.content.SEO.Description != null ? PageComponent.props.content.SEO.Description : ""}`} />
                <meta property="og:image" content={`${PageComponent.props.content.SEO != null && PageComponent.props.content.SEO.Image != null ? `${process.env.NEXT_PUBLIC_SERVER}${PageComponent.props.content.SEO.Image.url}` : ''}`} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={ogUrl} />
                <meta property="twitter:title" content={SiteSettings.Title != null && PageComponent.props.content.SEO != null && PageComponent.props.content.SEO.Title != null ? `${SiteSettings.Title} - ${PageComponent.props.content.SEO.Title}` : "Page Title"} />
                <meta property="twitter:description" content={`${PageComponent.props.content.SEO != null ? PageComponent.props.content.SEO != null && PageComponent.props.content.SEO.Description : ""}`} />
                <meta property="twitter:image" content={`${PageComponent.props.content.SEO != null && PageComponent.props.content.SEO.Image != null ? `${process.env.NEXT_PUBLIC_SERVER}${PageComponent.props.content.SEO.Image.url}` : ''}`} />
            </Head>                
            <div className={`wrapper ${neueFont.className}`}>
                <Menu socials={SiteSettings.Menu != null ? SiteSettings.Menu.Socials : []} contacts={SiteSettings.Menu != null ? SiteSettings.Menu.Contacts : []} />
                <Nav logo={SiteSettings.Logo} />
                {PageComponent}
                <Footer settings={SiteSettings} />
            </div>
        </>
    );
}

export default Layout;