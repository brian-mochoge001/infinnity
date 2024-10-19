import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiGraphql, SiMongodb, SiFirebase, SiKubernetes, SiVite, SiExpo, SiFlutter, SiDjango, SiPython, SiLaravel } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: FaReact, description: 'Building interactive UIs' },
  { name: 'Next.js', icon: SiNextdotjs, description: 'React framework for production' },
  { name: 'Node.js', icon: FaNodeJs, description: 'JavaScript runtime for backend' },
  { name: 'Laravel', icon: SiLaravel, description: 'PHP web Application Framework' },
  { name: 'GraphQL', icon: SiGraphql, description: 'API query language' },
  { name: 'MongoDB', icon: SiMongodb, description: 'NoSQL database' },
  { name: 'AWS', icon: FaAws, description: 'Cloud computing services' },
  { name: 'Docker', icon: FaDocker, description: 'Containerization platform' },
  { name: 'Firebase', icon: SiFirebase, description: 'App development platform' },
  { name: 'Kubernetes', icon: SiKubernetes, description: 'Container orchestration' },
  {name: 'Vite.js', icon: SiVite, description: 'Vite framework for production' },
  {name: 'React Native Expo', icon: SiExpo, description: 'Cross-platform app development'},
  {name: 'Flutter', icon: SiFlutter, description: 'Cross-platform app development'},
  {name: 'Django', icon: SiDjango, description: 'Backend Services'},
  {name: 'Python', icon: SiPython, description: 'Applied software services'},
  {name: 'WordPress', icon: FaWordpress, description: 'Custom websites'},
];

const TechnologyCard = ({ name, Icon, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ 
      scale: 1.05, 
      rotateX: 5, 
      rotateY: 5, 
      transition: { duration: 0.2 } 
    }}
    className="bg-black rounded-lg p-8 flex flex-col items-center transform transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] hover:-translate-y-2"
  >
    <Icon className="text-4xl mb-2 text-white" />
    <h3 className="text-lg font-semibold mb-1 text-white text-center">{name}</h3>
    <p className="text-gray-400 text-center text-sm">{description}</p>
  </motion.div>
);

const Technologies = () => {
  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12"
        >
          Our Modern Web Technologies and Solutions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {technologies.map((tech, index) => (
            <TechnologyCard
              key={tech.name}
              name={tech.name}
              Icon={tech.icon}
              description={tech.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
