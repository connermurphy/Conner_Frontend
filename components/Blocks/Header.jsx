import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import Markdown from 'markdown-to-jsx';

function Header(props) {    

    return (
        <header className='site-header pt-10 md:pt-16 lg:pt-20'>
            <div className='container flex flex-row flex-wrap justify-between'>
                <h1 className='w-full md:w-[60%] lg:w-[40%] md:pr-8 lg:pr-16'>
                    <Markdown>
                        {props.Title != null ? props.Title : ''}
                    </Markdown>
                </h1>
                <p className='text-md w-full md:w-auto md:flex-1 lg:pl-8 max-w-[350px] md:ml-auto pt-4 md:pt-0'>
                    <Markdown>
                        {
                            props.Summary != null ? props.Summary : ''
                        }
                    </Markdown>
                </p>
                {
                    props.Image != null ? <div className='w-full pt-6 md:pt-8 lg:pt-12'>
                        <figure className='site-header__image'>                        
                            <Image src={`${process.env.NEXT_PUBLIC_SERVER}${[props.Image.url]}`} priority='true' alt='Alt Text' layout='fill' />
                        </figure>                 
                    </div> : <></>
                }
                {
                    props.Weather || props.Subtitle != null ? <div className='site-header__footer w-full flex flex-row flex-wrap items-end justify-between pt-6 md:pt-8 lg:pt-12'>
                        <div className='site-header__weather flex items-center'>
                            {
                                props.Weather ? <WeatherDisplay /> : <></>
                            }
                        </div>
                        <div className='site-header__location'>
                            <h2 className='text-3xl md:text-4xl'>{props.Subtitle != null ? props.Subtitle : ''}</h2>
                        </div>
                    </div> : <></>
                }
            </div>
        </header>
    );
}

const WeatherDisplay = () => {

    const [weather, setWeather] = useState({});
    const [time, setTime] = useState('');

    const fetchWeather = () => {

        fetch('/api/weather')
            .then(res => res.json())
            .then(data => {
                setWeather(data)
            });

        let currentTime = 0;

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        currentTime = hours + ':' + minutes + ' ' + ampm;

        setTime(currentTime)
        
    }

    useEffect(() => {

        fetchWeather();

    }, []);

    return (
        <>
            <span className='text-lg md:text-xl pr-4'>{time}</span>
            <Image src={weather.icon} priority width='60' height='60' alt='Weather Symbol' />
        </>
    )
}

export default Header;