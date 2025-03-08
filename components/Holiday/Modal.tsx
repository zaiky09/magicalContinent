import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageData: {
    title: string;
    description?: string; // ✅ Make description optional
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>X</button>

        {/* Image Display */}
        <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          <Image 
            src={packageData.images[currentIndex]} 
            alt={packageData.title} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />

          {/* Buttons Overlay */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
            <Link href="#contact">
              <Button type="button" title="Call Now" variant="btn_light_lime" width="w-auto"/>
            </Link>
          </div>

          {/* Navigation Buttons */}
          {packageData.images.length > 1 && (
            <>
              <button 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={prevImage}
              >
                ◀
              </button>
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={nextImage}
              >
                ▶
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
