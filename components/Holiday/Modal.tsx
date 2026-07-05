import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Button from "../Button";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageData: {
    title: string;
    description?: string;
    images: string[];
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, packageData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = !!packageData && packageData.images.length > 0;

  useEffect(() => {
    setCurrentIndex(0);
  }, [packageData]);

  const nextImage = useCallback(() => {
    if (!packageData) return;
    setCurrentIndex((prev) =>
      prev === packageData.images.length - 1 ? 0 : prev + 1
    );
  }, [packageData]);

  const prevImage = useCallback(() => {
    if (!packageData) return;
    setCurrentIndex((prev) =>
      prev === 0 ? packageData.images.length - 1 : prev - 1
    );
  }, [packageData]);

  // Keyboard navigation + ESC to close, and lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose, nextImage, prevImage]);

  if (!isOpen || !packageData || !hasImages) return null;

  const handleCallNowClick = () => {
    window.location.href = "tel:+254732861973";
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-2"
      role="dialog"
      aria-modal="true"
      aria-label={`${packageData.title} holiday package`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-cream rounded-lg overflow-hidden shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full">
          <Image
            src={packageData.images[currentIndex]}
            alt={`${packageData.title} — image ${currentIndex + 1} of ${packageData.images.length}`}
            width={800}
            height={500}
            className="w-full h-auto mx-auto rounded-md object-contain"
          />

          <button
            className="absolute top-3 right-3 bg-black bg-opacity-50 text-white p-2 rounded-full"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {packageData.images.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
                onClick={prevImage}
                aria-label="Previous image"
              >
                ◀
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
                onClick={nextImage}
                aria-label="Next image"
              >
                ▶
              </button>
            </>
          )}
        </div>

        <div className="p-4 text-center">
          {packageData.description && (
            <p className="text-green1 mb-4">{packageData.description}</p>
          )}

          <Button type="button" title="Call Now" onClick={handleCallNowClick} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
