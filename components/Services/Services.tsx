"use client"; // Mark this component as a Client Component

import React, { useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Placeholder for icons or images
}

const services: Service[] = [
  { id: 1, title: "Concierge Services", description: "Tailored assistance for all your needs.", icon: "🛎️" },
  { id: 2, title: "Executive Car Services", description: "Luxury transportation for executives.", icon: "🚗" },
  { id: 3, title: "Ticket Booking", description: "Hassle-free ticket reservations.", icon: "🎫" },
  { id: 4, title: "Accomodation/Hotel Booking", description: "Find the perfect stay effortlessly.", icon: "🏨" },
  { id: 5, title: "Hotel Shuttle", description: "Convenient and reliable hotel shuttles.", icon: "🚌" },
  { id: 6, title: "Tour Itineraries", description: "Customized itineraries for unforgettable trips.", icon: "🗺️" },
  { id: 7, title: "Ease of Entry", description: "Streamlined entry processes for your travel.", icon: "🛂" },
  { id: 8, title: "Ease of Relocation", description: "Seamless relocation solutions.", icon: "📦" },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleBackClick = () => {
    setSelectedService(null);
  };

  const handleCallNowClick = () => {
    // Scroll to the contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative flex max-container padding-container items-center py-20 mb-0 rounded-3xl bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Our Services</h2>
        <p className="text-center text-gray-600 mt-2">Explore the wide range of services we offer to make your life easier.</p>

        {/* Display Services Grid or Selected Service Details */}
        {selectedService ? (
          <div className="mt-8 bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">{selectedService.icon}</div>
            <h3 className="text-xl font-semibold text-black">{selectedService.title}</h3>
            <p className="text-gray-600 mt-2">{selectedService.description}</p>
            <button
              onClick={handleCallNowClick}
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Call Now
            </button>
            <button
              onClick={handleBackClick}
              className="mt-4 ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
            >
              Back
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-black">{service.title}</h3>
                {/* <p className="text-gray-600 mt-2">{service.description}</p> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;