import React, { useState, useEffect } from "react";
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
    window.location.href = 'tel:+254732861973';
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-2">
      <div className="relative w-full max-w-lg bg-cream rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full">
          <Image
            src={packageData.images[currentIndex]}
            alt={packageData.title}
            width={800}      // max width for desktop
            height={500}     // controls aspect ratio
            className="w-full h-auto mx-auto rounded-md object-contain"
          />


          <button
            className="absolute top-3 right-3 bg-black bg-opacity-50 text-white p-2 rounded-full"
            onClick={onClose}
          >
            <X size={24} />
          </button>

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

        <div className="p-4 text-center">
          {/* <h2 className="text-2xl font-bold text-green1 mb-2">{packageData.title}</h2> */}
          {packageData.description && (
            <p className="text-green1 mb-4">{packageData.description}</p>
          )}

          <Button 
            type="button" 
            title="Call Now" 
            variant="btn_light_lime" 
            width="w-auto"
            onClick={handleCallNowClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
