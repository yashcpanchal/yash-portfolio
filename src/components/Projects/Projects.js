import { useState, useRef, useEffect } from 'react';
import './Projects.css';
import projectsData from '../Data/ProjectsData.js';

// A self-contained component for each project card
const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        if (descriptionRef.current) {
            // Show the "Read More" button only if the text is overflowing
            if (descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight) {
                setShowButton(true);
            }
        }
    }, [project.description]);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="project_card">
            <h3>{project.name}</h3>
            <p ref={descriptionRef} className={`project-description ${isExpanded ? 'expanded' : ''}`}>
                {project.description}
            </p>
            {showButton && (
                <button onClick={toggleReadMore} className="read-more-btn">
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            )}
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
    );
};


function Projects() {
    return (
        <div id="projects">
            <h2>Projects</h2>
            <section className="projects">
                {projectsData.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </section>
        </div>
    )
}

export default Projects;
