import Link from 'next/link';
import React from 'react';
import SocialList from '../Items/SocialList';

function AboutBlock(props) {
    return (
        <section>
            <div className='container'>
                <div className='section-header'>
                    <h2 className='section-header__title'>{props.Intro.Title != null ? props.Intro.Title : ''}</h2>
                </div>
                <div className='section-content'>
                    <div className='split-block flex flex-row flex-wrap lg:justify-between'>
                        <div className='split-block__text w-full md:w-1/2 lg:w-2/3 md:pr-6 lg:pr-10 pb-8 md:pb-0'>
                            <h4 className='pb-4 text-lg'>About</h4>
                            <p className='text-lg'>{props.Bio != null ? props.Bio : ''}</p>
                            <Link href='/contact'>
                                <a className='btn btn__primary mt-8 lg:mt-12 hidden md:inline-block'>Let&apos;s Talk</a>
                            </Link>
                        </div>
                        <div className='split-block__socials w-full md:w-1/2 lg:w-1/3 md:pl-6 lg:pl-10 flex md:justify-end'>
                            <div>
                                <h4 className='pb-4 text-lg'>Socials</h4>
                                <SocialList socials={props.Socials} />
                            </div>
                        </div>
                        <Link href='/contact'>
                                <a className='btn btn__primary mt-12 md:hidden'>Let&apos;s Talk</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBlock;