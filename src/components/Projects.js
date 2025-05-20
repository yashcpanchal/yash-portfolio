import './Projects.css';
import projectsData from './ProjectsData.js';
function Projects() {
    return (
        <div>
        <h2>Projects</h2>
        <section className="projects">
            {projectsData.map((project, index) => (
                <div className="project_card" key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.github}> Github Link </a>
                    <div className="icons">
                    {project.icons.map((icon, key) => (
                        <span key={key}>{icon}</span>
                    ))}
                    </div>
                </div>
            ))}
        </section>
        </div>
    )
}

export default Projects;