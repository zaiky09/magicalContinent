"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const accommodationPackages = [
  { id: 1, continent: "Africa", image: "/images/AfricaService.png", description: "Luxurious lodges and safari stays." },
  { id: 2, continent: "Europe", image: "/images/EuropeService.png", description: "Elegant hotels with a touch of history." },
  { id: 3, continent: "Asia", image: "/images/AsiaService.png", description: "Modern and traditional stays." },
  { id: 4, continent: "America", image: "/images/AmericaService.png", description: "From city hotels to beach resorts." },
];

const packageDetails = {
  Africa: [
    { id: 1, image: "/images/africa1.jpg" },
    { id: 2, image: "/images/africa2.jpg" },
    { id: 3, image: "/images/africa3.jpg" },
  ],
  Europe: [
    { id: 1, image: "/images/europe1.jpg" },
    { id: 2, image: "/images/europe2.jpg" },
    { id: 3, image: "/images/europe3.jpg" },
  ],
  Asia: [
    { id: 1, image: "/images/PIC1.jpeg" },
    { id: 2, image: "/images/PIC2.jpeg" },
    { id: 3, image: "/images/PIC3.jpeg" },
    { id: 4, image: "/images/PIC4.jpeg" },
    { id: 5, image: "/images/PIC5.jpeg" },
    { id: 6, image: "/images/PIC6.jpeg" },
  ],
  America: [
    { id: 1, image: "/images/america1.jpg" },
    { id: 2, image: "/images/america2.jpg" },
    { id: 3, image: "/images/america3.jpg" },
  ],
};

// Define a type for the valid keys of packageDetails
type Continent = keyof typeof packageDetails;

