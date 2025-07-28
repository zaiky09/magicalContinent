"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Modal.setAppElement('body');

const images = [
  '/images/BedroomAirBnB.png',
  '/images/LivingRoomAirBnB.png',
  '/images/BathroomAirBnB.png',
  '/images/KitchenAirBnB.png',
];

const MotionH2 = motion('h2');

const AirBnb = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImg, setActiveImg] = useState('');

  const handleBooking = () => console.log('User clicked Book Now!');

  const openModal = (img: string) => {
    setActiveImg(img);
    setIsOpen(true);
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

      {/* Polished Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={16}
        slidesPerView={1}
        loop
        className="max-w-4xl mx-auto"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              onClick={() => openModal(src)}
              className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden cursor-pointer"
            >
              <Image src={src} alt={`Image ${idx + 1}`} fill className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-8">
        <a
          href="https://www.airbnb.com/rooms/YOUR_LISTING_ID"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBooking}
          className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
        >
          Book Now
        </a>
      </div>

      {/* Modal for enlarged image */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg overflow-hidden"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 bg-black text-white p-2 rounded-full z-10"
        >
          ✕
        </button>
        {activeImg && (
          <Image src={activeImg} alt="Expanded view" fill className="object-contain" />
        )}
      </Modal>
    </div>
  );
};

export default AirBnb;
