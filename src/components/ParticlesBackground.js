import { useEffect } from "react";
import { Particles } from "@tsparticles/react";

function ParticlesBackground() {
    useEffect(() => {
        console.log("ParticlesBackground component rendered");
    }, []);

    // Minimal working config from tsparticles docs
    const particlesOptions = {
        particles: {
            number: {
                value: 50,
            },
            size: {
                value: 3,
            },
        },
    };

    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            background: "rgba(255,0,0,0.2)" // visible background for debug
        }}>
            {console.log("[DEBUG] Before rendering <Particles />")}
            <Particles id="tsparticles" options={particlesOptions} />
            {console.log("[DEBUG] After rendering <Particles />")}
            <span style={{color: 'red', position: 'absolute', top: 10, left: 10, zIndex: 10}}>[DEBUG] If you see this, Particles did not render.</span>
        </div>
    );
}

export default ParticlesBackground;