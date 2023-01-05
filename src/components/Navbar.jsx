import React, { useState, useEffect } from 'react';
import { debounce } from '../utilities/helpers';
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
    <div className='nav-container' style={{top: visible ? '0' : '-130px' }}>
      <h2 className='nav-brand'>MichaelMurray</h2>
      <div className="nav-links">
        <a href="#" >Projects</a>
        <a href="#" >About Me</a>
        <a href="#" >Contact</a>
      </div>
    </div>
  );
};

export default Navbar;