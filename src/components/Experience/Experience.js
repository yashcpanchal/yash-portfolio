import './Experience.css';
import experienceData from '../Data/ExperienceData.js';

const ExperienceCard = ({ job }) => {
    return (
        <div className="experience_card">
            <div className="experience-header">
                <div className="experience-title">
                    <h3>{job.company}</h3>
                    <h4>{job.role}</h4>
                </div>
                <div className="experience-meta">
                    <span className="experience-dates">{job.dates}</span>
                    <span className="experience-location">{job.location}</span>
                </div>
            </div>
            <ul className="experience-bullets">
                {job.bullets.map((bullet, key) => (
                    <li key={key}>{bullet}</li>
                ))}
            </ul>
            {job.link && (
                <div className="experience-links">
                    <a href={job.link} target="_blank" rel="noopener noreferrer"> Learn More </a>
                </div>
            )}
            <div className="icons">
                {job.icons.map((icon, key) => (
                    <span key={key} className="icon-tooltip" data-tooltip={icon.name}>{icon.icon}</span>
                ))}
            </div>
        </div>
    );
};

function Experience() {
    return (
        <div id="experience">
            <h2>Experience</h2>
            <section className="experience">
                {experienceData.map((job, index) => (
                    <ExperienceCard job={job} key={index} />
                ))}
            </section>
        </div>
    );
}

export default Experience;
