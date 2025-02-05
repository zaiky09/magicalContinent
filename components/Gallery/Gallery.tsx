"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
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

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    Gorillas,
    VictoriaFalls,
    Crane,
    Baloons,
    Amsterdam,
    Seychelles,
    Buffalo,
    LionCubs,
    Dikdik,
    Egypt1,
    Giraffe3,
    SouthAfrica,
    Madagascar,  
    Desert,
    Meercats
    
  ];

  const nextImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  const prevImages = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? images.length - 3 : prevIndex - 3
    );
  };

  return (
    <section className="relative flex flex-wrap justify-center items-center py-5 sm:py-10 mb-10">
      {/* Left Arrow */}
      <button
        onClick={prevImages}
        aria-label="Previous Images"
        className="absolute left-0 z-10 bg-white p-7 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform -translate-x-1/2"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <span className="text-2xl">&larr;</span>
      </button>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center gap-4 w-full relative h-auto">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              className="rounded-3xl border-2 border-white object-cover w-full sm:w-[300px] md:w-[400px] lg:w-[500px] transition-all duration-500 ease-in-out transform hover:scale-105"
              src={image}
              alt={`Image ${currentIndex + index + 1}`}
              width={500}
              height={400}
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextImages}
        aria-label="Next Images"
        className="absolute right-0 z-10 bg-white p-7 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform translate-x-1/2"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <span className="text-2xl">&rarr;</span>
      </button>
    </section>
  );
};

export default Gallery;
