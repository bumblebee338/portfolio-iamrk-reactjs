import React from 'react';
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Footer from "./Footer";
import Projects from "./Projects";
import Qualifications from "./Qualifications";
import Fade from "react-reveal";

function Home() {
    return(
        <>
            <Fade>
                <Header/>
            </Fade>
            <Fade>
                <About/>
            </Fade>
            <Fade>
                <Qualifications/>
            </Fade>
            <Fade>
                <Skills/>
            </Fade>
            <Fade>
                <Projects/>
            </Fade>
            <Fade>
                <Contact/>
            </Fade>
            <Fade>
                <Footer/>
            </Fade>
            
        </>
    );
}

export default Home;