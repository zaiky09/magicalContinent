"use client"; // Mark this component as a Client Component

import React from "react";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Path to the icon image
}

const services: Service[] = [
  { id: 1, title: "Concierge Services", description: "We help you handle your visa needs effortlessly.", icon: "/images/Concierge.jpg" },
  { id: 2, title: "Executive Car Services", description: "Comprehensive travel insurance solutions.", icon: "/images/ExecutiveCar.jpg" },
  { id: 3, title: "Ticket Booking", description: "Organize exciting and meaningful team events.", icon: "/images/Ticket.jpg" },
  { id: 4, title: "Accommodation/Hotel Booking", description: "Audio-visual solutions for conferences.", icon: "/images/HotelBooking.jpg" },
  { id: 5, title: "Hotel Shuttle", description: "Seamless group travel management.", icon: "/images/Shuttle.jpg" },
  { id: 6, title: "Tour Itenaries", description: "Hassle-free air ticket booking.", icon: "/images/TourItenaries.jpg" },
  { id: 7, title: "Ease of Entry", description: "Find and book top-tier hotels.", icon: "/images/EaseOfEntry.jpg" },
  { id: 8, title: "Ease of Relocation", description: "Explore the best destinations with us.", icon: "/images/EaseOfRelocation.jpg" },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover a wide range of services designed to make your journey seamless and stress-free.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-t-lg"
                  priority={service.id <= 4} // Prioritize loading above-the-fold images
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;