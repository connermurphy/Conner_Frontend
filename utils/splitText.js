'use client';

import React from 'react'
import { motion } from 'framer-motion'

export function SplitText({ children, ...rest }) {
    let words = children.split(' ')
    return words.map((word, i) => {
        return (
            <div
                key={children + i}
                style={{ 'display': 'inline-block', 'overflow': 'hidden' }}>
                <motion.div
                    {...rest}
                    initial={{ opacity: 0, y: '100%' }}
                    whileInView={{ opacity: 1, y: '0' }}
                    transition={{ delay: (i + 1) * .125, duration: .25 }}
                    viewport={{ once: true }}
                    custom={i}>
                    {word + (i !== words.length - 1 ? '\u00A0' : '')}
                </motion.div>
            </div>
        )
    })
}