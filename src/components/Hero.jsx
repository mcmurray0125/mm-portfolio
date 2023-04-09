import React from "react";
import "../index.css"
import "../assets/hero-styles.css"
import personOne from "../assets/person-1.svg"
import shadow from "../assets/shadow.svg"
import doodleCircle  from '../assets/doodle-circle.svg'
import downArrow from "../assets/down-arrow.png"
import {Link} from 'react-scroll'
import curlyArrow from "../assets/curly-arrow.svg"

export default function Hero() {

    const linkStyle = {
        position: "absolute",
        cursor: "pointer",
        height: "96px",
        width: "96px",
        bottom: "20%",
        left: "35%",
        marginRight: "10px",
        transform: "translate(-50%, 0)",
        zIndex: "500",
    }

    return(
    <div className="hero">
        <div className="hero-text">
            <div className="hero-titles">
                <h1 className="title1">MICHAEL MURRAY</h1>
                <h1 className="title2">SOFTWARE DEVELOPER</h1>
            </div>
            <div className="hero-buttons">
                <Link to="projects" spy={true} smooth={true} offset={50} duration={1000} className="hero-btn" id="project-btn">Projects &nbsp; <i className="fa-solid fa-screwdriver-wrench"></i></Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={1200} className="hero-btn" id="lets-talk">Let's Talk </Link >
            </div>
            <img id='curly-arrow' src={curlyArrow} alt="curly-arrow" />
        </div>
        <div className="hero-images">
            <img id="person-one" src={personOne} alt="person-coding" />
            <img id="doodle-circle" src={doodleCircle} alt="doodle-circle" />
            <img id="shadow" src={shadow} alt="shadow" />
        </div>
        <Link to="about-me" spy={true} smooth={true} offset={0} duration={500} style={linkStyle}><img className="down-arrow" src={downArrow} alt="down-arrow" /></Link>
    </div>
    )
}