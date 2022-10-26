import React from 'react';
import BlockManager from '../BlockManager';

function Contact({ content }) {
    return (
        <>
            <BlockManager blocks={content.Sections} />
        </>
    );
}

export default Contact;