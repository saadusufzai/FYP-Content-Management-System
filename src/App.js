import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";
import Header from './components/Header'
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import Donate from './components/Pages/Donate';
import Gallery from './components/Pages/Gallery';
import Home from './components/Pages/Home';
import Footer from './components/Footer/Footer' 
import ContactForm from './components/ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#000",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
  return (
    <Router>
        <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/donate' element={<Donate/>} />
        </Routes>
        <ToastContainer />
        <Footer/>
        </ThemeProvider>
    </Router>
  )}

export default App;
