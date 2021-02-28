import React from 'react'
import Carousel from '../Carousel/Carousel'
import Blogs from '../Blogs/Blogs'
import Media from '../Gallery/Media'
import Team from '../Team/Team'
import ContactForm from '../ContactForm/ContactForm'

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Blogs/>
            <Media/>
            <Team/>
            <ContactForm showText={true}/>
        </div>
    )
}

export default Home
