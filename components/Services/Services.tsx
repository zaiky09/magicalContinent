"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  { id: 1, title: "Concierge Services", description: "At Magical Continent Ltd, we offer personalized concierge services designed to make your travels seamless and stress-free. From visa assistance and itinerary planning to exclusive local experiences, our dedicated team ensures every detail of your journey is handled with care. Whether you need last-minute reservations, transportation arrangements, or insider recommendations, we’re here to provide tailored solutions that elevate your travel experience.", icon: "/images/Concierge.jpg" },
  { id: 2, title: "Executive Car Services", description: "Magical Continent Ltd offers premium executive car services tailored for discerning travelers. With a fleet of luxurious vehicles, professional chauffeurs, and seamless travel experiences, we ensure comfort, reliability, and sophistication for all your transportation needs.", icon: "/images/ExecutiveCar.jpg" },
  { id: 3, title: "Ticket Booking", description: "Magical Continent Ltd simplifies your travel planning with hassle-free ticket booking services. Whether for flights, trains, or other transportation, we ensure seamless reservations at competitive rates.", icon: "/images/Ticket2.jpg" },
  { id: 4, title: "Accommodation/Hotel Booking", description: "Magical Continent Ltd takes the stress out of finding the perfect stay with our tailored accommodation and hotel booking services.", icon: "/images/HotelBooking.jpg" },
  { id: 5, title: "Hotel Shuttle", description: "Magical Continent Ltd offers reliable and convenient hotel shuttle services to ensure seamless transfers during your travels.", icon: "/images/Shuttle.jpg" },
  { id: 6, title: "Tour Itineraries", description: "Magical Continent Ltd crafts personalized tour itineraries to make your travel experiences unforgettable.", icon: "/images/TourItenaries.jpg" },
  { id: 7, title: "Ease of Entry", description: "Magical Continent Ltd streamlines your travel with our Ease of Entry services.", icon: "/images/EaseOfEntry.jpg" },
  { id: 8, title: "Ease of Relocation", description: "Magical Continent Ltd makes relocation effortless with our comprehensive Ease of Relocation services.", icon: "/images/EaseOfRelocation.jpg" },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleBackClick = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="relative flex flex-col items-center py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-white to-cream rounded-3xl shadow-xl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green1 mb-6">Our Services</h2>
        <p className="text-lg text-green1 mb-10 max-w-2xl mx-auto">
          Discover a wide range of services designed to make your journey seamless and stress-free.
        </p>

        {/* Selected Service Details */}
        {selectedService ? (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 md:p-8 w-full max-w-xl mx-auto">
            <div className="relative w-full h-52 md:h-60 mb-6">
              <Image
                src={selectedService.icon}
                alt={selectedService.title}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 40vw"
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-green1 mb-4">{selectedService.title}</h3>
            <p className="text-green1 leading-relaxed mb-6">{selectedService.description}</p>
            <button
              onClick={handleBackClick}
              className="bg-gold text-white px-5 py-2 rounded-lg hover:bg-green1 transition-colors duration-300"
            >
              Back to Services
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative w-full h-44">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-t-lg"
                    priority={service.id <= 4}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green1 mb-2">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
