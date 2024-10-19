import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import dp from '../assets/dp.png';
import woman from '../assets/woman.png';
import lady from '../assets/lady.png';

const testimonials = [
  {
    id: 1,
    name: "Raphael Sarota",
    position: "CEO, Invata engineering kenya",
    content: "The web services provided by this team have transformed our online presence. Their attention to detail and innovative solutions have significantly boosted our user engagement.",
    image: dp
  },
  {
    id: 2,
    name: "Leakey Mochoge",
    position: "Marketing Director, Global Reach",
    content: "I'm impressed by the responsiveness and professionalism of the team. They delivered a website that not only looks great but also performs exceptionally well.",
    image: dp
  },
  {
    id: 3,
    name: "Fannon Oriosa",
    position: "Founder, Firstlane Events",
    content: "Working with this team was a game-changer for our startup. Their web services helped us establish a strong online identity and attract our target audience effectively.",
    image: dp
  },
  {
    id: 4,
    name: "Dr. Britney",
    position: "CTO, InnovateTech",
    content: "The expertise and dedication of this team are unparalleled. They've consistently delivered high-quality solutions that exceed our expectations.",
    image: woman
  },
  {
    id: 5,
    name: "Miss Latifa",
    position: "Product Manager, FutureSoft",
    content: "Their ability to understand our needs and translate them into functional, beautiful web solutions is remarkable. Highly recommended!",
    image: lady
  }
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col h-full"
  >
    <FaQuoteLeft className="text-2xl text-gray-500 mb-4" />
    <p className="text-gray-300 mb-4 flex-grow">{testimonial.content}</p>
    <div className="flex items-center mt-4">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={48}
        height={48}
        className="rounded-full mr-4"
      />
      <div>
        <p className="font-semibold text-white">{testimonial.name}</p>
        <p className="text-gray-400">{testimonial.position}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 3));
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length - 3) % (testimonials.length - 3));
  };

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {testimonials.slice(currentIndex, currentIndex + 4).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonials}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-md text-white"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextTestimonials}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-md text-white"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
