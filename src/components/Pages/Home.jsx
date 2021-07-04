import React from 'react'
import Carousel from '../Carousel/Carousel'
import Blogs from '../Blogs/Blogs'
import Media from '../Gallery/Media'
import Team from '../Team/Team'
import ContactForm from '../ContactForm/ContactForm'
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <Fade left>
            <Carousel/>
            <Blogs/>
            <Media/>
            <Team/>
            <ContactForm showText={true}/>
        </Fade>
    )
}

export default Home
