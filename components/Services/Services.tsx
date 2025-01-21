import React from "react";

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
  { id: 4, title: "Hotel Booking", description: "Find the perfect stay effortlessly.", icon: "🏨" },
  { id: 5, title: "Hotel Shuttle", description: "Convenient and reliable hotel shuttles.", icon: "🚌" },
  { id: 6, title: "Tour Itineraries", description: "Customized itineraries for unforgettable trips.", icon: "🗺️" },
  { id: 7, title: "Ease of Entry", description: "Streamlined entry processes for your travel.", icon: "🛂" },
  { id: 8, title: "Ease of Relocation", description: "Seamless relocation solutions.", icon: "📦" },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-cream mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Our Services</h2>
        <p className="text-center text-gray-600 mt-2">Explore the wide range of services we offer to make your life easier.</p>

        {/* Grid Layout with 4 Columns and 2 Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {services.slice(0, 8).map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-black">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
