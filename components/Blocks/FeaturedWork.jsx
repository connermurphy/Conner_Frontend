import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import ProjectCard from '../Items/ProjectCard';
import ProjectPopup from '../Items/ProjectPopup';

function FeaturedWork(props) {

    const [projects, setProjects] = useState([]);
    const [ activeProject, setActiveProject ] = useState({});

    useEffect(() => {

        let sortedList = props.Projects.sort((a, b) => {
            return props.Projects.indexOf(a) % 2 == 0 && (a.Highlight == true || b.Highlight == true);
        });

        const arrangedList = [...sortedList];

        const firstHighlight = sortedList.find(x => x.Highlight == true);

        arrangedList.splice(sortedList.findIndex(x => x == firstHighlight), 1);
        arrangedList.unshift(firstHighlight);        

        setProjects(arrangedList);

    }, [props.Projects, activeProject])

    const showActiveProject = (proj) => {
        setActiveProject(proj);
        document.body.classList.add('popup-open')
    }

    return (
        <section id={props.id}>
            <div className='container tight'>
                <div className='section-header animated remove2animate fadeOnly'>
                    <h2 className='section-header__title'>{props.Intro.Title != null ? props.Intro.Title : ''}</h2>
                </div>
                <div className='section-content'>
                    <div className='project-list flex flex-row flex-wrap'>
                        <ProjectList projects={projects} passProject={(e) => showActiveProject(e)} />
                    </div>
                    <div className='pt-12 animated remove2animate'>
                        <Link href='/work'>
                            <a className='btn btn__primary inline-block'>Browse all works</a>
                        </Link>
                    </div>
                </div>
            </div>
            <ProjectPopup project={activeProject} />
        </section>

    );
}

const ProjectList = ({ projects, passProject }) => {

    if (projects != null && projects.length) {
        return (
            projects.map((proj, index) => {
                return (
                    <ProjectCard props={proj} index={index} key={index} showActiveProject={() => passProject(proj)} />
                )
            })
        )
    }

    return <></>

}

export default FeaturedWork;