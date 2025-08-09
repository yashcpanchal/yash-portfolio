import { useState, useEffect, useRef } from 'react';
import './Animations.css';

function AnimationWrapper({ children, customThreshold, rootMargin }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let threshold;

        if (customThreshold !== undefined) {
            threshold = customThreshold;
        } else {
            const isDesktop = width > 768;
            threshold = isDesktop ? 0.5 : 0.1;
        }

        const options = {
            threshold: threshold,
            rootMargin: rootMargin || '0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        }, options);

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [width, customThreshold, rootMargin]);

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
