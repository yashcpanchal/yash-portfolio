import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className="side">
                <img src="/yash-picture.png" alt="Yash Panchal"></img>
                <p>
                    I am a third-year Computer Science student at Georgia Tech, on the Systems & Architecture and Intelligence threads. I have built payments infrastructure at Visa, NLP research at the Ancient Language Intelligence Lab, an AI web-app builder at Narb, and flight software for GT Experimental Rocketry. My projects also include an AI-native job board, xv6 kernel extensions, an algorithmic trading stack, and an on-device dementia care app.
                    <br /><br />
                    I am looking for opportunities in applied AI, systems software engineering, and other hard problems. Reach me at yashcpanchal41@gmail.com.
                </p>
            </div>
        </section>
    )
}

export default About;