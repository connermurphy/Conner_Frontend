import React from 'react';

import Link from 'next/link';

import SkillList from './SkillList';
import Markdown from 'markdown-to-jsx';

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
                    <div className='project-content__brief w-full md:w-3/4 pb-10 md:pb-0 md:pl-4 lg:pl-10'>
                        <h2 className='text-xl md:text-2xl'>{project.Title != null ? project.Title : ''}</h2>
                        <div className='project-content__rte pt-8 md:pt-12 lg:pt-20'>
                            <Markdown>
                                {project.Brief != null ? project.Brief : ''}
                            </Markdown>
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
                                <Link href={project.Link}>
                                    <a className='btn btn__primary inline-block' target='_blank'>View Site</a>
                                </Link>
                            </div> : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPopup;