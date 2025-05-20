import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
    const particlesInit = async (engine) => {
        console.log("Initializing particles...", engine)
        try {
            await loadFull(engine);
        } catch (err) {
            console.error("Error initializing particles:", err);
        }
    }

    const particlesOptions = {
        background: {
            color: {
                value: "#000000", // Dark background
            },
        },
        particles: {
            number: {
                value: 75,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: {
                value: "#ffffff",
            },
            links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.3,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "bounce",
                },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 4},
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                onClick: {
                    enable: true,
                    mode: "push",
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                },
                push: {
                    quantity: 4,
                },
            },
        },
        fullScreen: {
            enable: false,
            zIndex: 0,
        },
    };

    return (
        <div style={{ position: "absolute", width: "100vw", height: "100vh", zIndex: 0 }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
                style={{ position: "absolute", width: "100vw", height: "100vh", zIndex: 0 }}/>
        </div>
    )
}

export default ParticlesBackground;