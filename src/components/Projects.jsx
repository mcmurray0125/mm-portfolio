import '../assets/projects-styles.css'
import data from '../assets/cards'
import ProjectCard from './ProjectCard'

export default function Projects() {

    const cardElements = data.map((item) => {
        return (
            <ProjectCard
                key={item.id}
                item={item}
                />
        )
      })

    return(
        <section className="projects" id='projects'>
            <div className="projects-text">
                <h1 id="p-title-1">My recent</h1>
                <h1 id="p-title-2">projects</h1>
            </div>
            {cardElements}
        </section>
    )
}