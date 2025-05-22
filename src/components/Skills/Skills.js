import "./Skills.css";
import skillsData from "../Data/SkillsData.js";
function Skills() {
    return (
        <div>
        <h2>Skills</h2>
        <section id="skills" className='skills'>
            {skillsData.map((skills, index) => (
                <div className='skillcard' key={index}>
                    <h3>{skills.section}</h3>
                    {skills.content.map((entry, index) =>
                        <span className="side" key={index}>
                            <h4>{entry.name}</h4>
                            {entry.icon}
                        </span>
                    )}
                </div>
            ))}
        </section>
        </div>
    );
}

export default Skills;