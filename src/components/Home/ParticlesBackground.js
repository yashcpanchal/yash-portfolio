import { useEffect } from "react";
import 'particles.js';

function ParticlesBackground() {
    useEffect(() => {
        window.particlesJS.load('particles-js', '/particles.json', function() {
        });
    }, []);


    // FIX: Changed width from '100vw' to '100%' to prevent horizontal overflow
    return <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100vh', zIndex: -1, top: 0, left: 0 }}></div>;
}

export default ParticlesBackground;
