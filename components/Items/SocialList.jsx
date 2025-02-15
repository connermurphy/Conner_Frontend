import React from 'react';

import Link from 'next/link';

import Markdown from 'markdown-to-jsx';

function SocialList({ socials, animate = false }) {
    if (socials != null && socials.length) {
        return (
            <ul className={`social-list ${animate ? 'list fadeOnly' : ''}`}>
                {
                    socials.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.Link != null ? item.Link : '#'} target='_blank' rel='noreferrer' aria-label={item.Link != null ? `Link to ${item.Link}` : ''}>
                                    <Markdown>{item.FontAwesome != '' || item.FontAwesome != null ? item.FontAwesome : ''}</Markdown>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default SocialList;