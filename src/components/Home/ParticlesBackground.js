import { useEffect } from "react";
import 'particles.js';

function ParticlesBackground() {
    useEffect(() => {
        window.particlesJS.load('particles-js', '/particles.json', function() {
        });
    }, []);


    return <div id="particles-js" style={{ position: 'static', width: '100vw', height: '100vh', zIndex: -1, top: 0, left: 0 }}></div>;
}

export default ParticlesBackground;