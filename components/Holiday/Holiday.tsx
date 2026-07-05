"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Modal from "./Modal";

export type HolidayPackage = {
  id: number;
  title: string;
  region: string;
  teaser: string;
  thumbnailUrl: string;
  images: string[];
};

const holidayPackages: HolidayPackage[] = [
  {
    id: 1,
    title: "Kenya",
    region: "Africa",
    teaser: "Big-cat safaris, the Maasai Mara & white-sand coast.",
    thumbnailUrl: "/images/MaasaiMara.jpg",
    images: ["/images/MagicalContinentFlyer.png"],
  },
  {
    id: 2,
    title: "Egypt",
    region: "Africa",
    teaser: "Ancient pyramids, Nile cruises & timeless wonders.",
    thumbnailUrl: "/images/EgyptThumb.jpg",
    images: ["/images/Egypt1.jpeg", "/images/Egypt2.jpeg", "/images/Egypt3.jpeg"],
  },
  {
    id: 4,
    title: "Namibia",
    region: "Africa",
    teaser: "Towering dunes, desert wildlife & endless horizons.",
    thumbnailUrl: "/images/NamibiaThumb.jpg",
    images: ["/images/Namibia1.jpeg", "/images/Namibia2.jpeg", "/images/Namibia3.jpeg"],
  },
  {
    id: 5,
    title: "Malaysia",
    region: "Asia",
    teaser: "Rainforests, island escapes & vibrant city life.",
    thumbnailUrl: "/images/MalaysiaThumb.jpg",
    images: ["/images/Malaysia1.jpeg", "/images/Malaysia2.jpeg", "/images/Malaysia3.jpeg"],
  },
  {
    id: 6,
    title: "Singapore",
    region: "Asia",
    teaser: "A dazzling garden city of food, lights & culture.",
    thumbnailUrl: "/images/SingaporeThumb.jpg",
    images: ["/images/Singapore1.jpeg", "/images/Singapore2.jpeg", "/images/Singapore3.jpeg"],
  },
  {
    id: 8,
    title: "Europe",
    region: "Europe",
    teaser: "Iconic cities, rich history & scenic escapes.",
    thumbnailUrl: "/images/EuropeThumb.jpg",
    images: ["/images/London1.jpeg", "/images/Italy1.jpeg"],
  },
];

const HolidayPackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<HolidayPackage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pkg: HolidayPackage) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <section className="bg-cream/40 py-16 px-6 md:px-12" id="holiday">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">
            Where would you like to go?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-green1">
            Curated <span className="text-gold">Holiday Packages</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-green1/80">
            Handpicked destinations across Africa, Asia and Europe. Tap any getaway
            to explore it — then we&apos;ll tailor the trip around you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {holidayPackages.map((pkg, index) => (
            <motion.button
              key={pkg.id}
              type="button"
              onClick={() => openModal(pkg)}
              aria-label={`Explore ${pkg.title}`}
              className="group relative h-72 w-full overflow-hidden rounded-2xl text-left shadow-md transition focus:outline-none focus:ring-2 focus:ring-gold"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <Image
                src={pkg.thumbnailUrl}
                alt={pkg.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-green1/90 via-green1/25 to-transparent" />

              {/* Region badge */}
              <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold text-green1">
                <MapPin className="h-3.5 w-3.5" />
                {pkg.region}
              </span>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                <h3 className="text-2xl font-bold drop-shadow">{pkg.title}</h3>
                <p className="mt-1 text-sm text-cream/90">{pkg.teaser}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} packageData={selectedPackage} />
    </section>
  );
};

export default HolidayPackages;
