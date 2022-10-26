import React from 'react';

import Image from 'next/image';
import SkillList from './SkillList';

function ProjectCard({ props, showActiveProject }) {     
    
    return (
        <div className={`project-card ${props.Highlight ? 'project-card--featured' : ''}`}>
            <div className='project-card__inner' onClick={showActiveProject}>
                <div className='project-card__image'>
                    <figure>
                        <Image src={`${process.env.NEXT_PUBLIC_SERVER}${props.Images[0].url}`} layout='fill' alt='Alt Text' />
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

export default ProjectCard;