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
              <div className="about-me-titles">
                <h1 id="about"className="about-me-title">About</h1>
                <h1 id="me"className="about-me-title">me</h1>

              </div>
                <div className="about-me-info" style={scrolled}>
                    <p>Hello! My name is Michael, and I enjoy building things for the internet and its visitors. My interest in tech and computers stems as far back as I can remember. My first experience with programming was creating custom keyframe expressions in Adobe After Effects.</p>
                    <br />
                    <p>I have a naturally curious personality and love working towards new goals. Through my development experience, I have enjoyed using various technologies like React, HTML, & Bootstrap, and I am grateful to have contributed to the open-source community as well.</p>
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