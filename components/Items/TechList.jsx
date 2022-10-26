import React from 'react';

function TechList({ tech }) {

    if (tech != null && tech.length) {
        return (
            <ul className='project-card__skills tech-list'>
                {
                    tech.map((tech, index) => {
                    
                        return (
                            <li key={index} className={`tech-${tech.Type.toLowerCase()}`}>
                                <span>{tech.Type}</span>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

    return <></>
}

export default TechList;