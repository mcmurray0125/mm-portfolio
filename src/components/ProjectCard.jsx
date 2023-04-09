import React from "react";


export default function ProjectCard(props) {

    const greenText = {
        color: 'var(--main-color)'
    }
    
    const cardOrientation = {
        flexDirection: props.item.id % 2 === 0 ? 'row-reverse' : 'row'
    }

    return (
            <div className="card" style={cardOrientation}>
                <div className="card-assets">
                    <h3 className="card-title">{props.item.title}</h3>
                    <img src={props.item.img} alt="project image" />
                </div>
                <div className="card-about">
                    <p className="about-text">{props.item.about}</p>
                    <div className="card-btn-wrapper">
                        <a href={props.item.link} target="_blank" className="card-btn"><span style={greenText}>View</span> Project &nbsp;<i className="fa-solid fa-globe"></i></a>
                        <a href={props.item.github} target="_blank" className="card-btn"><span style={greenText}>Git</span>Hub &nbsp;<i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
    )
}