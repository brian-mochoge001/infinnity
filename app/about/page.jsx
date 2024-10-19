'use client'

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import teamImage from '../assets/team.jpg'; // Replace with your team image
import logo from '../assets/logo.png'; // Replace with your logo
import backgroundImage1 from '../assets/moon.png'; // Replace with your background image
import backgroundImage2 from '../assets/desktopfooter.jpg'; // Replace with your background image

const AboutPage = () => {
  const { scrollY } = useScroll(); // Get the scroll position
  const rotateMission = useTransform(scrollY, [0, 500], [2, -5]); // Change rotation for Mission card
  const rotateVision = useTransform(scrollY, [0, 500], [-2, 5]); // Change rotation for Vision card

  // Replace unescaped single quotes with HTML entities
  const exampleText = 'This is an example with an unescaped single quote: &rsquo;';

  return (
    <ParallaxProvider>
      <div className="bg-black min-h-screen mt-20">
        <div className="container mx-auto p-8">

          {/* Logo and Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-center h-screen flex flex-col justify-center items-center gap-8"
          >
            <Image src={logo} alt="Infinnity Developers Logo" width={150} height={150} className="mx-auto mb-8" />
            <h1 className="text-5xl font-bold text-white mb-4">Infinnity Developers</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Merging creativity with technological expertise, crafting digital experiences that transform businesses. We believe that innovation is key to helping businesses thrive in a rapidly evolving digital world.
            </p>
          </motion.div>

          {/* Who We Are */}
          <Parallax speed={-10}>
            <motion.section
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 1 }}
              className="my-32 relative bg-cover bg-center h-96"
              style={{ backgroundImage: `url(${backgroundImage1.src})` }} // Set background image
            >
              <div className="bg-black bg-opacity-70 p-10 rounded-lg">
                <h2 className="text-4xl font-semibold text-white mb-4">Who We Are</h2>
                <p className="text-lg text-gray-300 mb-4">
                  We are a team of experienced software engineers, designers, and strategists who focus on delivering impactful, scalable solutions. From front-end interfaces to back-end systems, our approach is rooted in innovation, reliability, and efficiency.
                </p>
                <motion.div 
                  className="relative w-full h-64 mt-8"
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  transition={{ duration: 1 }}
                >
                  <Image src={teamImage} alt="Our Team" layout="fill" objectFit="cover" className="rounded-lg" />
                </motion.div>
              </div>
            </motion.section>
          </Parallax>

          {/* Our Services */}
          <Parallax speed={-10}>
            <motion.section
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 1 }}
              className="my-32 relative bg-cover bg-center h-96"
              style={{ backgroundImage: `url(${backgroundImage2.src})` }} // Set background image
            >
              <div className="bg-black bg-opacity-70 p-10 rounded-lg">
                <h2 className="text-4xl font-semibold text-white mb-4">What We Do</h2>
                <ul className="list-none text-lg text-gray-300 space-y-4 max-w-3xl mx-auto">
                  <li>• Web and App Development, delivering seamless digital experiences across devices.</li>
                  <li>• Custom SaaS Solutions tailored to meet your business needs.</li>
                  <li>• UI/UX design that ensures user engagement and satisfaction.</li>
                  <li>• DevOps and Cloud Services to support scalable infrastructure.</li>
                  <li>• SEO and Performance Optimization for better visibility and speed.</li>
                </ul>
              </div>
            </motion.section>
          </Parallax>

          {/* Our Mission and Vision as Glassmorphism Cards */}
          <Parallax speed={-5}>
            <motion.section 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 1 }}
              className="my-32"
            >
              <h2 className="text-4xl font-semibold text-white mb-4 text-center">Our Mission & Vision</h2>
              <div className="flex justify-center space-x-8">
                <motion.div 
                  className="bg-white bg-opacity-10 text-center backdrop-blur-lg border border-white border-opacity-20 rounded-lg p-10 w-80 h-96"
                  style={{ rotate: rotateMission }} // Apply rotation based on scroll
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">Our Mission</h3>
                  <p className="text-lg text-gray-300">
                    Our mission is to deliver top-tier digital solutions that drive success for businesses. We aim to bridge the gap between business goals and innovative technology, creating impactful software that stands the test of time.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white bg-opacity-10 text-center backdrop-blur-lg border border-white border-opacity-20 rounded-lg p-10 w-80 h-96"
                  style={{ rotate: rotateVision }} // Apply rotation based on scroll
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">Our Vision</h3>
                  <p className="text-lg text-gray-300">
                    Our vision is to be at the forefront of digital transformation, continuously innovating and shaping the future of web and app development. We believe in empowering businesses with solutions that are not just functional but transformative.
                  </p>
                </motion.div>
              </div>
            </motion.section>
          </Parallax>

          {/* Technologies */}
          <Parallax speed={-10}>
            <motion.section 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 1 }}
              className="my-32"
            >
              <h2 className="text-4xl font-semibold text-white mb-4">Technologies We Use</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
                We leverage a broad spectrum of technologies to provide modern, scalable, and reliable solutions.
              </p>
              <ul className="text-lg text-gray-300 space-y-4 max-w-3xl mx-auto">
                <li>• Front-end: React.js, Next.js, Vue.js</li>
                <li>• Back-end: Node.js, Django, Ruby on Rails</li>
                <li>• Cloud Platforms: AWS, Google Cloud, Azure</li>
                <li>• Mobile Development: React Native, Flutter</li>
                <li>• Databases: MySQL, MongoDB, PostgreSQL</li>
              </ul>
            </motion.section>
          </Parallax>

          {/* Contact Us */}
          <Parallax speed={-5}>
            <motion.section 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="text-center my-32"
            >
              <h2 className="text-4xl font-semibold text-white mb-4">Let us Build Your Next Big Idea</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Whether you are a startup or an established enterprise, Infinnity Developers is ready to partner with you to bring your digital ideas to life. Get in touch today and let us start building something extraordinary.
              </p>
              <a href="/contact" className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-500 transition duration-200">
                Contact Us
              </a>
            </motion.section>
          </Parallax>

        </div>
      </div>
    </ParallaxProvider>
  );
};

export default AboutPage;
