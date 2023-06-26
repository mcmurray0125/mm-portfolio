import '../assets/footer-styles.css'
import {Link} from "react-scroll"
import mmLogo from "../assets/mm-logo.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-brand">
                <img src={mmLogo} alt="MM-logo" className='mm-logo-footer' />
            </div>
            <div className="footer-links">
                <Link to="overlay" spy={true} smooth={true} offset={-100} duration={1200} >Home&nbsp;&nbsp;<i className="fa-solid fa-house"></i></Link>
                <Link to="about-me" spy={true} smooth={true} offset={-100} duration={1000} >About Me&nbsp;&nbsp;<i className="fa-regular fa-user"></i></Link>
                <a href="https://docs.google.com/document/d/1VAi3sOhciWHbMwPtNizf_p2_ek8gcsu_A8Bmix5yQWU/edit?usp=sharing" target="_blank" id="resume-footer">Resume&nbsp;&nbsp;<i className="fa-regular fa-file"></i></a>
                <Link to="projects" spy={true} smooth={true} offset={0} duration={900} >Projects&nbsp;&nbsp;<i className="fa-solid fa-screwdriver-wrench"></i></Link>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={300} >Contact&nbsp;&nbsp;<i className="fa-solid fa-phone"></i></Link>
            </div>
        </footer>
    )
}