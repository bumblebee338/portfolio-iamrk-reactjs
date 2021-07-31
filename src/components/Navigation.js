import React from 'react';
import icondMenu from "../img/SVG/circle-with-cross.svg";

function Navigation() {
    return(
        <>
            <a href="/" class="cross_icon" title="Close">
            <div class="menu_icon nav_icon cross_icon-small">
                <img src={icondMenu} alt="Close-icon" className="svg-icon"/>
            </div>                
            </a>
            <nav class="navigation">
                <ul class="navigation_list">
                    <li data-text="Home" class="navigation_item"><a class="navigation_link" href="/#home">Home</a></li>
                    <li data-text="About" class="navigation_item"><a class="navigation_link" href="/#about">About</a></li>
                    <li data-text="My Journey" class="navigation_item"><a class="navigation_link" href="/#qualifications">My Journey</a></li>
                    <li data-text="Skills" class="navigation_item"><a class="navigation_link" href="/#skills">Skill</a></li>
                    <li data-text="Projects" class="navigation_item"><a class="navigation_link" href="/#works">Projects</a></li>
                    <li data-text="Register" class="navigation_item"><a class="navigation_link" href="/#form">Contact Me</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;