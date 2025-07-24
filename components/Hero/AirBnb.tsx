"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Modal from 'react-modal';

Modal.setAppElement('body'); // Prevents screen reader issues

const images = [
  '/images/LivingRoomAirBnB.png',
  '/images/BathroomAirBnB.png',
  '/images/BedroomAirBnB.png',
  '/images/KitchenAirBnB.png',
];

const MotionH2 = motion('h2');

const AirBnb = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState('');
  const [index, setIndex] = useState(0);

  // Autoplay carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle Book Now click
  const handleBooking = () => {
    console.log('User clicked Book Now!');
    // You can later plug this into Google Analytics or Facebook Pixel
  };

  return (
    <div className="w-full bg-white py-12 px-4 md:px-16">
      <MotionH2
        className="text-3xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Need an AirBnB in Nairobi? <span className="text-red-600">We got you.</span>
      </MotionH2>

      {/* Scrollable & auto-switching image gallery */}
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => {
              setActiveImage(src);
              setModalOpen(true);
            }}
            className={`relative h-64 w-96 flex-shrink-0 rounded-lg overflow-hidden shadow-md border-2 transition-transform ${
              index === i ? 'scale-105 border-red-500' : 'border-transparent'
            }`}
          >
            <Image
              src={src}
              alt={`Airbnb image ${i + 1}`}
              fill
              className="object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Book Now Button */}
      <div className="flex justify-center mt-8">
        <a
          href="https://www.airbnb.com/rooms/1454983245268589138?source_impression_id=p3_1752579694_P3KXXL6CZkXOmWI5"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBooking}
          className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
        >
          Book Now
        </a>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-40"
      >
        <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg overflow-hidden shadow-xl">
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-2 right-2 bg-black text-white p-2 rounded-full z-10"
          >
            ✕
          </button>
          {activeImage && (
            <Image
              src={activeImage}
              alt="Active Airbnb"
              fill
              className="object-contain"
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default AirBnb;
