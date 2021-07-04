import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <Fade left>
            <ContactForm showText={false}/>
        </Fade >
    )
}

export default Contact
