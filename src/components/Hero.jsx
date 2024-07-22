import React, { useRef } from 'react';
import AboutMe from './AboutMe.jsx'; // Adjust the import path as needed

export default function Hero() {
    const aboutMeRef = useRef(null);

    const handleScrollToAboutMe = () => {
        const aboutMeSection = document.getElementById('about-me');
        if (aboutMeSection) {
            aboutMeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="section-hero">
            <div className="hero-text">
                <h1>Hi! I am Sreejita Das</h1>
                <p>Welcome to my portfolio website!</p>
                <button className="button-hero" onClick={handleScrollToAboutMe}><a href="#about-me">About Me</a></button>
            </div>
        </section>
    );
}