import '../assets/projects-styles.css'

export default function Projects() {
    return(
        <section className="projects" id='projects'>
            <div className="projects-text">
                <h1 id="p-title-1">My recent</h1>
                <h1 id="p-title-2">projects</h1>
            </div>
            <div className="cards-container">
                <div className="card">Card 1</div>
                <div className="card"> Card 2</div>
                <div className="card">Card 3</div>
                <div className="card">Card 4</div>
            </div>
        </section>
    )
}