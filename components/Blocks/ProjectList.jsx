import React, { useEffect, useState } from 'react';

import ProjectCard from '../Items/ProjectCard';
import ProjectPopup from '../Items/ProjectPopup';

function ProjectList(props) {

    const [projects, setProjects] = useState([]);
    const [activeProject, setActiveProject] = useState({});

    useEffect(() => {

        let sortedList = props.Projects.sort((a, b) => {
            return props.Projects.indexOf(a) % 2 == 0 && (a.Highlight == true || b.Highlight == true);
        });

        const arrangedList = [...sortedList];

        const firstHighlight = sortedList.find(x => x.Highlight == true);

        arrangedList.splice(sortedList.findIndex(x => x == firstHighlight), 1);
        arrangedList.unshift(firstHighlight);        

        setProjects(arrangedList);

    }, [props.Projects, activeProject]);

    const showActiveProject = (proj) => {
        setActiveProject(proj);
        document.body.classList.add('popup-open')
    }

    return (
        <section id={props.id}>
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
                    <ProjectCard props={proj} key={index} showActiveProject={() => passProject(proj)} />
                )
            })
        )
    }

    return <></>

}


export default ProjectList;