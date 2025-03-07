"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const accommodationPackages = [
  { id: 1, continent: "Africa", image: "/images/AfricaService.png", description: "Luxurious lodges and safari stays." },
  { id: 2, continent: "Europe", image: "/images/EuropeService.png", description: "Elegant hotels with a touch of history." },
  { id: 3, continent: "Asia", image: "/images/AsiaService.png", description: "Modern and traditional stays." },
  { id: 4, continent: "America", image: "/images/AmericaService.png", description: "From city hotels to beach resorts." },
];

const packageDetails = {
  Africa: [
    { id: 1, image: "/images/africa1.jpg"},
    { id: 2, image: "/images/africa2.jpg"},
    { id: 3, image: "/images/africa3.jpg"},
  ],
  Europe: [
    { id: 1, image: "/images/europe1.jpg"},
    { id: 2, image: "/images/europe2.jpg"},
    { id: 3, image: "/images/europe3.jpg"},
  ],
  Asia: [
    { id: 1, image: "/images/PIC1.jpeg"},
    { id: 2, image: "/images/PIC2.jpeg"},
    { id: 3, image: "/images/PIC3.jpeg"},
    { id: 4, image: "/images/PIC4.jpeg"},
    { id: 5, image: "/images/PIC5.jpeg"},
    { id: 6, image: "/images/PIC6.jpeg"},
  ],
  America: [
    { id: 1, image: "/images/america1.jpg"},
    { id: 2, image: "/images/america2.jpg"},
    { id: 3, image: "/images/america3.jpg"},
  ],
};

const Accommodation = () => {
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 1;

  const prevImages = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? packageDetails[selectedContinent as keyof typeof packageDetails].length - 1 : prevIndex - 1
    );
  };

  const nextImages = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === packageDetails[selectedContinent as keyof typeof packageDetails].length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.section className="relative flex flex-col items-center py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-white to-cream rounded-3xl shadow-xl">
      <motion.h2 className="text-3xl sm:text-4xl font-extrabold text-green1 mb-6">
        Accommodation Packages
      </motion.h2>
      <motion.p className="text-lg text-green1 mb-10 max-w-2xl mx-auto">
        Explore accommodation options across different continents.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {accommodationPackages.map((packageItem) => (
          <motion.div
            key={packageItem.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
            onClick={() => setSelectedContinent(packageItem.continent)}
          >
            <div className="relative w-full h-44">
              <Image src={packageItem.image} alt={packageItem.continent} fill className="object-cover rounded-t-lg" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green1 mb-2">{packageItem.continent}</h3>
              <p className="text-green1">{packageItem.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedContinent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl relative">
            <button
              className="absolute top-3 right-3 text-lg text-red-500 hover:text-red-700"
              onClick={() => setSelectedContinent(null)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-green1 mb-4 capitalize">
              {selectedContinent} Accommodation
            </h2>

            <div className="flex flex-wrap justify-center gap-4 w-full px-4">
              <AnimatePresence mode="wait">
                {packageDetails[selectedContinent as keyof typeof packageDetails]
                  .slice(currentIndex, currentIndex + visibleImages)
                  .map((image, index) => (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="flex flex-col items-center"
                    >
                      <Image
                        className="rounded-2xl border-2 border-white object-cover w-[90vw] sm:w-[300px] md:w-[400px] lg:w-[500px] transition-transform duration-500 hover:scale-105"
                        src={image.image}
                        alt=""
                        width={500}
                        height={400}
                        priority
                      />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>

            <div className="flex justify-between mt-4">
              <button onClick={prevImages} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition">
                Previous
              </button>
              <button onClick={nextImages} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition">
                Next
              </button>
            </div>

            <button
              onClick={() => setSelectedContinent(null)}
              className="mt-4 px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition w-full"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Accommodation;
