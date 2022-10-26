import React from 'react';

import Link from 'next/link';

function CTABanner(props) {
    return (
        <section>
            <div className='container'>
                <div className='cta-banner'>
                    <div className='text-center'>
                        <h2>{props.Title != null ? props.Title : ''}</h2>
                        {
                            props.Button != null ? 
                            <Link href={props.Button.Link}>
                                <a className='btn btn__primary mt-8 inline-block'>{props.Button.Label}</a>
                            </Link> : <></>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTABanner;