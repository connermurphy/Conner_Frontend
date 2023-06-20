import Link from 'next/link';
import React from 'react';

import { motion } from 'framer-motion';

function Footer({ settings }) {
    return (
        <motion.footer className='site-footer'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .125 }}>
            <div className='container flex flex-row flex-wrap items-center'>
                <div className='site-footer__links w-full md:w-1/2 md:pr-6 lg:pr-12 pb-6 md:pb-0'>
                    <FooterLinks links={settings.Footer.Links != null ? settings.Footer.Links : []} />
                </div>
                <div className='site-footer__watermark w-full md:w-1/2 md:pl-6 lg:pl-12 md:text-right'>
                    <p>Designed by <Link href='https://www.cameronwattdesign.com/' target='_blank' rel='noreferrer'>Cameron Watt</Link></p>
                </div>
            </div>
        </motion.footer>                
    );
}

const FooterLinks = ({ links }) => {
    if (links != null && links.length) {
        return (
            <ul className='flex flex-row flex-wrap items-center justify-center md:justify-start'>
                {
                    links.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link href={link.URL}>
                                    {link.Label}
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