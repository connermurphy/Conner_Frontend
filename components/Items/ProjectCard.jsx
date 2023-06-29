import React, { useRef } from 'react';

import Image from 'next/image';
import SkillList from './SkillList';

import { motion } from 'framer-motion';

function ProjectCard({ props, index, showActiveProject }) {

    const ref = useRef();

    return (
        <motion.div className={`project-card ${props.Highlight ? 'project-card--featured' : ''}`} ref={ref}
        initial={{ opacity: 0, translateY: 60 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * .15 }}>
            <div className='project-card__inner' onClick={showActiveProject}>
                <div className='project-card__image'>
                    <figure>
                        <Image 
                            src={`${process.env.NEXT_PUBLIC_SERVER}${props.Images[0].url}`} 
                            placeholder={props.Images[0].placeholder != null ? 'blur' : 'empty'}
                            blurDataURL={props.Images[0].placeholder != null ? props.Images[0].placeholder : ''}
                            fill
                            alt='Alt Text' />
                    </figure>
                </div>
                <div className='project-card__text'>
                    <h3>{props.Title != null ? props.Title : ''}</h3>
                    <SkillList skills={props.Skills} />
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;