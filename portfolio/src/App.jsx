import { useState } from 'react'

import Header from './Component/Header/Header.jsx'
import HeroSection from './Component/HeroSection/HeroSection.jsx'
import AboutUs from './Component/AboutUs/AboutUs.jsx'
import Projects from './Component/Projects/Projects.jsx'
import Contact from './Component/contactUs/Contact.jsx'
import Footer from './Component/footer/Footer.jsx'
import Services from './Component/services/Services.jsx'
// import HeroSection from './Component/HeroSection/HeroSection.jsx'
import './App.css'
function App() {


  return (
    <>
      <Header/>
      
       
       <HeroSection/>
       <AboutUs/>
     <Projects/>

     <Services/>
     <Contact/>
     <Footer/>
   
       
    </>
  )
}

export default App
