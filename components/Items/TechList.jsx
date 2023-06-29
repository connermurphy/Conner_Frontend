import React from 'react';

import { motion } from 'framer-motion';

function TechList({ tech }) {

    if (tech != null && tech.length) {
        return (
            <ul className='project-card__skills tech-list list fadeOnly'>
                {
                    tech.map((tech, index) => {

                        return (
                            <motion.li key={index} className={`tech-${tech.Type.toLowerCase()}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: .125 + (index * .125) }}>
                                <span>{tech.Type}</span>
                            </motion.li>
                        )
                    })
                }
            </ul>
        );
    }

    return <></>
}

export default TechList;