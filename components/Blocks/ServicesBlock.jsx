import Link from 'next/link';
import React from 'react';
import TechList from '../Items/TechList';

function AboutBlock(props) {
    return (
        <section>
            <div className='container'>
                <div className='section-header'>
                    <h2 className='section-header__title'>{props.Intro.Title != null ? props.Intro.Title : ''}</h2>
                </div>
                <div className='section-content'>
                    <div className='split-block flex flex-row flex-wrap lg:justify-between'>
                        <div className='split-block__text w-full md:w-1/2 lg:w-1/2 md:pr-6 lg:pr-10 pb-8 md:pb-0'>
                            <p className='text-lg'>{props.Summary != null ? props.Summary : ''}</p>                            
                        </div>
                        <div className='split-block__socials w-full md:w-1/2 lg:w-1/3 md:pl-6 lg:pl-10'>
                            <div>
                                <TechList tech={props.Tech != null ? props.Tech : []} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBlock;