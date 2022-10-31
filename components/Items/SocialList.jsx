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
                                <Link href={item.Link != null ? item.Link : '#'} target='_blank' rel='noreferrer'>
                                    <a>
                                        <Markdown>{item.FontAwesome != '' || item.FontAwesome != null ? item.FontAwesome : ''}</Markdown>
                                    </a>
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