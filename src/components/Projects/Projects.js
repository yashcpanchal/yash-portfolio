import './Projects.css';
import projectsData from '../Data/ProjectsData.js';
function Projects() {
    return (
        <div id="projects">
        <h2>Projects</h2>
        <section className="projects">
            {projectsData.map((project, index) => (
                <div className="project_card" key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn"> Github Link </a>
                        )}
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-btn"> Live Demo </a>
                        )}
                    </div>
                    <div className="icons">
                    {project.icons.map((icon, key) => (
                        <span key={key} className="icon-tooltip" data-tooltip={icon.name}>{icon.icon}</span>
                    ))}
                    </div>
                </div>
            ))}
        </section>
        </div>
    )
}

export default Projects;