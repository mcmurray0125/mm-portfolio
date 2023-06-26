import React, { useState, useEffect } from 'react';
import { debounce } from '../utilities/helpers';
import {Link} from "react-scroll"
import mmLogo from "../assets/mm-logo.png"
import '../assets/navbar-styles.css'

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;

    setVisible(currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 5);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);


  return (
    <div className='nav-container' style={{top: visible ? '0' : '-130px' }} id="navbar">
      <div className="brand">
        <img src={mmLogo} alt="MM-logo" className='mm-logo' />
        {/* <h2 className='nav-brand'>MichaelMurray</h2> */}
      </div>
      <div className="nav-links">
        <Link to="about-me" spy={true} smooth={true} offset={0} duration={900} >About Me</Link>
        <Link to="projects" spy={true} smooth={true} offset={0} duration={1200} >Projects</Link>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={1400} >Contact</Link>
        <a href="https://docs.google.com/document/d/1VAi3sOhciWHbMwPtNizf_p2_ek8gcsu_A8Bmix5yQWU/edit?usp=sharing" target="_blank" id="resume">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;