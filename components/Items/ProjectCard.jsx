import React, { useEffect, useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import SkillList from './SkillList';

function ProjectCard({ props, index, showActiveProject }) {

    const ref = useRef();
    useOnScreen(ref);

    return (
        <div className={`project-card ${props.Highlight ? 'project-card--featured' : ''} animated remove2animate`} ref={ref} style={{ transitionDelay: `${.25 * index}s` }}>
            <div className='project-card__inner' onClick={showActiveProject}>
                <div className='project-card__image'>
                    <figure>
                        <Image 
                            src={`${process.env.NEXT_PUBLIC_SERVER}${props.Images[0].url}`} 
                            placeholder={props.Images[0].placeholder != null ? 'blur' : 'empty'}
                            blurDataURL={props.Images[0].placeholder != null ? props.Images[0].placeholder : ''}
                            width={props.Highlight ? 350 : 300}
                            height={props.Highlight ? 350 : 250}
                            quality={100}
                            alt='Alt Text' />
                    </figure>
                </div>
                <div className='project-card__text'>
                    <h3>{props.Title != null ? props.Title : ''}</h3>
                    <SkillList skills={props.Skills} />
                </div>
            </div>
        </div>
    );
}

export function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    ), [])

    useEffect(() => {
        observer.observe(ref.current);

        if (isIntersecting) {
            ref.current.classList.remove('remove2animate');
            observer.unobserve(ref.current);
        }

        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [observer, ref, isIntersecting])

    return isIntersecting
}

export default ProjectCard;