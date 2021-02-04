import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import Header from './components/Header'
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import Donate from './components/Pages/Donate';
import Gallery from './components/Pages/Gallery';
import Home from './components/Pages/Home';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/Gallery' element={<Gallery/>} />
            <Route path='/Blog' element={<Blog/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Donate' element={<Donate/>} />
        </Routes>
    </Router>
  )}

export default App;
