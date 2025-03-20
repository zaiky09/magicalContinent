"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

const holidayPackages = [
  {
    id: 1,
    title: "Madagascar",
    thumbnailUrl: "/images/MadagascarThumb.jpg",
    images: ["/images/Madagascar1.jpeg", "/images/Madagascar2.jpeg"],
  },
  {
    id: 2,
    title: "Egypt",
    thumbnailUrl: "/images/EgyptThumb.jpg",
    images: ["/images/Egypt1.jpeg", "/images/Egypt2.jpeg", "/images/Egypt3.jpeg"],
  },
  {
    id: 4,
    title: "Namibia",
    thumbnailUrl: "/images/NamibiaThumb.jpg",
    images: ["/images/Namibia1.jpeg", "/images/Namibia2.jpeg", "/images/Namibia3.jpeg"],
  },
  {
    id: 5,
    title: "Malaysia",
    thumbnailUrl: "/images/MalaysiaThumb.jpg",
    images: ["/images/Malaysia1.jpeg", "/images/Malaysia2.jpeg", "/images/Malaysia3.jpeg"],
  },
  {
    id: 6,
    title: "Singapore",
    thumbnailUrl: "/images/SingaporeThumb.jpg",
    images: ["/images/Singapore1.jpeg", "/images/Singapore2.jpeg", "/images/Singapore3.jpeg"],
  },
  {
    id: 7,
    title: "Dubai",
    thumbnailUrl: "/images/DubaiThumb.jpg",
    images: ["/images/Dubai1.jpeg", "/images/Dubai2.jpeg", "/images/Dubai3.jpeg", "/images/Dubai4.jpeg"],
  },
  {
    id: 8,
    title: "Europe",
    thumbnailUrl: "/images/EuropeThumb.jpg",
    images: ["/images/Europe1.jpeg", "/images/London1.jpeg", "/images/London2.jpeg", "/images/Paris1.jpeg", "/images/Spain1.jpeg", "/images/Amsterdam1.jpeg", "/images/Italy1.jpeg", "/images/Switzerland1.jpeg"],
  },
];

const HolidayPackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<{
    title: string;
    description?: string;
    images: string[];
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pkg: { title: string; description?: string; images: string[] }) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4" id="holiday">
      {holidayPackages.map((pkg) => (
        <div
          key={pkg.id}
          className="cursor-pointer relative"
          onClick={() => openModal(pkg)}
        >
          <div className="relative w-full h-48 sm:h-60">
            <Image
              src={pkg.thumbnailUrl}
              alt={pkg.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-md hover:scale-105 transition"
            />

            {/* Title Overlay */}
            <div className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white text-sm sm:text-lg px-2 sm:px-3 py-1 rounded-md">
              <h3 className="font-semibold">{pkg.title}</h3>
            </div>

            {/* Image Count Overlay */}
            <div className="absolute bottom-3 left-3 bg-gray-900 bg-opacity-70 text-white text-xs sm:text-sm px-2 py-1 rounded-md">
              {pkg.images.length} {pkg.images.length === 1 ? "image" : "packages"}
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} packageData={selectedPackage} />
    </div>
  );
};

export default HolidayPackages;
