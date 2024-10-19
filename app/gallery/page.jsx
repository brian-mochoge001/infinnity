'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TfiClose } from "react-icons/tfi";
import Modal from 'react-modal'; 

const galleryItems = [
  { id: 1, src: '/gallery/image1.jpg', type: 'image', description: 'Sony xm4 website' },
  { id: 2, src: '/gallery/image2.jpg', type: 'image', description: 'Cookie shop' },
  { id: 3, src: '/gallery/video2.mp4', type: 'video', description: 'Sneaker shop' },
  { id: 4, src: '/gallery/video1.mp4', type: 'video', description: 'Interior design website' },
  { id: 5, src: '/gallery/image3.jpg', type: 'image', description: 'Furniture shop' },
  { id: 6, src: '/gallery/image7.jpg', type: 'image', description: 'Fast Food shop' },
  { id: 7, src: '/gallery/image5.jpg', type: 'image', description: 'Nintendo Games' },
  { id: 8, src: '/gallery/image6.jpg', type: 'image', description: 'Bar liquor ordering store' },
  { id: 9, src: '/gallery/video3.mp4', type: 'video', description: 'Fashion website' },
  { id: 10, src: '/gallery/image8.jpg', type: 'image', description: 'Cocktails' },
  { id: 11, src: '/gallery/video5.mp4', type: 'video', description: 'SaaS Websites' },
  { id: 12, src: '/gallery/image4.jpg', type: 'image', description: 'Generative AI site' },
  { id: 13, src: '/gallery/image10.jpg', type: 'image', description: 'Scooter Store' },
  { id: 14, src: '/gallery/image14.jpg', type: 'image', description: 'Application based website' },
  { id: 15, src: '/gallery/image9.jpg', type: 'image', description: 'Security Products' },
  { id: 16, src: '/gallery/image11.jpg', type: 'image', description: 'Taxi App' },
  { id: 17, src: '/gallery/video4.mp4', type: 'video', description: 'Restaurant Menu design' },
  { id: 18, src: '/gallery/image12.jpg', type: 'image', description: 'Brand Landing Page' },
  { id: 19, src: '/gallery/image13.jpg', type: 'image', description: 'Description for Design1' },
  { id: 20, src: '/gallery/image14.jpg', type: 'image', description: 'Description for Design2' },
];

const GalleryPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null); // State for hovered item

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Disable right-click context menu
  };

  return (
    <div className="container mx-auto mt-20 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Catalog Designs</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="relative cursor-pointer transition transform ease-in-out duration-300 hover:scale-105" 
            onClick={() => openModal(item)}
            onMouseEnter={() => setHoveredItem(item.id)} // Set hovered item
            onMouseLeave={() => setHoveredItem(null)} // Clear hovered item
            onContextMenu={handleContextMenu} // Disable right-click on images/videos
          >
            {item.type === 'image' ? (
              <Image src={item.src} alt={`Gallery Item ${item.id}`} className="w-full h-auto rounded-lg" layout="responsive" width={300} height={200} />
            ) : (
              <video className="w-full h-auto rounded-lg" muted loop autoPlay>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {hoveredItem === item.id && ( // Show tooltip only for hovered item
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-700 text-center text-white text-sm p-4 rounded-xl">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for displaying the selected item */}
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        className="modal" 
        overlayClassName="overlay"
        closeTimeoutMS={300} // Duration for closing animation
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)', // Center the modal
            transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            opacity: modalIsOpen ? 1 : 0, // Fade effect
            transform: modalIsOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.7)', // Scale effect
          },
        }}
      >
        <button onClick={closeModal} className="absolute top-8 right-8 text-white bg-black shadow-xl shadow-inset-0 shadow-slate-400 p-6 rounded-full font-thin text-2xl">
          <TfiClose /> {/* Close icon */}
        </button>
        {selectedItem && (
          <div className="flex justify-center items-center h-full">
            {selectedItem.type === 'image' ? (
              <Image src={selectedItem.src} alt={`Gallery Item ${selectedItem.id}`} className="rounded-lg" layout="intrinsic" width={800} height={600} />
            ) : (
              <video className="rounded-lg" controls autoPlay muted>
                <source src={selectedItem.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default GalleryPage;
