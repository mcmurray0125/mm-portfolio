import "../assets/overlay-styles.css"
import downArrow from "../assets/down-arrow.png"
import {Link} from "react-scroll"

export default function Overlay() {

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
            <Link to="about-me" spy={true} smooth={true} offset={-100} duration={500} style={linkStyle}><img className="down-arrow" src={downArrow} alt="down-arrow" /></Link>
        </div>
    )
}