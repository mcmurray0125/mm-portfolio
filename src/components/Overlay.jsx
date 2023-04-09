import "../assets/overlay-styles.css"
import React, { useEffect } from "react"
import { useState } from "react"

export default function Overlay() {

    const [isFirstTime, setIsFirstTime] = useState(() => JSON.parse(localStorage.getItem("visited")) || false);

    //If first time visiting site, display message
    useEffect(() => {
      const visited = localStorage.getItem('visited');
      if (visited) {
        setIsFirstTime(false);
      } else {
        setIsFirstTime(true)
      }
    }, []);
    
    function dismissTip() {
        setIsFirstTime(false)
        localStorage.setItem('visited', true);
    }

    const hideTip = {
        display: "none"
    }

    return (
        <div className="overlay" id="overlay">
            <div className="tip-wrapper" style={isFirstTime? null : hideTip}>
                <div className="tip">
                    <h4>Hello! Thanks for stopping by 🙂</h4>
                    <p>Use the right + left green sidebars to see additional contact info and social links!</p>
                    <button className="dismiss" onClick={dismissTip}>X</button>
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
        </div>
    )
}