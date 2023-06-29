import React from 'react';

import Link from 'next/link';
import { SplitText } from '../../utils/splitText';

import { motion } from 'framer-motion';

function CTABanner(props) {
    return (
        <section id={props.id}>
            <div className='container'>
                <div className='cta-banner'>
                    <div className='text-center'>
                        <h2>
                            <SplitText>
                                {props.Title}
                            </SplitText>
                        </h2>
                        {
                            props.Button != null ?
                                <motion.div className='inline-block'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: .2 + (props.Title.split(' ').length * .125) }}>
                                    <Link href={props.Button.Link} className='btn btn__primary mt-8 inline-block'>
                                        {props.Button.Label}
                                    </Link>
                                </motion.div> : <></>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTABanner;