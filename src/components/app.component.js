import React from 'react'
import NavBar from "./NavBar/NavBar.component";
import Banner from "./Banner/Banner.component";
import Education from './Education/Education.component';
import About from './About/About.component';
import Contact from './Contact/Contact.component';
import Skills from './Skills/Skills.component';
import Footer from './Footer/Footer.component';
import { BrowserRouter } from 'react-router-dom';

 export const App = (args) =>{
    return (
        <BrowserRouter>
            <Banner />
            <NavBar />
            <Education />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </BrowserRouter>
    )

}