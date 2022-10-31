import Link from 'next/link';
import React from 'react';

function Footer({ settings }) {
    return (
        <footer className='site-footer animated remove2animate fadeOnly'>
            <div className='container flex flex-row flex-wrap items-center'>
                <div className='site-footer__links w-full md:w-1/2 md:pr-6 lg:pr-12 pb-4 md:pb-0'>
                    <FooterLinks links={settings.Footer.Links != null ? settings.Footer.Links : []} />
                </div>
                <div className='site-footer__watermark w-full md:w-1/2 md:pl-6 lg:pl-12 md:text-right'>
                    <p>Designed by <Link href='https://www.cameronwattdesign.com/'><a target='_blank' rel='noreferrer'>Cameron Watt</a></Link></p>
                </div>
            </div>
        </footer>                
    );
}

const FooterLinks = ({ links }) => {
    if (links != null && links.length) {
        return (
            <ul className='flex flex-row flex-wrap items-center'>
                {
                    links.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link href={link.URL}>
                                    <a>{link.Label}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    return <></>
}

export default Footer;