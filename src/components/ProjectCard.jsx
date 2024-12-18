export default function ProjectCard({item, isVisible}) {
    const cardOrientation = {
        flexDirection: item.id % 2 === 0 ? "row-reverse" : "row",
    };

    const cardAnimation = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : `translateX(${item.id % 2 === 0 ? "100vw" : "-100vw"})`
    };
    
    const greenText = {
        color: 'var(--main-color)'
    }
    
    return (
            <div className="card" style={{ ...cardOrientation, ...cardAnimation }} data-id={item.id}>
                <div className="card-assets">
                    <h3 className="card-title">{item.title}</h3>
                    <img src={item.img} alt="project image" />
                </div>
                <div className="card-about">
                    <p className="about-text">{item.about}</p>
                    <div className="card-btn-wrapper">
                        {item.video //If video link, render "Video Demo" instead of "View Project"
                        ?
                        <a href={item.video} target="_blank" className="card-btn">
                            <span style={greenText}>Video</span> Demo &nbsp;<i className="fa-solid fa-video"></i>
                        </a>
                        :
                        <a href={item.link} target="_blank" className="card-btn">
                            <span style={greenText}>View</span> Project &nbsp;<i className="fa-solid fa-globe"></i>
                        </a>
                        }
                        <a href={item.github} target="_blank" className="card-btn">
                            <span style={greenText}>Git</span>Hub &nbsp;<i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
    )
}