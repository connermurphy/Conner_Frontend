import Link from 'next/link';
import React from 'react';

function Nav() {
    return (
        <nav className='site-nav px-4 md:px-6 lg:px-10;'>
            <div className='container flex flex-row items-center'>
                <div className='site-nav__brand pr-4 md:pr-8 lg:pr-12'>
                    <Link href='/'>
                        <a className='text-lg'>Conner Murphy</a>
                    </Link>
                </div>
                <div className='site-nav__cta hidden md:flex'>
                    <Link href='/contact'>
                        <a className='btn btn__primary'>Get in Touch</a>
                    </Link>
                </div>
                <div className='site-nav__toggle'>
                    <button type='button' aria-label='Toggle Navigation'><span></span></button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;