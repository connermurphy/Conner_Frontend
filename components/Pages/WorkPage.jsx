import React from 'react';
import BlockManager from '../BlockManager';

function Work({ content }) {
    return (
        <>
            <BlockManager blocks={content.Sections} />
        </>
    );
}

export default Work;