import React from 'react';
import logo from "../img/logo.jpg";
// import myPic from "../img/rkk-min-compressed.png";
import myPic from "../img/one-removebg-preview.png";
import "../sass/style.comp.css";
import twitter from "../img/SVG/twitter.svg";
import facebook from "../img/SVG/facebook.svg";
import iconMenu from "../img/SVG/menu.svg";

function Header() {

    const Navbar = () =>{
        return(
            <nav className="navbar">
                    <a href="##" className="navbar_link" title="Logo">
                        <img src={logo} alt="logo" className="navbar_logo" />
                    </a>
                    {/* <a href="##" className="navbar_link">Home</a>
                    <a href="##" className="navbar_link">Home</a>
                    <a href="##" className="navbar_link">Home</a>
                    <a href="##" className="navbar_link">Home</a> */}
                    <a href="/navigation" className="navbar_link" title="Menu">
                        <div className="menu_icon nav_icon">
                            {/* <use xlink:href="img/sprite.svg#icon-menu"></use> */}
                            <img src={iconMenu} alt="" className="svg-icon"/>
                        </div>                
                    </a>
                </nav>
        )
    }

    return(
        <>
           
            <header className="header" id="home">
            <Navbar/>
                <div className="intro">
                    <div className="myinfo small_myinfo">
                        <h6 className="heading-secondary">Hello Folks! I am</h6>
                        <h1 className="heading-primary animate__zoomIn animate__animated">Rahul Kumar</h1>
                        <a href="##" className="developer_link">Full Stack Developer</a>
                        <div className="contact">
                            <a href="#form" className="contact_link btn">Contact Me</a>
                            <p className="reach">reach me via</p>
                            <a href="https://www.facebook.com/IMjustRK" className="facebook"  title="Facebook profile">
                                <div className="menu_icon">
                                    {/* <use xlinkHref="../img/sprite.div#icon-facebook"/> */}
                                    <img src={facebook} alt="" className="svg-icon"/>
                                </div>
                            </a>
                            <a href="https://twitter.com/Rk_riderking" className="twitter"  title="Twitter profile">
                                <div className="menu_icon">
                                    {/* <use xlinkHref={twitter}/> */}
                                    <img src={twitter} alt="" className="svg-icon"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mypic">
                        <img src={myPic} alt="rk" className="mypic_img" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;