import personTwo from "../assets/person-2.svg"
import shadow from "../assets/shadow.svg"
import "../assets/aboutme-styles.css"

export default function AboutMe() {
    return(
        <div className="about-me">
            <div className="about-me-text">
                <h1 id="about"className="about-me-title">About</h1>
                <h1 id="me"className="about-me-title">me</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam repellat error consectetur corrupti doloremque. In quisquam alias quos consequatur distinctio dolor pariatur repudiandae assumenda, debitis vel quaerat doloremque beatae explicabo?</p>
            </div>
            <div className="about-me-images">
                <img id="person-two" src={personTwo} alt="person-coding-two" />
                <img id="shadow-two" src={shadow} alt="shadow" />
            </div>
        </div>
    )
}