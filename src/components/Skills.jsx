import React from 'react'
import "../assets/skills-styles.css"

export default function Skills() {
  return (
    <section className='skills'>
        <h1>Skilled in</h1>
        <div className='skills-grid'>
                <span className='skill'>
                    <i className="fa-brands fa-react skill-icon"></i>
                    <p>React.js</p>
                </span>
                <span className='skill'>
                    <i className="fa-brands fa-css3-alt skill-icon"></i>
                    <p>CSS</p>
                </span>
                <span className='skill'>
                    <i className="fa-brands fa-js skill-icon"></i>
                    <p>JavaScript</p>
                </span>
                <span className='skill'>
                    <i className="fa-brands fa-html5 skill-icon"></i>
                    <p>HMTL5</p>
                </span>
                <span className='skill'>
                    <i className="fa-brands fa-bootstrap skill-icon"></i>
                    <p>Bootstrap</p>
                </span>
        </div>
    </section>
  )
}
