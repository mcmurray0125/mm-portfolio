import React from "react";
import "../assets/hero-styles.css"
import personOne from "../assets/person-1.svg"
import shadow from "../assets/shadow.png"

export default function Hero() {
    return(
    <div className="hero">
        <div className="hero-text">
            <h1 className="title1">SOFTWARE</h1>
            <h1 className="title2">DEVELOPER</h1>
            <div className="hero-buttons">
                <button className="hero-btn" id="projects">Projects &nbsp; <i class="fa-solid fa-screwdriver-wrench"></i></button>
                <button className="hero-btn" id="lets-talk">Let's Talk </button>
            </div>
        </div>
        <div className="hero-images">
            <img id="person-one" src={personOne} alt="person-coding" />
            <img id="shadow" src={shadow} alt="shadow" />
        </div>
    </div>
    )
}