import React, { useRef } from "react";
import Profile from "./Profile";
import {FaBars, FaTimes} from "react-icons/fa"

function Navbar(){

    //with navRef and showNavbar we will toggle a CSS class to the nav bar or to the button containing the FaBars icon.
    //with it when we use a smaller VP we will have a hamburger toggle bar that will open and close when clicked on the icons
    
    const navRef = useRef();
    const showNavbar= () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
        <h3>Show&Tell</h3>
        <nav ref={navRef}>
        <a href="/#">home</a>
        <a href="/#">about</a>
        <a href="/#">Contect</a>
         <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button>
        </nav>
        <Profile className="profile-nav" />
         <button className="nav-btn" onClick={showNavbar}><FaBars /></button>
        </header>
    )
}

export default Navbar;