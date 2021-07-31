import React from 'react';
import logo from "../img/logo.jpg";

import github from "../img/SVG/github.svg";
import facebook from "../img/SVG/facebook.svg";
import linkedin from "../img/SVG/linkedin.svg";
import twitter from "../img/SVG/twitter.svg";
import instagram from "../img/SVG/instagram.svg";

function Footer() {
    return(
        <>
            <footer className="footer">
                <figure>
                    <img src={logo} alt="LOGO" className="footer_logo" /> 
                </figure>

                <div className="footer_content">
                    <ul className="footer_list">
                        <li className="footer_item"><a href="#home" className="footer_link">Home</a></li>
                        <li className="footer_item"><a href="#about" className="footer_link">About</a></li>
                        <li className="footer_item"><a href="#skills" className="footer_link">Skills</a></li>
                        <li className="footer_item"><a href="#works" className="footer_link">Works</a></li>
                        <li className="footer_item"><a href="#form" className="footer_link">Contact Me</a></li>
                    </ul>
                    <p className="footer_para">
                        © Copyright 2021 by Rahul Kumar. This website is made only for me to represent myself via online medium to my clients.
                    </p>
                </div>

                <div className="footer_icon">
                    <a href="https://www.facebook.com/IMjustRK" className="footer_icon-logo">

                        <div className="menu_icon">
                            <img src={facebook} alt=""/>
                        </div>
                    </a>
                    <a href="https://twitter.com/Rk_riderking" className="footer_icon-logo">
                        
                        <div className="menu_icon">
                        <img src={twitter} alt=""/>


                        </div>
                    </a>
                    <a href="https://www.instagram.com/rk_terrific_rider/" className="footer_icon-logo">
                        <div className="menu_icon">
                        <img src={instagram} alt=""/>

                        </div>
                    </a>
                    <a href="https://github.com/rkrider" className="footer_icon-logo">
                        <div className="menu_icon">
                            <img src={github} alt=""/>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/rahul-kumar-518418193/" className="footer_icon-logo">
                        <div className="menu_icon">
                        <img src={linkedin} alt=""/>

                        </div>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;