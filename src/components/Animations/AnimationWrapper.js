import { useState, useEffect, useRef } from 'react';
import './Animations.css';

function AnimationWrapper({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        }, {
            threshold: 0.5
        });
        
        const currentElement = domRef.current;
        observer.observe(currentElement);
        
        return () => observer.unobserve(currentElement);
    }, []);

    return (
        <div 
            ref={domRef} 
            className={`${isVisible ? 'animation-in' : 'animation-out'}`}
        >
            {children}
        </div>
    );
}

export default AnimationWrapper;