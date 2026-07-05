"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Madagascar from "../../public/images/Madagascar.jpg";
import Amsterdam from "../../public/images/Amsterdam.jpg";
import Baloons from "../../public/images/airBaloons.jpg";
import Giraffe3 from "../../public/images/Giraffe3.jpg";
import Seychelles from "../../public/images/Seychelles.jpg";
import EgyptGallery from "../../public/images/EgyptGallery.jpg";
import SouthAfrica from "../../public/images/SouthAfrica.jpg";
import LionCubs from "../../public/images/LionCubs.jpg";
import Buffalo from "../../public/images/Buffalo.jpg";
import Meercats from "../../public/images/Meercats.jpg";
import Desert from "../../public/images/Desert.jpg";
import Crane from "../../public/images/Crane.jpg";
import Dikdik from "../../public/images/Dikdik.jpg";
import Gorillas from "../../public/images/Gorillas.jpg";
import VictoriaFalls from "../../public/images/VictoriaFalls.jpg";

type GalleryImage = { src: StaticImageData; description: string };

const images: GalleryImage[] = [
  { src: Giraffe3, description: "Giraffes roaming in the African Savannah" },
  { src: VictoriaFalls, description: "The majestic Victoria Falls: Zimbabwe" },
  { src: Crane, description: "A crowned crane in its natural habitat: Uganda" },
  { src: Baloons, description: "Hot air balloons: Turkey" },
  { src: Amsterdam, description: "The scenic canals of Amsterdam" },
  { src: Seychelles, description: "Pristine beaches of Seychelles" },
  { src: Buffalo, description: "A buffalo in the wild" },
  { src: LionCubs, description: "Playful lion cubs in the Serengeti" },
  { src: Dikdik, description: "A shy Dik-Dik antelope in the bush" },
  { src: EgyptGallery, description: "Ancient pyramids of Egypt" },
  { src: Gorillas, description: "Mountain gorillas in Rwanda" },
  { src: SouthAfrica, description: "Cape Town’s stunning Table Mountain" },
  { src: Madagascar, description: "Lush forests of Madagascar" },
  { src: Desert, description: "Golden dunes of the Sahara Desert" },
  { src: Meercats, description: "A family of meerkats standing watch" },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  }, []);

  // Keyboard navigation + body-scroll lock while the lightbox is open.
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const active = lightboxIndex === null ? null : images[lightboxIndex];

  return (
    <section className="bg-white py-16 px-6 md:px-12" id="gallery">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">
            Explore the world with us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-green1">
            Moments from Our <span className="text-gold">Journeys</span>
          </h2>
        </div>

        {/* Masonry mosaic */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {images.map((image, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`View: ${image.description}`}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gold"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            >
              <Image
                src={image.src}
                alt={image.description}
                placeholder="blur"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay on hover */}
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-green1/80 via-green1/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="p-4 text-left text-sm font-medium text-cream">
                  {image.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
              className="absolute left-4 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 md:left-8"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
              className="absolute right-4 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 md:right-8"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <motion.figure
              key={lightboxIndex}
              className="relative flex max-h-[85vh] w-full max-w-4xl flex-col items-center"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.description}
                placeholder="blur"
                sizes="90vw"
                className="max-h-[78vh] w-auto rounded-lg object-contain"
              />
              <figcaption className="mt-3 text-center text-cream">
                {active.description}
                <span className="ml-2 text-cream/60">
                  {(lightboxIndex ?? 0) + 1} / {images.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
