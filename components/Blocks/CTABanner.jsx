import React from 'react';

import Link from 'next/link';

function CTABanner(props) {
    return (
        <section id={props.id}>
            <div className='container'>
                <div className='cta-banner remove2animate'>
                    <div className='text-center'>
                        <h2>
                            <SplitTitle text={props.Title} />
                        </h2>
                        {
                            props.Button != null ? 
                            <div className='inline-block'  style={{ transitionDelay: `${props.Title.split(' ').length * .5}s` }}>
                                <Link href={props.Button.Link} className='btn btn__primary mt-8 inline-block'>
                                    {props.Button.Label}
                                </Link>
                            </div> : <></>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

const SplitTitle = ({ text }) => {
    if (text != null || text.length) {
        return (
            text.split(' ').map((x, index) => {
                return (
                    <>
                        <div key={index}>
                            <span style={{ animationDelay: `${0.25 * (index + 1)}s` }}>{x}</span>                        
                            <span className='divider'> </span>
                        </div>                        
                    </>
                )
            })
        )
    }

    return <></>
}

export default CTABanner;