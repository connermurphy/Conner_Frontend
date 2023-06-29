import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import SkillList from './SkillList';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Markdown from 'markdown-to-jsx';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ProjectPopup({ project }) {

    const handleClose = () => {
        document.body.classList.remove('popup-open');
    }

    return (
        <div className='project-popup'>
            <div className='project-popup__inner'>
                <div className='project-popup__header'>
                    <button type='button' aria-label='Close Popup' onClick={handleClose}><span></span></button>                    
                </div>
                <div className='project-popup__content flex flex-row-reverse flex-wrap items-start pt-8 lg:pt-12'>                    
                    <div className='project-content__brief w-full md:w-3/4 pb-8 md:pb-0 md:pl-4 lg:pl-10'>
                        <h2 className='text-xl md:text-2xl'>{project.Title != null ? project.Title : ''}</h2>
                        <div className='project-content__rte pt-8 md:pt-12 lg:pt-20'>
                            <Markdown>
                                {project.Brief != null ? project.Brief : ''}
                            </Markdown>
                            <ProjectCarousel slides={project.Images} />
                        </div>
                    </div>
                    <div className='project-content__info w-full md:w-1/4 md:pr-4 lg:pr-10 md:sticky top-0'>
                        {
                            project.Role != null ? 
                            <div className='pb-6'>
                                <h3 className='text-lg pb-2'>Role</h3>
                                <p>{project.Role}</p>                        
                            </div> : <></>
                        }
                        {
                            project.Collaborators != null && project.Collaborators.length ?
                            <div className='pb-6'>
                                <h3 className='text-lg pb-2'>Collaborators</h3>
                                <ul>
                                    {
                                        project.Collaborators.map((x, index) => {
                                            return (
                                                <li key={index}>
                                                    {x.Name}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div> : <></>
                        }
                        {
                            project.Skills != null && project.Skills.length ?
                            <div className='pb-10 md:pb-14'>
                                <h3 className='text-lg pb-2'>Skills</h3>
                                <SkillList skills={project.Skills} />
                            </div> : <></>
                        }                        
                        {
                            project.Link != null ?
                            <div>
                                <Link href={project.Link} className='btn btn__primary inline-block' target='_blank'>
                                    View Site
                                </Link>
                            </div> : <></>
                        }                        
                    </div>
                </div>
            </div>
        </div>
    );
}

const ProjectCarousel = ({ slides }) => {

    const [ activeSlide, setActiveSlide ] = useState(0);

    const previousSlide = () => {        
        setActiveSlide(activeSlide - 1 == -1 ? slides.length - 1 : activeSlide - 1);
    }

    const nextSlide = () => {
        setActiveSlide(activeSlide == slides.length - 1 ? 0 : activeSlide + 1)        
    }

    if (slides != null && slides.length) {

        const OPTIONS = {
            infiniteLoop: true,
            showArrows: false,
            showStatus: false,
            showIndicators: false,
            swipeable: false
        }

        return (
            <div className='project-content__carousel pt-10'>
                <Carousel {...OPTIONS} selectedItem={activeSlide} animationHandler='fade'>
                    {
                        slides.map((x, index) => {
                            return (
                                <div className='project-carousel__slide' key={index}>
                                    <figure>
                                        <Image 
                                            src={`${process.env.NEXT_PUBLIC_SERVER}${x.url}`} 
                                            placeholder={x.placeholder != null ? 'blur' : 'empty'}
                                            blurDataURL={x.placeholder != null ? x.placeholder : ''}
                                            alt='Alt Text' 
                                            width={250}
                                            height={250}
                                            quality={100} />
                                    </figure>
                                </div>
                            )
                        })
                    }
                </Carousel>
                {
                    slides.length > 1 ?
                    <div className='project-carousel__buttons'>
                        <button type='button' aria-label='Previous Slide' onClick={previousSlide}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button type='button' aria-label='Next Slide' onClick={nextSlide}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div> : <></>
                }
            </div>
        )
    }

    return <></>
}

export default ProjectPopup;