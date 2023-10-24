import React from "react";
import pic from "../Images/logo.png"
import "./navbar.css";



function Navbar() {
    return (
            <div className="topnav">
                <div class="topnav-image">       
                <img className="topnav-pic" src={ pic} alt="Logo" />
                </div>

                <div class="topnav-items">   
                <a className="topnav-item" href="#home">Home</a>
                <a className="topnav-item" href="#about">About Me</a>
                <a className="topnav-item" href="#services">Services</a>
                <a className="topnav-item" href="#skills">Skills</a>
                <a className="topnav-item" href="#portfolio">Portfolio</a>
                <a className="topnav-item" href="#contact">Contact</a>
                </div>

                <div className="topnav-hireme">
                    <h3 className="topnav-h3">Hire me</h3>
                </div>
            </div>
    )
}
export default Navbar;