interface SubService {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  subServices?: SubService[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Hospitality",
    description: "Experience world-class hospitality services.",
    icon: "/images/Concierge.jpg",
    subServices: [
      {
        id: 101,
        title: "Accommodation/Hotel Booking",
        description: "Find the perfect stay for your journey.",
        icon: "/images/HotelBooking.jpg",
      },
      {
        id: 102,
        title: "Hotel Shuttle",
        description: "Reliable shuttle services to and from your hotel.",
        icon: "/images/Shuttle.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Executive Car Services",
    description:
      "Magical Continent Ltd offers premium executive car services tailored for discerning travelers. With a fleet of luxurious vehicles, professional chauffeurs, and seamless travel experiences, we ensure comfort, reliability, and sophistication for all your transportation needs.",
    icon: "/images/ExecutiveCar.jpg",
  },
  {
    id: 3,
    title: "Ticket Booking",
    description:
      "Magical Continent Ltd simplifies your travel planning with hassle-free ticket booking services. Whether for flights, trains, or other transportation, we ensure seamless reservations at competitive rates.",
    icon: "/images/Ticket2.jpg",
  },
  {
    id: 4,
    title: "Tour Itineraries",
    description:
      "Magical Continent Ltd crafts personalized tour itineraries to make your travel experiences unforgettable.",
    icon: "/images/TourItenaries.jpg",
  },
  {
    id: 5,
    title: "Ease of Entry",
    description:
      "Magical Continent Ltd streamlines your travel with our Ease of Entry services.",
    icon: "/images/EaseOfEntry.jpg",
  },
  {
    id: 6,
    title: "Ease of Relocation",
    description:
      "Magical Continent Ltd makes relocation effortless with our comprehensive Ease of Relocation services.",
    icon: "/images/EaseOfRelocation.jpg",
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);
  const [selectedAccommodation, setSelectedAccommodation] = useState<Continent | null>(null);
  const [focusedImage, setFocusedImage] = useState<string | null>(null);
  // const router = useRouter();

  const ImageModal: React.FC<{ imageUrl: string | null; onClose: () => void }> = ({ imageUrl, onClose }) => {
    if (!imageUrl) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
        <div className="relative max-w-2xl max-h-full p-4">
          <Image
            src={imageUrl}
            alt="Focused image"
            width={800} // Adjust as needed
            height={600} // Adjust as needed
            className="object-contain rounded-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors"
          >
            &times;
          </button>
        </div>
      </div>
    );
  };
  

  return (
    <motion.section
      id="services"
      className="relative flex flex-col items-center py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-white to-cream rounded-3xl shadow-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl font-extrabold text-green1 mb-6"
        >
          Our Services
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-lg text-green1 mb-10 max-w-2xl mx-auto"
        >
          Discover a wide range of services designed to make your journey seamless and stress-free.
        </motion.p>

        <AnimatePresence mode="wait">
          {selectedAccommodation ? (
            <motion.div
              key="accommodation-details"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-6"
            >
              <h4 className="text-lg font-semibold text-green1 mb-4">
                {selectedAccommodation} Accommodation Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {packageDetails[selectedAccommodation].map((detail) => (
                  <div
                    key={detail.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <div
                      className="relative h-96 cursor-pointer" // Larger height for all continents
                      onClick={() => setFocusedImage(detail.image)} // Set the focused image
                    >
                      <Image
                        src={detail.image}
                        alt={`${selectedAccommodation} accommodation`}
                        fill
                        className="object-cover rounded-t-lg"
                        priority
                      />
                    </div>
                    {/* <div className="p-4">
                      <button
                        onClick={() => router.push("/contact")} // Redirect to contact page
                        className="bg-gold text-white px-4 py-2 rounded-lg hover:bg-green1 transition-colors duration-300"
                      >
                        Get in Touch
                      </button>
                    </div> */}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setSelectedAccommodation(null)}
                className="bg-gold text-white px-5 py-2 rounded-lg hover:bg-green1 transition-colors duration-300 mt-6"
              >
                Back to Packages
              </button>
            </motion.div>
          ) : selectedSubService ? (
            <motion.div
              key="selected-sub-service"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 md:p-8 w-full max-w-xl mx-auto"
            >
              <h3 className="text-xl font-semibold text-green1 mb-4">
                {selectedSubService.title}
              </h3>
              <p className="text-green1">{selectedSubService.description}</p>

              {selectedSubService.id === 101 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-green1 mb-4">Accommodation Packages</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                    {accommodationPackages.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedAccommodation(pkg.continent as Continent)}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
                      >
                        <div className="relative w-full h-32">
                          <Image
                            src={pkg.image}
                            alt={pkg.continent}
                            fill
                            className="object-cover rounded-t-lg"
                            priority
                          />
                        </div>
                        <div className="p-4">
                          <h5 className="text-md font-semibold text-green1 mb-1">
                            {pkg.continent}
                          </h5>
                          <p className="text-sm text-green1">{pkg.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                  onClick={() => setSelectedSubService(null)}
                  className="bg-gold text-white px-5 py-2 rounded-lg hover:bg-green1 transition-colors duration-300 mt-6"
                >
                  Back
              </button>
            </motion.div>
              ) : selectedService ? (
            <motion.div
              key="selected-service"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 md:p-8 w-full max-w-xl mx-auto"
            >
              <h3 className="text-xl font-semibold text-green1 mb-4">
                {selectedService.title}
              </h3>
              <p className="text-green1">{selectedService.description}</p>

              {selectedService.subServices && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedService.subServices.map((subService) => (
                    <div
                      key={subService.id}
                      onClick={() => setSelectedSubService(subService)}
                      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      <div className="relative w-full h-32">
                        <Image
                          src={subService.icon}
                          alt={subService.title}
                          fill
                          className="object-cover rounded-t-lg"
                          priority
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-md font-semibold text-green1 mb-1">
                          {subService.title}
                        </h4>
                        <p className="text-sm text-green1">{subService.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button
                onClick={() => setSelectedService(null)}
                className="bg-gold text-white px-5 py-2 rounded-lg hover:bg-green1 transition-colors duration-300 mt-6"
              >
                Back to Services
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="services-grid"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeInUp}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
                >
                  <div className="relative w-full h-44">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-cover rounded-t-lg"
                      priority={service.id <= 4}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-green1 mb-2">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
          {focusedImage && (
            <ImageModal
              imageUrl={focusedImage}
              onClose={() => setFocusedImage(null)} // Close the modal
            />
          )}
      </div>
    </motion.section>
  );
};

export default Services;