import { useEffect, useState, useRef } from 'react';
import '../assets/projects-styles.css'
import data from '../assets/cards'
import ProjectCard from './ProjectCard'

export default function Projects() {
    const sectionRef = useRef(null);
    const [visibleCards, setVisibleCards] = useState({});

    useEffect(() => {
        let ticking = false;
    
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const cards = sectionRef.current.querySelectorAll(".card");
                    const windowHeight = window.innerHeight;
    
                    const updatedVisibility = {};
                    cards.forEach((card) => {
                        const cardId = card.dataset.id;
                        const { top } = card.getBoundingClientRect();
                        if (top + 200 < windowHeight && !visibleCards[cardId]) {
                            updatedVisibility[cardId] = true;
                        }
                    });
    
                    setVisibleCards((prev) => ({ ...prev, ...updatedVisibility }));
                    ticking = false;
                });
                ticking = true;
            }
        };
    
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Trigger on initial render
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <section className="projects" id='projects' ref={sectionRef}>
            <div className="projects-text">
                <h1 id="p-title-1">My recent</h1>
                <h1 id="p-title-2">projects</h1>
            </div>
            {data.map((item) => {
                return (
                    <ProjectCard
                        key={item.id}
                        item={item}
                        isVisible={visibleCards[item.id]}
                    />
                )
            })}
        </section>
    )
}