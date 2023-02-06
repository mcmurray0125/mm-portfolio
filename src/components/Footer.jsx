import '../assets/footer-styles.css'
import {Link} from "react-scroll"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <Link to="overlay" spy={true} smooth={true} offset={-100} duration={1200} ><i className="fa-solid fa-house"></i>&nbsp;&nbsp;Home</Link>
                <Link to="about-me" spy={true} smooth={true} offset={-100} duration={1000} ><i className="fa-regular fa-user"></i>&nbsp;&nbsp;About Me</Link>
                <a href="https://docs.google.com/document/d/1laak7-aGKTgVdvgkclAjW3ZjTuKtKIrypT48-1sX71Q/edit?usp=sharing" target="_blank" id="resume-footer">Resume</a>
                <Link to="projects" spy={true} smooth={true} offset={0} duration={900} ><i className="fa-solid fa-screwdriver-wrench"></i>&nbsp;&nbsp;Projects</Link>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={300} ><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;Contact</Link>
            </div>
            <div className="languages">
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-js"></i>
                <i className="fa-brands fa-react"></i>
            </div>
        </footer>
    )
}