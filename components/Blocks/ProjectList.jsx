import React, { createRef, useEffect, useState } from 'react';

import ProjectCard from '../Items/ProjectCard';
import ProjectPopup from '../Items/ProjectPopup';

function ProjectList(props) {

    const sectionRef = createRef();

    const [projects, setProjects] = useState([]);
    const [activeProject, setActiveProject] = useState({});

    useEffect(() => {

        let normList = props.Projects.filter(x => !x.Highlight);
        let featuredList = props.Projects.filter(x => x.Highlight);
        
        const firstFeatured = featuredList.slice(0, 1)[0];
        featuredList.splice(0, 1);

        for (let i = 2; i < normList.length; i++) {
            if (i % 2 == 0) {
                if (featuredList[0] != null || featuredList[0] != undefined) normList.splice(i, 0, featuredList[0]);
                featuredList.splice(0, 1);
            }
        }
        
        normList.unshift(firstFeatured);

        if (featuredList.length) {
            normList.push(...featuredList);            
        }

        const arrangedList = [...normList];

        setProjects(arrangedList);        

    }, [props.Projects, activeProject]);

    const showActiveProject = (proj) => {
        setActiveProject(proj);
        document.body.classList.add('popup-open');
        sectionRef.current.classList.add('z-1');
    }

    return (
        <section id={props.id} ref={sectionRef}>
            <div className='container tight'>
                <div className='section-content'>
                    <div className='project-list flex flex-row flex-wrap'>
                        <ProjectCards projects={projects} passProject={(e) => showActiveProject(e)} />
                    </div>
                </div>
            </div>
            <ProjectPopup project={activeProject} />
        </section>
    );
}

const ProjectCards = ({ projects, passProject }) => {

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


export default ProjectList;