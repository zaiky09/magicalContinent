import React, { useState, useEffect } from "react";
import Image from "next/image";
// import Link from "next/link";
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

  useEffect(() => {
    setCurrentIndex(0);
  }, [packageData]);

  if (!isOpen || !packageData) return null;

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === packageData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? packageData.images.length - 1 : prevIndex - 1
    );
  };

  const handleCallNowClick = () => {
    onClose(); // Close the modal first
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 300); // Delay for smooth transition
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-2">
      <div className="relative w-full max-w-lg">
        {/* Image Display with Adjusted Height */}
        <div className="relative w-full h-[80vh] md:h-[500px] lg:h-[600px]">
          <Image 
            src={packageData.images[currentIndex]} 
            alt={packageData.title} 
            layout="fill" 
            objectFit="contain" 
            className="rounded-lg"
          />

          {/* Close Button (Overlayed on Image) */}
          <button
            className="absolute top-3 right-3 bg-black bg-opacity-50 text-white p-2 rounded-full"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          {/* Navigation Buttons Overlay */}
          {packageData.images.length > 1 && (
            <>
              <button 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
                onClick={prevImage}
              >
                ◀
              </button>
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
                onClick={nextImage}
              >
                ▶
              </button>
            </>
          )}
        </div>

        {/* Call Now Button */}
        <div className="flex justify-center p-4">
          <button onClick={handleCallNowClick}>
            <Button type="button" title="Call Now" variant="btn_light_lime" width="w-auto"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
