"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
// import ServiceModal from "./ServiceModal";

// ✅ Lazy-load the upgraded modal to keep initial load light
const ServiceModal = dynamic(() => import("./ServiceModal"), { ssr: false });

const services = [
  {
    id: 1,
    title: "Ticketing",
    thumbnailUrl: "/images/PlaneAtSunSet.jpg",
    description: "Hassle-free ticket booking for flights, trains, and more.",
    images: [
      {
        src: "/images/Ticket2.jpg",
        caption: "Effortless flight, train & bus ticketing."
      }
    ],
  },
  {
    id: 2,
    title: "Tours & Safaris",
    thumbnailUrl: "/images/SafariJeep.jpg",
    description: "Custom tour itineraries for unforgettable experiences.",
    images: [
      {
        src: "/images/Antelope.jpeg",
        caption: "Casual stroll in the city, Nairobi National Park."
      },
      {
        src: "/images/Giraffe-Centre-Nairobi.jpg",
        caption: "Meet the gentle giants at Giraffe Centre."
      },
      {
        src: "/images/MagicalContinentFlyer.png",
        caption: "Your gateway to magical adventures."
      },
      {
        src: "/images/nairobi-national-park.jpeg",
        caption: "Wildlife just outside the city."
      },
      {
        src: "/images/Hippos.jpeg",
        caption: "Hippos taking a dip away from the sun, Nairobi."
      },
      {
        src: "/images/KarenBlixen-removebg-preview.png",
        caption: "Step into Karen Blixen’s world."
      },
      {
        src: "/images/Babboons.jpeg",
        caption: "The road is Baboons."
      },
      {
        src: "/images/SheldrickTrust.jpg",
        caption: "Witness baby elephants being cared for."
      },
      {
        src: "/images/Giraffe.jpeg",
        caption: "Safari sunsets & iconic giraffe silhouettes."
      },
      {
        src: "/images/NanyukiRhinos.jpg",
        caption: "Rhinos in Nanyuki, Laikipia County."
      },
      {
        src: "/images/MaasaiMara.jpg",
        caption: "Wildebeast Migration, Maasai Mara."
      },
      {
        src: "/images/OlTukai.jpg",
        caption: "Safari and Lodge at Ol Tukai, Amboseli."
      }
    ],
  },
  {
    id: 3,
    title: "Flight Assistance",
    thumbnailUrl: "/images/ServiceStaff.jpg",
    description:
      "Travel disruptions? We’ve got you covered — from flight delays and lost baggage to urgent accommodation needs. Travel confidently knowing expert help is just a call away.",
    images: [
      {
        src: "/images/ChatGPT Image Jul 17, 2025, 04_36_37 PM.png",
        caption: "Seamless assistance for stress-free travel."
      }
    ],
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
    <div className="p-6 md:p-12 bg-white" id="services">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Our <span className="text-green1">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="cursor-pointer group relative rounded-xl shadow-lg overflow-hidden bg-gray-100 hover:shadow-2xl transition"
            onClick={() => openModal(service)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Image Container */}
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src={service.thumbnailUrl}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Title Overlay */}
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-lg sm:text-xl font-semibold drop-shadow-md">
                  {service.title}
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition">
                <p className="text-white font-semibold">View More →</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Upgraded Modal */}
      <ServiceModal isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
    </div>
  );
};

export default Services;
