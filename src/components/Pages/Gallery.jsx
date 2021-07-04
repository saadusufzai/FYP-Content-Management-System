import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import Media from '../Gallery/Media'
import Fade from 'react-reveal/Fade';

const Gallery = () => {
    return (
        <Fade left>
            <Media/>
            <ContactForm showText={true}/>
        </Fade>
    )
}

export default Gallery
