import React, { useEffect, useState, useRef } from "react";


export default function ProjectCard(props) {
    const [opacity, setOpacity] = useState(0);
    const [translateX, setTranslateX] = useState(props.item.id % 2 === 0 ? window.innerWidth : window.innerWidth * -1);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const { top, bottom } = cardRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && bottom > 0) {
                setOpacity(1);
                setTranslateX(0);
            } else {
                setOpacity(0);
                setTranslateX(props.item.id % 2 === 0 ? window.innerWidth : window.innerWidth * -1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cardOrientation = {
        flexDirection: props.item.id % 2 === 0 ? 'row-reverse' : 'row'
    }
    
    const cardAnimation = {
        opacity: opacity,
        transform: `translateX(${translateX}px)`,
    }
    
    const greenText = {
        color: 'var(--main-color)'
    }
    
    return (
            <div className="card" style={{ ...cardOrientation, ...cardAnimation }} ref={cardRef}>
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