import Link from 'next/link';
import React from 'react';

function Nav() {

    const handleClick = () => {
        document.body.classList.add('menu-open');
    }

    return (
        <nav className='site-nav px-4 md:px-6 lg:px-10'>
            <div className='container flex flex-row items-center'>
                <div className='site-nav__brand pr-4 md:pr-8 lg:pr-12'>
                    <Link href='/'>
                        <a className='text-lg'>Conner Murphy</a>
                    </Link>
                </div>
                <div className='site-nav__cta hidden md:flex pr-6'>
                    <Link href='/contact'>
                        <a className='btn btn__primary'>Get in Touch</a>
                    </Link>
                </div>
                <div className='site-nav__toggle'>
                    <button type='button' aria-label='Toggle Navigation' onClick={handleClick}>
                        <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H24" stroke="black" stroke-width="2" />
                            <path d="M0 9H24" stroke="black" stroke-width="2" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;