import React from 'react';

function SkillList({ skills }) {

    if (skills != null && skills.length) {
        return (
            <ul className='project-card__skills'>
                {
                    skills.map((skill, index) => {

                       

                        return (
                            <li key={index} className={`skill-${skill.Type.toLowerCase()}`}>
                                <span>{skill.Type}</span>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

    return <></>
}

export default SkillList;