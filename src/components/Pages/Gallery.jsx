import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import Media from '../Gallery/Media'
const Gallery = () => {
    return (
        <div>
            <Media/>
            <ContactForm showText={true}/>
        </div>
    )
}

export default Gallery
