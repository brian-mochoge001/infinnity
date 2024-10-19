"use client"
import { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero';
import ImageSequence from './components/ImageSeqence';
import Technologies from './components/Technologies';
import Testimonials from './components/Testimonials';

function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        if (currentSection < sectionsRef.current.length - 1) {
          setCurrentSection(prev => Math.min(prev + 1, sectionsRef.current.length - 1));
        }
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        if (currentSection > 0) {
          setCurrentSection(prev => Math.max(prev - 1, 0));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, sectionsRef]); // Ensure dependencies are correctly set

  useEffect(() => {
    if (sectionsRef.current[currentSection]) {
      sectionsRef.current[currentSection].scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection]);

  return (
    <div>
      <Hero />
      <ImageSequence />
      <Technologies />
      <Testimonials /> 
    </div>
  );
}

export default HomePage;
