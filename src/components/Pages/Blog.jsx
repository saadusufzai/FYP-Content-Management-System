import Blogs from '../Blogs/Blogs'
import ContactForm from '../ContactForm/ContactForm'
const Blog = () => {
    return (
        <div className="blog">
          <Blogs/>
          <ContactForm showText={true}/>
        </div>
    )
}

export default Blog
