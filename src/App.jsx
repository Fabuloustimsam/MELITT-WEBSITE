import React from 'react'
import Navbar from './Components/Navbar/navbar.jsx'
import Landing from './Components/landing/Landing.jsx';
import './style.css';
import Product from './Components/ProductSection/Product.jsx';
import Contact from './Components/Contactus/Contact.jsx';
import Footer from './Components/Footer/footer.jsx';
import About from './Components/About/About.jsx';



const App = () => {
  return (
    <> 
    <Navbar />
    <Landing />
    <Product />
    <Contact />
    <Footer />

    </>
  );
};
const aboutPage = () => {
  return (
    <>
    <About />
    </>
  )
}

export default App;