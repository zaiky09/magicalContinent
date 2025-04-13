"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
// import { useRouter } from "next/navigation";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const accommodationPackages = [
  { id: 1, continent: "Africa", image: "/images/AfricaService.png", description: "Luxurious lodges and safari stays." },
  { id: 2, continent: "Europe", image: "/images/EuropeService.png", description: "Elegant hotels with a touch of history." },
  { id: 3, continent: "Asia", image: "/images/AsiaService.png", description: "Modern and traditional stays." },
  { id: 4, continent: "USA", image: "/images/AmericaService.png", description: "From city hotels to beach resorts." },
  { id: 5, continent: "Middle_East", image: "/images/MiddleEast.png", description: "Habibi! Come to Dubai." },
];

const packageDetails = {
  Africa: [
    { id: 1, image: "/images/Egypt1.jpeg" },
    { id: 2, image: "/images/Egypt2.jpeg" },
    { id: 3, image: "/images/Egypt3.jpeg" },
    { id: 4, image: "/images/Namibia1.jpeg" },
    { id: 5, image: "/images/Namibia2.jpeg" },
    { id: 6, image: "/images/Namibia3.jpeg" },
    // { id: 7, image: "/images/SA-Eid.jpeg" },
    { id: 8, image: "/images/Madagascar1.jpeg" },
    { id: 9, image: "/images/Madagascar2.jpeg" },
  ],
  Europe: [
    { id: 1, image: "/images/London1.jpeg" },
    // { id: 2, image: "/images/London2.jpeg" },
    // { id: 3, image: "/images/Paris1.jpeg" },
    { id: 4, image: "/images/Italy1.jpeg" },
    // { id: 5, image: "/images/Switzerland1.jpeg" },
    // { id: 6, image: "/images/Amsterdam1.jpeg" },
    { id: 7, image: "/images/Spain1.jpeg" },
    // { id: 8, image: "/images/Europe1.jpeg" },
  ],
  Asia: [
    { id: 1, image: "/images/Malaysia1.jpeg" },
    { id: 2, image: "/images/Malaysia2.jpeg" },
    { id: 3, image: "/images/Malaysia3.jpeg" },
    { id: 4, image: "/images/Singapore1.jpeg" },
    { id: 5, image: "/images/Singapore2.jpeg" },
    { id: 6, image: "/images/Singapore3.jpeg" },
  ],
  USA: [
    // { id: 1, image: "/images/america1.jpg" },
    // { id: 2, image: "/images/america2.jpg" },
    // { id: 3, image: "/images/america3.jpg" },
  ],
  Middle_East: [
    // { id: 1, image: "/images/Dubai1.jpeg" },
    // { id: 2, image: "/images/Dubai2.jpeg" },
    // { id: 3, image: "/images/Dubai3.jpeg" },
    // { id: 4, image: "/images/Dubai4.jpeg" },
  ],
};

// Define a type for the valid keys of packageDetails
type Continent = keyof typeof packageDetails;

interface SubService {
  id: number;
  title: string;
  description: string;
  icon: string;
  rate?: string;
  images?: string[];
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
    title: "Looking for Accommodation?",
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
        title: "Camping",
        description: "Escape to nature with our hassle-free camping service—premium gear, scenic spots, and unforgettable adventures, all set up for you!",
        icon: "/images/Camping.jpg",
      },
      {
        id: 103,
        title: "Disrupted Flight?",
        description: "Our Flight Disruption Assistance service ensures you're never stranded. In the event of delays, cancellations, or missed connections, we provide immediate support including rebooking options, accommodation arrangements, meal vouchers, and real-time updates—so your journey continues smoothly with minimal stress.",
        icon: "/images/FlightDisruption.jpg",
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
    subServices: [
      {
        id: 401,
        title: "Nairobi",
        description: "Experience the vibrant beauty of Nairobi with unforgettable adventures. Let us curate a full day of exploration, taking you to iconic destinations of your choice. Our package includes transportation only. Park entry fees are to be covered by guests.",
        icon: "/images/KWS.jpg",
        rate: "From $30 per person",
        images: [
          "/images/GiraffeCentre.png",
          "/images/SheldrickTrust.jpg",
          "/images/NationalPark.jpg",
          "/images/KarenBlixen.jpg",
        ],
      },
      
    ],
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
  {
    id: 7,
    title: "Baggage Assistance",
    description:
      "Magical Continent Ltd provides solutions for baggage disruptions and baggage storage.",
    icon: "/images/Suitcase.jpg",
    subServices: [
      {
        id: 701,
        title: "Baggage Disruption",
        description: "Minimize delays, maximize efficiency. Our smart tracking and recovery system ensures lost or delayed baggage is swiftly located and delivered, enhancing passenger experience and operational reliability.",
        icon: "/images/Baggage.jpg",
        rate: "From $50 per bag"
      },
      {
        id: 702,
        title: "Baggage Storage",
        description: "Secure, convenient, and hassle-free. Our flexible storage options ensure your luggage is safe while you travel, explore, or wait, giving you peace of mind on the go.",
        icon: "/images/Storage.jpg",
        rate: "From $10 per bag (24hrs)"
      },
      {
        id: 703,
        title: "Land & Leave",
        description: "Tailored for VIP and elite travelers seeking to avoid the hassle of baggage retrieval. Our specialized team, positioned within the luggage collection area, retrieves bags directly from the conveyor belt, enabling passengers to move smoothly through immigration and customs without interruption. The baggage is then either entrusted to assigned chauffeurs or transported to the passenger’s desired destination for ultimate convenience.",
        icon: "/images/LandAndLeave.jpg",
        rate: "From $100 per person"
      },
    ],
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
                    <div className="flex gap-4 justify-center">
                      <Link href="#contact">
                        
                          <Button type="button" title="Call Now" variant="btn_light_lime" width="w-auto" ></Button>
                        
                      </Link>
                    </div>
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
              <h1 className="text-lg text-green-50"><strong>{selectedSubService.rate}</strong></h1>
              <div className="flex gap-4 justify-center">
                  <Link href="#contact">
                      
                        <Button type="button" title="Call Now" variant="btn_light_lime" width="w-auto" />
                      
                  </Link>
              </div>
              

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
              {selectedSubService.id === 401 && selectedSubService.images && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedSubService.images.map((img, index) => (
                    <div 
                      key={index} 
                      className="relative h-40 w-full sm:h-48 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Image 
                        src={img} 
                        alt={`Nairobi image ${index + 1}`} 
                        fill 
                        className="object-contain rounded-lg"
                      />
                    </div>
                  ))}
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
              <div className="flex gap-4 justify-center">
                  <Link href="#contact">
                      
                        <Button type="button" title="Call Now" variant="btn_light_lime" width="w-auto" />
                      
                  </Link>
              </div>

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
                        <p className="text-sm text-green-50">{subService.rate}</p>

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