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
  Giraffe3,
  VictoriaFalls,
  Crane,
  Baloons,
  Amsterdam,
  Seychelles,
  Buffalo,
  LionCubs,
  Dikdik,
  Egypt1,
  Gorillas,
  SouthAfrica,
  Madagascar,
  Desert,
  Meercats,
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(1); // Mobile: Show 1 image
      } else if (window.innerWidth < 1024) {
        setVisibleImages(2); // Tablet: Show 2 images
      } else {
        setVisibleImages(3); // Desktop: Show 3 images
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

  // Swipe Gesture Support for Mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
  
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };
  
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].clientX;
      if (touchStartX - touchEndX > 50) {
        nextImages();
      } else if (touchEndX - touchStartX > 50) {
        prevImages();
      }
    };
  
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
  
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextImages, prevImages]);

  return (
    <section className="relative flex flex-col items-center py-5 sm:py-10">
      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center gap-4 w-full px-4">
        {images.slice(currentIndex, currentIndex + visibleImages).map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              className="rounded-2xl border-2 border-white object-cover w-[90vw] sm:w-[300px] md:w-[400px] lg:w-[500px] transition-transform duration-500 hover:scale-105"
              src={image}
              alt={`Gallery Image ${currentIndex + index + 1}`}
              width={500}
              height={400}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
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
