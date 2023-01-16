import "../assets/overlay-styles.css"
import downArrow from "../assets/down-arrow.png"
import {Link} from "react-scroll"
import React, { useEffect } from "react"
import { useState } from "react"

export default function Overlay() {

    const [tip , setTip] = React.useState(true);
    
    function dismissTip() {
        setTip(!tip)
    }
    useEffect(() => {
        tip?
        document.body.style.overflowY = "hidden" :
        document.body.style.overflowY = "auto"
    },[tip])

    const tipStyle = {
        display: "none"
    }

    const linkStyle = {
        position: "absolute",
        cursor: "pointer",
        height: "96px",
        width: "96px",
        top: "18%",
        left: "35%",
        marginRight: "10px",
        transform: "translate(-50%, 0)",
        zIndex: "500",
    }

    return (
        <div className="overlay" id="overlay">
            <div className="tip-wrapper" style={tip? null : tipStyle}>
                <div className="tip">
                    <h3>Hello! Thanks for stopping by 🙂</h3>
                    <p>just a heads up:</p>
                    <p>You can use the green sidebar buttons on the left and right side of the page to find more contact information like my GitHub profile, LinkedIn, phone number, and email. Ok, that's all!</p>
                    <button className="dismiss" onClick={dismissTip}>dismiss</button>
                </div>
            </div>
            <div className="vertical-line"></div>
            <div orientation="left" className="left-nav">
                <ul className="socials">
                    <li>
                        <a href="https://github.com/mcmurray0125" target="_blank">
                            <i className="fa-brands fa-square-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/michael.c.murray/" target="_blank">
                            <i className="fa-brands fa-square-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/michaelchristophermurray/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div orientation="right" className="right-nav">
                <ul className="my-info">
                    <li>
                        <a href="tel:7737066368" target="_blank">773.706.6368</a>
                    </li>
                    <li>
                        <a href="mailto:mcmurray0125@gmail.com" type="email" target="_blank">mcmurray0125@gmail.com</a>
                    </li>
                </ul>
            </div>
            <Link to="about-me" spy={true} smooth={true} offset={0} duration={500} style={linkStyle}><img className="down-arrow" src={downArrow} alt="down-arrow" /></Link>
        </div>
    )
}