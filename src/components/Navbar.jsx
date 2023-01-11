import React, { useState, useEffect } from 'react';
import { debounce } from '../utilities/helpers';
import {Link} from "react-scroll"
import '../assets/navbar-styles.css'

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 5);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);


  return (
    <div className='nav-container' style={{top: visible ? '0' : '-130px' }} id="navbar">
      <h2 className='nav-brand'>MichaelMurray</h2>
      <div className="nav-links">
        <Link to="about-me" spy={true} smooth={true} offset={-100} duration={900} >About Me</Link>
        <Link to="projects" spy={true} smooth={true} offset={0} duration={1200} >Projects</Link>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={1400} >Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;