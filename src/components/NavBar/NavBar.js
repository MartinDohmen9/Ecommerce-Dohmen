import React, { useState } from "react";
import "./NavBar.css"

const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <div className="NavBar">
            <span className="nav-logo">DonutsHomero</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Service">Service</a>
                <a href="/Contact">Contact</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`}
             onClick={ () => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>

    )
};

export default NavBar