import React from "react";
import "../assets/hero-styles.css"
import personOne from "../assets/person-1.svg"
import shadow from "../assets/shadow.svg"
import {Link} from 'react-scroll'

export default function Hero() {
    return(
    <div className="hero">
        <div className="hero-text">
            <div className="hero-titles">
                <h1 className="title1">MICHAEL MURRAY</h1>
                <h1 className="title2">SOFTWARE DEVELOPER</h1>
            </div>
            <div className="hero-buttons">
                <Link to="projects" spy={true} smooth={true} offset={50} duration={1000} className="hero-btn" id="project-btn">Projects &nbsp; <i className="fa-solid fa-screwdriver-wrench"></i></Link>
                <a href="#" className="hero-btn" id="lets-talk">Let's Talk </a >
            </div>
        </div>
        <div className="hero-images">
            <img id="person-one" src={personOne} alt="person-coding" />
            <img id="shadow" src={shadow} alt="shadow" />
        </div>
    </div>
    )
}