import React from "react";
import {FaFacebook, FaLinkedin} from "react-icons/fa";

function Footer(params) {
    return(
        <footer>
            <button className="social-btn"><FaFacebook/></button>
            <button className="social-btn"><FaLinkedin/></button>
        </footer>
    )
}

export default Footer;