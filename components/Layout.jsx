import { React, useEffect, useState } from "react";

import Head from 'next/head';
import { useRouter } from "next/router";

import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";

function Layout({ PageComponent, SiteSettings }) {

    const router = useRouter();

    const [ ogUrl, setOgUrl ] = useState("");

    const [loading, setLoading] = useState(true);        

    useEffect(() => {        

        if (PageComponent.props.content.Dark) {
            document.documentElement.classList.add('theme-dark')
        } else {
            document.documentElement.classList.remove('theme-dark')
        }

        const animateList = () => {
            const animCallback = (items, observer) => {
                items.forEach((item, index) => {
                    if (item.isIntersecting && !item.target.classList.contains("visible")) {
                        item.target.classList.add("visible");
                        item.target.style.transitionDelay = `${index / 10}s`;
                    }
                })
            }
        
            const listObserver = new IntersectionObserver(animCallback, {
                rootMargin: "-20px"
            });
        
            for (let i = 0; i < document.querySelectorAll(".list").length; i++) {
                const items = document.querySelectorAll(".list")[i].children;
    
                for (let el of items) {
                    listObserver.observe(el)                    
                }
            }
        }
    
        const observeAnimations = () => {
            if ('IntersectionObserver' in window) {
    
                var animatedElements = document.querySelectorAll('.remove2animate, .remove2zoom');
        
                var animationObserver = new IntersectionObserver(function (animatedElements) {
        
                    for (var i = 0; i < animatedElements.length; i++) {
                        var scope = animatedElements[i].target;
        
                        if (animatedElements[i]['isIntersecting'] === true) { //when element comes into viewport
        
                            //bump in sections
                            if (scope.classList.contains('remove2animate')) {
                                scope.classList.remove('remove2animate');
                            }
        
                            if (scope.classList.contains('remove2zoom')) {
                                scope.classList.remove('remove2zoom')
                            }
        
                            //once element is in view, we don't have to observe it anymore
                            animationObserver.unobserve(animatedElements[i].target);
                        }
                    }
        
                }, { rootMargin: '-50px' }); //show element when 50px is within viewport
        
                //init observer on all animatable elements
                for (var i = 0; i < animatedElements.length; i++) {
                    animationObserver.observe(animatedElements[i]);
                }
        
                animateList();
        
            }
        }

        setOgUrl(`${window.location.protocol}//${window.location.host}${router.asPath}`);

        observeAnimations();

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
            <div className="loader"></div>        
            <div className={`wrapper ${loading ? 'hide' : 'show'}`}>
                <Nav logo={SiteSettings.Logo} />
                {PageComponent}
                <Footer settings={SiteSettings} />
            </div>
        </>
    );
}

export default Layout;