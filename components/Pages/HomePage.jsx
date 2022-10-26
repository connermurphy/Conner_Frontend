import React from 'react';
import BlockManager from '../BlockManager';

function Home({ content }) {

    return (
        <>
            <BlockManager blocks={content.Sections} />
        </>
    );
}

export default Home;