"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Path to the icon image
}

const services: Service[] = [
  { id: 1, title: "Concierge Services", description: "At Magical Continent Ltd, we offer personalized concierge services designed to make your travels seamless and stress-free. From visa assistance and itinerary planning to exclusive local experiences, our dedicated team ensures every detail of your journey is handled with care. Whether you need last-minute reservations, transportation arrangements, or insider recommendations, we’re here to provide tailored solutions that elevate your travel experience. Let us take care of the details, so you can focus on enjoying your adventure.", icon: "/images/Concierge.jpg" },
  { id: 2, title: "Executive Car Services", description: "Magical Continent Ltd offers premium executive car services tailored for discerning travelers. With a fleet of luxurious vehicles, professional chauffeurs, and seamless travel experiences, we ensure comfort, reliability, and sophistication for all your transportation needs. Whether for airport transfers, business meetings, or leisure travel, we deliver excellence and style, making your journey truly unforgettable.", icon: "/images/ExecutiveCar.jpg" },
  { id: 3, title: "Ticket Booking", description: "Magical Continent Ltd simplifies your travel planning with hassle-free ticket booking services. Whether for flights, trains, or other transportation, we ensure seamless reservations at competitive rates. Our dedicated team handles every detail, saving you time and ensuring a smooth journey to your destination. Travel with ease and confidence with Magical Continent Ltd.", icon: "/images/Ticketing.jpg" },
  { id: 4, title: "Accommodation/Hotel Booking", description: "Magical Continent Ltd takes the stress out of finding the perfect stay with our tailored accommodation and hotel booking services. Whether you're traveling for business or leisure, we secure premium stays that match your preferences and budget. From luxurious hotels to cozy retreats, we ensure comfort, convenience, and exceptional experiences for every journey.", icon: "/images/HotelBooking.jpg" },
  { id: 5, title: "Hotel Shuttle", description: "Magical Continent Ltd offers reliable and convenient hotel shuttle services to ensure seamless transfers during your travels. Whether it's airport pickups, drop-offs, or local transport, our comfortable and punctual shuttles make getting around effortless. Experience stress-free travel with our professional and customer-focused shuttle solutions.", icon: "/images/Shuttle.jpg" },
  { id: 6, title: "Tour Itineraries", description: "Magical Continent Ltd crafts personalized tour itineraries to make your travel experiences unforgettable. From must-see landmarks to hidden gems, we design every detail to suit your interests and schedule. Whether for adventure, relaxation, or cultural exploration, our expertly curated itineraries ensure a seamless and enriching journey.", icon: "/images/TourItenaries.jpg" },
  { id: 7, title: "Ease of Entry", description: "Magical Continent Ltd streamlines your travel with our Ease of Entry services. We handle visa assistance, documentation, and entry requirements to ensure a hassle-free arrival at your destination. With our expert support, you can navigate border procedures smoothly, saving time and eliminating stress.", icon: "/images/EaseOfEntry.jpg" },
  { id: 8, title: "Ease of Relocation", description: "Magical Continent Ltd makes relocation effortless with our comprehensive Ease of Relocation services. From visa processing and housing arrangements to logistics and local integration support, we ensure a smooth transition to your new destination. Let us handle the details while you focus on settling in with ease and confidence.", icon: "/images/EaseOfRelocation.jpg" },
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
    <section id="services" className="relative flex items-center py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white to-cream rounded-3xl shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover a wide range of services designed to make your journey seamless and stress-free.
        </p>

        {/* Display Services Grid or Selected Service Details */}
        {selectedService ? (
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-8 text-center">
            <div className="relative h-48 w-full mx-auto mb-6">
              <Image
                src={selectedService.icon}
                alt={selectedService.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{selectedService.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{selectedService.description}</p>
            <button
              onClick={handleBackClick}
              className="bg-gold text-white px-6 py-2 rounded-lg hover:bg-green1 transition-colors duration-300"
            >
              Back to Services
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
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
                  {/* <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p> */}
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