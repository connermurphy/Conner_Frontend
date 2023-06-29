import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import Markdown from 'markdown-to-jsx';

import { SplitText } from '../../utils/splitText';

import { motion, useInView } from 'framer-motion';

function Header(props) {

    const headerRef = useRef(null);

    const isInView = useInView(headerRef, {
        once: true
    });

    return (
        <header className='site-header pt-10 md:pt-16 lg:pt-20' ref={headerRef}>
            <div className='container flex flex-row flex-wrap justify-between'>
                <h1 className='site-header__title w-full md:w-[60%] lg:w-[45%] md:pr-8 lg:pr-16'>
                    <SplitText>
                        {props.Title}
                    </SplitText>
                </h1>
                <motion.p className='site-header__summary text-md w-full md:w-auto md:flex-1 lg:pl-8 md:ml-auto pt-4 md:pt-0'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .5 }}
                    viewport={{ once: true }}>
                    <Markdown>
                        {
                            props.Summary != null ? props.Summary : ''
                        }
                    </Markdown>
                </motion.p>
                {
                    props.Image != null ? <div className='w-full pt-6 md:pt-8 lg:pt-12'>
                        <figure className={`site-header__image ${isInView ? 'activate' : ''}`}>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_SERVER}${[props.Image.url]}`}
                                priority='true'
                                alt='Alt Text'
                                placeholder={props.Image.placeholder != null ? 'blur' : 'empty'}
                                blurDataURL={props.Image.placeholder != null ? props.Image.placeholder : ''}
                                width={275}
                                height={275}
                                quality={100} />
                        </figure>
                    </div> : <></>
                }
                {
                    props.Weather || props.Subtitle != null ?
                        <motion.div className='site-header__footer w-full flex flex-row flex-wrap items-end justify-between pt-6 md:pt-8 lg:pt-12'
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ delay: .75 }}
                            viewport={{ once: true }}>
                            <div className='site-header__weather flex items-center'>
                                {
                                    props.Weather ? <WeatherDisplay /> : <></>
                                }
                            </div>
                            <div className='site-header__location'>
                                <h2 className='text-3xl md:text-4xl'>{props.Subtitle != null ? props.Subtitle : ''}</h2>
                            </div>
                        </motion.div> : <></>
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
                setWeather(data);

                let currentTime = data.dt;

                let date = new Date();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12;
                minutes = minutes < 10 ? '0' + minutes : minutes;
                currentTime = hours + ':' + minutes + ' ' + ampm;

                setTime(currentTime);
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

export default Header;