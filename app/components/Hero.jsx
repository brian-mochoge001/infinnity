import React, { useRef, useEffect } from 'react';
import moon from '../assets/moon.png';
import moonmd from '../assets/moonmd.png';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Set video playback speed to 1.5x
    }
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 h-screen bg-cover bg-center overflow-hidden">
      {/* Mobile background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 md:hidden"
        style={{ backgroundImage: `url(${moonmd.src})` }}
      />
      {/* Desktop background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 hidden md:block opacity-50"
        style={{ backgroundImage: `url(${moon.src})` }}
      />
      
      <div className="p-20 flex flex-col gap-4 md:gap-16 text-center md:text-left z-10">
        <h1 className="text-white text-5xl md:text-6xl font-bold">Transforming Ideas into Innovative Solutions</h1>
        <p className="text-white text-4xl md:text-3xl font-normal">
          Expert web and mobile app development tailored to your needs.
        </p>
        <div className="flex justify-center md:justify-start">
          <a href="#portfolio" className="bg-orange-400 text-black rounded-lg shadow-lg hover:bg-orange-500 transition duration-300 flex justify-center items-center px-6">
            View Our Work
          </a>
          <a href="#contact" className="ml-4 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-300">
            Get in Touch
          </a>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <div className="text-gray-500 px-4 py-2 rounded-lg shadow-lg">Web Development</div>
          <div className="text-gray-500 px-4 py-2 rounded-lg shadow-lg">Mobile App Development</div>
          <div className="text-gray-500 px-4 py-2 rounded-lg shadow-lg">UI/UX Design</div>
          <div className="text-gray-500 px-4 py-2 rounded-lg shadow-lg">E-commerce Solutions</div>
        </div>
      </div>
      
      {/* Hero Video Container */}
      <div className="relative w-full md:w-auto max-w-full h-[85vh] md:h-[90vh] z-5 overflow-hidden m-8 flex justify-center mt-20 opacity-40">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-auto h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Hero;
