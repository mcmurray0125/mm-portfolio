import "../assets/overlay-styles.css"
import downArrow from "../assets/down-arrow.png"

export default function Overlay() {
    return (
        <div className="overlay">
            <div className="vertical-line"></div>
            <img className="down-arrow" src={downArrow} alt="down-arrow" />
        </div>
    )
}