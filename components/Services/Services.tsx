"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "../Holiday/Modal"; // Reuse the modal used in holiday.tsx
// import Button from "../Button";

const services = [
  // {
  //   id: 1,
  //   title: "Accommodation",
  //   thumbnailUrl: "/images/Concierge.jpg",
  //   description: "Experience world-class hospitality services.",
  //   images: ["/images/HotelBooking.jpg", "/images/Camping.jpg", "/images/FlightDisruption.jpg"],
  // },
  {
    id: 2,
    title: "Ticketing",
    thumbnailUrl: "/images/Ticket2.jpg",
    description: "Hassle-free ticket booking for flights, trains, and more.",
    images: ["/images/Ticket2.jpg"],
  },
  {
    id: 3,
    title: "Tours & Safaris",
    thumbnailUrl: "/images/TourItenaries.jpg",
    description: "Custom tour itineraries for unforgettable experiences.",
    images: ["/images/Giraffe-Centre-Nairobi.jpg", "/images/A_cave_at_Oloolua_Nature_Trail_Nairobi_Kenya.jpg", "/images/nairobi-national-park.jpeg", "/images/KarenBlixen-removebg-preview.png", "/images/Giraffe.jpeg"],
  },
  {
    id: 4,
    title: "Flight Assistance",
    thumbnailUrl: "/images/Suitcase.jpg",
    description: "Travel disruptions? We’ve got you covered — from flight delays and lost baggage to urgent accommodation needs. Travel confidently knowing expert help is just a call away.",
    images: ["/images/ChatGPT Image Jul 17, 2025, 04_36_37 PM.png"],
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4" id="services">
      {services.map((service) => (
        <div
          key={service.id}
          className="cursor-pointer relative"
          onClick={() => openModal(service)}
        >
          <div className="relative w-full h-48 sm:h-60">
            <Image
              src={service.thumbnailUrl}
              alt={service.title}
              fill
              className="rounded-lg shadow-md object-cover hover:scale-105 transition"
            />

            {/* Title Overlay */}
            <div className="absolute bottom-3 right-3 bg-cream bg-opacity-70 text-green1 text-sm sm:text-lg px-2 sm:px-3 py-1 rounded-md">
              <h3 className="font-semibold">{service.title}</h3>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} packageData={selectedService} />
    </div>
  );
};

export default Services;
