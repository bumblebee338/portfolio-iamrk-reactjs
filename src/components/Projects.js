import React from 'react';
import omnifood from "../img/Projects/Omnifood-min.gif";
import baseApparel from "../img/Projects/Base-min.gif";
import trillo from "../img/Projects/Trillo-min.gif";
import becomeAMember from "../img/Projects/Become a Member-min.gif";
import debitCard from "../img/Projects/Debit Card-min.gif";
import fourCard from "../img/Projects/Four card.png";
import login from "../img/Projects/login.JPG";
import natours from "../img/Projects/Natours-min.gif";
import nexter from "../img/Projects/Nexter-min.gif";
// import yelpcamp from "../img/Projects/Yelpcamp-min.gif";
import signup from "../img/Projects/sigup.JPG";
import TODO from "../img/Projects/TODO-min.gif";
import pastelle from "../img/Projects/Pastelle city.png";


function Projects() {
    return(
        <>
            <section className="section-works" id="works">
                <div className="about_skills-title myinfo tempp">
                    <h6 className="heading-secondary">Let's View Some of my works</h6>
                    <h1 className="heading-primary">Featured Projects</h1>
                </div>
                <div className="works_container">
    
                    <a href="https://github.com/rkrider/omnifood" className="work_link work_pic-1">
                        <img src={omnifood} alt="omnifood" className="work_pic" />
                        <h1 className="work_title">Omnifood</h1>
                    </a>
    
                    <a href="https://github.com/rkrider/Base-Apparel" className="work_link work_pic-2">
                        <img src={baseApparel} alt="base" className="work_pic" />
                        <h1 className="work_title">Base Appreal</h1>
                    </a>
    
                    <a href="https://github.com/rkrider/trillo" className="work_link work_pic-3">
                        <img src={trillo} alt="trillo" className="work_pic" /> 
                        <h1 className="work_title">Trillo</h1>   
                    </a>
    
                    <a href="https://github.com/rkrider/frontloops" className="work_link work_pic-4">
                        <img src={pastelle} alt="Pastelle city" className="work_pic" />
                        <h1 className="work_title">Pastelle City</h1>
                    </a>
    
                    <a href="https://github.com/rkrider/frontloops" className="work_link work_pic-5">
                        <img src={debitCard} alt="account statement" className="work_pic" />
                        <h1 className="work_title">Account statement</h1>
                    </a>
                    <a href="https://github.com/rkrider/nexter" className="work_link work_pic-6">
                        <img src={nexter} alt="Nexter" className="work_pic" />
                        <h1 className="work_title">Nexter</h1>
                    </a>
                    <a href="https://github.com/rkrider/Natours" className="work_link work_pic-7">
                        <img src={natours} alt="Natours" className="work_pic" />
                        <h1 className="work_title">Natours</h1>
                    </a>
                    <a href="##" className="work_link work_pic-8">
                        <img src={fourCard} alt="four card feature section" className="work_pic" />
                        <h1 className="work_title">Four Card Feature Section</h1>
                    </a>
                    <a href="https://github.com/rkrider/frontloops" className="work_link work_pic-9">
                        <img src={becomeAMember} alt="become a member" className="work_pic" />
                        <h1 className="work_title">Become a Member</h1>
                    </a>
                    <a href="##" className="work_link work_pic-10">
                        <img src={login} alt="login form" className="work_pic" />
                        <h1 className="work_title">Login Form</h1>
                    </a>
                    <a href="##" className="work_link work_pic-11">
                        <img src={signup} alt="sign up form" className="work_pic" />
                        <h1 className="work_title">Sign Up Form</h1>
                    </a>
                    <a href="##" className="work_link work_pic-11">
                        <img src={TODO} alt="TODO" className="work_pic" />
                        <h1 className="work_title">TODO List</h1>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Projects;