'use client'
import { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const textContent = [
  "Crafting responsive web experiences",
  "Developing scalable web solutions",
  "Building powerful mobile applications",
  "Optimizing for seamless user interactions",
  "Creating intuitive app interfaces"
];

const ImageSequence = ({ frameCount = 300, basePath = '/laptop/' }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [textIndex, setTextIndex] = useState(0);
  const containerRef = useRef(null);
  const accumulatedDeltaRef = useRef(0);

  const handleScroll = useCallback((e) => {
    e.preventDefault();
    
    // Accumulate scroll delta
    accumulatedDeltaRef.current += e.deltaY;
    
    // Only update frame when accumulated delta reaches a threshold
    if (Math.abs(accumulatedDeltaRef.current) >= 50) {
      const frameStep = Math.sign(accumulatedDeltaRef.current) * 6;
      const newFrame = Math.max(0, Math.min(frameCount - 1, currentFrame + frameStep));
      
      setCurrentFrame(newFrame);
      setTextIndex(Math.floor(newFrame / 60) % textContent.length);
      
      // Reset accumulated delta
      accumulatedDeltaRef.current = 0;
    }
  }, [currentFrame, frameCount]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, [handleScroll]);

  const imageSrc = `${basePath}frame_${currentFrame.toString().padStart(4, '0')}.png`;

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {isLoading && <div className="absolute inset-0 flex items-center justify-center">Loading...</div>}
      {error && <div className="absolute inset-0 flex items-center justify-center">Error: {error}</div>}
      <div className="opacity-60">
        <Image
          src={imageSrc}
          alt={`Frame ${currentFrame}`}
          fill
          style={{ objectFit: 'contain' }}
          priority
          onLoad={() => setIsLoading(false)}
          onError={() => setError('Failed to load image')}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={textIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h2 className="mx-6 text-4xl md:text-6xl text-white font-bold text-center px-4">
            {textContent[textIndex]}
          </h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageSequence;
