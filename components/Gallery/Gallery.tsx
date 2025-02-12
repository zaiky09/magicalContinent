"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Madagascar from "../../public/images/Madagascar.jpg";
import Amsterdam from "../../public/images/Amsterdam.jpg";
import Baloons from "../../public/images/airBaloons.jpg";
import Giraffe3 from "../../public/images/Giraffe3.jpg";
import Seychelles from "../../public/images/Seychelles.jpg";
import Egypt1 from "../../public/images/Egypt1.jpg";
import SouthAfrica from "../../public/images/SouthAfrica.jpg";
import LionCubs from "../../public/images/LionCubs.jpg";
import Buffalo from "../../public/images/Buffalo.jpg";
import Meercats from "../../public/images/Meercats.jpg";
import Desert from "../../public/images/Desert.jpg";
import Crane from "../../public/images/Crane.jpg";
import Dikdik from "../../public/images/Dikdik.jpg";
import Gorillas from "../../public/images/Gorillas.jpg";
import VictoriaFalls from "../../public/images/VictoriaFalls.jpg";

const images = [
  { src: Giraffe3, description: "Giraffes roaming in the African Savannah" },
  { src: VictoriaFalls, description: "The majestic Victoria Falls: Zimbabwe" },
  { src: Crane, description: "A crowned crane in its natural habitat: Uganda" },
  { src: Baloons, description: "Hot air balloons: Turkey" },
  { src: Amsterdam, description: "The scenic canals of Amsterdam" },
  { src: Seychelles, description: "Pristine beaches of Seychelles" },
  { src: Buffalo, description: "A buffalo in the wild" },
  { src: LionCubs, description: "Playful lion cubs in the Serengeti" },
  { src: Dikdik, description: "A shy Dik-Dik antelope in the bush" },
  { src: Egypt1, description: "Ancient pyramids of Egypt" },
  { src: Gorillas, description: "Mountain gorillas in Rwanda" },
  { src: SouthAfrica, description: "Cape Town’s stunning coastline" },
  { src: Madagascar, description: "Lush forests of Madagascar" },
  { src: Desert, description: "Golden dunes of the Sahara Desert" },
  { src: Meercats, description: "A family of meerkats standing watch" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(1);
      } else if (window.innerWidth < 1024) {
        setVisibleImages(2);
      } else {
        setVisibleImages(3);
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  const nextImages = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleImages) % images.length);
  }, [visibleImages]);

  const prevImages = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - visibleImages < 0 ? images.length - visibleImages : prevIndex - visibleImages
    );
  }, [visibleImages]);

  return (
    <section className="relative flex flex-col items-center py-5 sm:py-10">
      <div className="flex flex-wrap justify-center gap-4 w-full px-4">
        {images.slice(currentIndex, currentIndex + visibleImages).map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              className="rounded-2xl border-2 border-white object-cover w-[90vw] sm:w-[300px] md:w-[400px] lg:w-[500px] transition-transform duration-500 hover:scale-105"
              src={image.src}
              alt={image.description}
              width={500}
              height={400}
            />
            <p className="text-center mt-2 text-sm text-gray-700">{image.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between w-full max-w-[600px] px-5 mt-5">
        <button
          onClick={prevImages}
          aria-label="Previous Images"
          className="bg-white p-4 rounded-full shadow-md hover:bg-gray-200 transition-all"
        >
          &larr;
        </button>
        <button
          onClick={nextImages}
          aria-label="Next Images"
          className="bg-white p-4 rounded-full shadow-md hover:bg-gray-200 transition-all"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Gallery;
