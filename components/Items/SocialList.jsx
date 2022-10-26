import React from 'react';

import Link from 'next/link';

function SocialList({ socials }) {
    if (socials != null && socials.length) {
        return (
            <ul className='social-list'>
                {
                    socials.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.Link} target='_blank' rel='noreferrer'>
                                    <a></a>
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