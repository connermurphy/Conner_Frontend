import React from 'react';

import Link from 'next/link';

import SocialList from '../Items/SocialList';
import { useRouter } from 'next/router';

function Menu(props) {

    const router = useRouter();

    const handleClick = () => {
        document.body.classList.remove('menu-open');
    }

    return (
        <div className='site-menu px-4 pt-6 md:px-6 lg:px-10'>
            <div className='h-full flex flex-col'>
                <div className='site-menu__header flex flex-row items-center justify-between'>
                    <div className='menu-header__brand  pr-4 md:pr-8 lg:pr-12'>
                        <Link href='/'>
                            <a className='text-lg'>Conner Murphy</a>
                        </Link>
                    </div>
                    <div className='menu-header__cta hidden md:flex invisible'>
                        <Link href='/contact'>
                            <a className='btn btn__primary'>Get in Touch</a>
                        </Link>
                    </div>
                    <div className='menu-header__toggle'>
                        <button type='button' aria-label='Toggle Navigation' onClick={handleClick}>
                            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 2L2 18" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                                <path d="M2 2L18 18" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                            </svg>

                        </button>
                    </div>
                </div>
                <div className='site-menu__content pt-16 pb-6 md:pt-24 md:pb-12 lg:pt-32 lg:pb-20 flex items-start'>
                    <div className='container w-full h-full flex flex-row flex-wrap items-start'>
                        <div className='menu-content__links w-full pb-12 lg:pb-0 lg:w-1/2'>
                            <ul>
                                <li className={`${router.pathname === '/' ? 'active' : ''}`}>
                                    <Link href='/'>
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li className={`${router.pathname === '/work' ? 'active' : ''}`}>
                                    <Link href='/work'>
                                        <a>Work</a>
                                    </Link>
                                </li>
                                <li className={`${router.pathname === '/contact' ? 'active' : ''}`}>
                                    <Link href='/contact'>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='menu-content__socials w-full lg:w-1/2 flex flex-wrap lg:justify-end'>
                            <div>
                                <h3 className='pb-4 text-lg'>Socials</h3>
                                <SocialList socials={props.socials} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;