"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Phone } from "lucide-react"; // ✅ Added Phone icon
import Image from "next/image";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    title: string;
    description: string;
    images: { src: string; caption?: string }[];
  } | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // ✅ Memoized navigation functions
  const goNext = useCallback(() => {
    if (service && lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % service.images.length : 0
      );
    }
  }, [service, lightboxIndex]);

  const goPrev = useCallback(() => {
    if (service && lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null
          ? (prev - 1 + service.images.length) % service.images.length
          : 0
      );
    }
  }, [service, lightboxIndex]);

  // ✅ Keyboard navigation (ESC, arrows)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          onClose();
        }
      }
      if (e.key === "ArrowRight" && lightboxIndex !== null) goNext();
      if (e.key === "ArrowLeft" && lightboxIndex !== null) goPrev();
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, lightboxIndex, goNext, goPrev]);

  // ✅ Mobile swipe detection
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      if (lightboxIndex !== null) {
        if (touchStartX - touchEndX > 50) goNext(); // swipe left
        if (touchEndX - touchStartX > 50) goPrev(); // swipe right
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev, lightboxIndex]);

  if (!isOpen || !service) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* ✅ Main Modal Container */}
        <motion.div
          className="relative w-[95%] max-w-6xl h-[90%] bg-white rounded-2xl shadow-2xl overflow-y-auto p-6 md:p-10"
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* ✅ Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
          >
            <X className="text-white w-5 h-5" />
          </button>

          {/* ✅ Title & Description */}
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-green1">{service.title}</h2>
            <p className="text-green1 mt-3 max-w-2xl">{service.description}</p>
          </div>

          {/* ✅ Pinterest-style image grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {service.images.map((img, index) => (
              <motion.div
                key={index}
                className="break-inside-avoid overflow-hidden rounded-lg shadow-md hover:shadow-xl transition group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={img.src}
                  alt={img.caption || `Service image ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-500"
                />
                {img.caption && (
                  <div className="p-2 bg-white">
                    <p className="text-sm text-green1 italic group-hover:text-white transition">
                      {img.caption}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* ✅ Read Full Details (future-proof for landing page) */}
          <div className="text-center mt-8 space-y-4">
            <button className="text-green1 font-semibold hover:underline">
              Read Full Details →
            </button>

            {/* ✅ Call Now Button */}
            <a
              href="tel:+254732861973"
              className="inline-flex items-center gap-2 px-5 py-3 bg-green1 text-cream font-bold rounded-full shadow-md hover:bg-green-700 transition"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>

        {/* ✅ Lightbox View */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* ✅ Close Lightbox */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              >
                <X className="text-white w-6 h-6" />
              </button>

              {/* ✅ Left / Right Navigation */}
              <button
                onClick={goPrev}
                className="absolute left-4 md:left-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              >
                <ChevronLeft className="text-white w-6 h-6" />
              </button>

              <button
                onClick={goNext}
                className="absolute right-4 md:right-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              >
                <ChevronRight className="text-white w-6 h-6" />
              </button>

              {/* ✅ Zoomed Image */}
              <div className="max-w-5xl w-[90%] h-[80%] relative">
                <Image
                  src={service.images[lightboxIndex].src}
                  alt={service.images[lightboxIndex].caption || "Zoomed image"}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>

              {/* ✅ Caption under lightbox image */}
              {service.images[lightboxIndex].caption && (
                <p className="absolute bottom-6 text-white text-lg italic text-center px-4">
                  {service.images[lightboxIndex].caption}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;
