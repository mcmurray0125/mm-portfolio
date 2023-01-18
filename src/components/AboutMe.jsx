import personTwo from "../assets/person-2.svg"
import mmImage from "../assets/mm-pic-4.jpg"
import shadow from "../assets/shadow.svg"
import doodleTile from "../assets/doodle-tile.svg"
import "../assets/aboutme-styles.css"
import React from "react"
import { useEffect } from "react"
import lightbulb from '../assets/lightbulb.svg'
import musicNote from '../assets/music-note.svg'
import arrow from '../assets/arrow.svg'

export default function AboutMe() {
    const [scrolled, setScrolled] = React.useState({opacity: 0})
    
    const listenScrollEvent = (event) => {
      if (window.scrollY < 750) {
        return setScrolled({opacity: 0})
      } else if (window.scrollY > 749) {
        return setScrolled({opacity: 1})
      } 
    }
    
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    
      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    
    return(
        <div className="about-me" id="about-me">
            <div className="about-me-text">
                <h1 id="about"className="about-me-title">About</h1>
                <h1 id="me"className="about-me-title">me</h1>
                <div className="about-me-info" style={scrolled}>
                    <p>Hello! My name is Michael, and I enjoy building things for the internet and its visitors. My interest in technology and computers stems as far back as I can remember. My first experience with programming was creating custom keyframe expressions in Adobe After Effects.</p>
                    <br />
                    <p>As an educator, I am naturally curious and skilled in working towards measurable goals. Through my developement experience, I enjoy using various technologies and I am grateful to have also been a part of the open-source community.</p>
                </div>
                <img id="note" src={musicNote} alt="note" />
                <img id="arrow" src={arrow} alt="arrow1" />
                <img id="lightbulb" src={lightbulb} alt="lightbulb" />
            </div>
            <div className="about-me-images">
                <img id="shadow-two" src={shadow} alt="shadow" />
                <img id="person-two" src={mmImage} alt="person-coding-two" />
                <img id='doodle-tile' src={doodleTile} alt="doodle-tile" />
            </div>
        </div>
    )
}