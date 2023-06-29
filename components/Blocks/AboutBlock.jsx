import Link from 'next/link';
import React from 'react';
import SocialList from '../Items/SocialList';

import { motion } from 'framer-motion';

function AboutBlock(props) {
    return (
        <section id={props.id}>
            <div className='container'>
                <motion.div className='section-header'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: .125 }}>
                    <h2 className='section-header__title'>{props.Intro.Title != null ? props.Intro.Title : ''}</h2>
                </motion.div>
                <div className='section-content'>
                    <div className='split-block flex flex-row flex-wrap lg:justify-between'>
                        <motion.div className='split-block__text w-full md:w-1/2 lg:w-1/2 md:pr-6 lg:pr-10 pb-8 md:pb-0'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .25 }}>
                            <h3 className='pb-4 text-lg'>About</h3>
                            <p className='text-lg'>{props.Bio != null ? props.Bio : ''}</p>
                            <div className='inline-block'>
                                <Link href='/contact' className='btn btn__primary mt-8 lg:mt-12 hidden md:inline-block'>
                                    Let&apos;s Talk
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div className='split-block__socials w-full md:w-1/2 lg:w-1/3 md:pl-6 lg:pl-10 flex md:justify-end'
                            initial={{ opacity: 0, translateY: 60 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: .175 }}>
                            <div>
                                <h3 className='pb-4 text-lg'>Socials</h3>
                                <SocialList socials={props.Socials} animate={true} />
                            </div>
                        </motion.div>
                        <div className='inline-block'>
                            <Link href='/contact' className='btn btn__primary mt-10 inline-block md:hidden'>
                                Let&apos;s Talk
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBlock;