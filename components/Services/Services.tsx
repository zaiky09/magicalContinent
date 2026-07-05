"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  Globe2,
  Plane,
  Check,
  Phone,
  MessageCircle,
  Clock,
  Ticket,
  BadgePercent,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

// Lazy-load the modal (used by the secondary services) to keep initial load light.
const ServiceModal = dynamic(() => import("./ServiceModal"), { ssr: false });

const WHATSAPP_NUMBER = "254714837324";
const PHONE_NUMBER = "+254732861973";

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// ---- Primary offering: Ticketing, split by audience ------------------------
type TicketingTrack = {
  audience: string;
  icon: LucideIcon;
  image: string;
  tagline: string;
  benefits: string[];
  ctaLabel: string;
  waText: string;
};

const ticketingTracks: TicketingTrack[] = [
  {
    audience: "International Travellers",
    icon: Globe2,
    image: "/images/FlyingTicketing.jpg",
    tagline: "Flying into or out of Kenya? We handle the whole journey.",
    benefits: [
      "International & long-haul flight bookings",
      "Multi-city and round-the-world fares",
      "Group & family reservations",
      "Flexible-date, best-fare search",
      "Entry guidance & airport meet-and-assist",
    ],
    ctaLabel: "Request an international quote",
    waText:
      "Hello Magical Continent! I'd like a quote for an international flight ticket.",
  },
  {
    audience: "Local Travellers",
    icon: Plane,
    image: "/images/SGR1.png",
    tagline: "Travelling within Kenya and the region? Book in minutes.",
    benefits: [
      "Domestic flights (JKIA & Wilson)",
      "SGR train tickets (Nairobi–Mombasa)",
      "Regional East Africa flights",
      "Corporate, student & group fares",
      "Pay conveniently via M-Pesa or card",
    ],
    ctaLabel: "Book a local ticket",
    waText:
      "Hello Magical Continent! I'd like to book a local flight / SGR train ticket.",
  },
];

const trustSignals: { icon: LucideIcon; label: string }[] = [
  { icon: Clock, label: "24/7 support" },
  { icon: Ticket, label: "Instant e-tickets" },
  { icon: BadgePercent, label: "Best-fare search" },
  { icon: ShieldCheck, label: "Secure M-Pesa & card payment" },
];

// ---- Secondary services (retain the image-gallery modal) -------------------
const secondaryServices = [
  {
    id: 2,
    title: "Tours & Safaris",
    thumbnailUrl: "/images/SafariJeep.jpg",
    description: "Custom tour itineraries for unforgettable experiences.",
    images: [
      { src: "/images/Antelope.jpeg", caption: "Casual stroll in the city, Nairobi National Park." },
      { src: "/images/Giraffe-Centre-Nairobi.jpg", caption: "Meet the gentle giants at Giraffe Centre." },
      { src: "/images/MagicalContinentFlyer.png", caption: "Your gateway to magical adventures." },
      { src: "/images/nairobi-national-park.jpeg", caption: "Wildlife just outside the city." },
      { src: "/images/Hippos.jpeg", caption: "Hippos taking a dip away from the sun, Nairobi." },
      { src: "/images/KarenBlixen-removebg-preview.png", caption: "Step into Karen Blixen’s world." },
      { src: "/images/Babboons.jpeg", caption: "The road is Baboons." },
      { src: "/images/SheldrickTrust.jpg", caption: "Witness baby elephants being cared for." },
      { src: "/images/Giraffe.jpeg", caption: "Safari sunsets & iconic giraffe silhouettes." },
      { src: "/images/NanyukiRhinos.jpg", caption: "Rhinos in Nanyuki, Laikipia County." },
      { src: "/images/MaasaiMara.jpg", caption: "Wildebeest Migration, Maasai Mara." },
      { src: "/images/OlTukai.jpg", caption: "Safari and Lodge at Ol Tukai, Amboseli." },
    ],
  },
  {
    id: 3,
    title: "Flight Assistance",
    thumbnailUrl: "/images/ServiceStaff.jpg",
    description:
      "Travel disruptions? We’ve got you covered — from flight delays and lost baggage to urgent accommodation needs. Travel confidently knowing expert help is just a call away.",
    images: [
      {
        src: "/images/ChatGPT Image Jul 17, 2025, 04_36_37 PM.png",
        caption: "Seamless assistance for stress-free travel.",
      },
    ],
  },
];

type SecondaryService = (typeof secondaryServices)[number];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<SecondaryService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: SecondaryService) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12" id="services">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">
            What we do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-green1">
            Flight &amp; Travel <span className="text-gold">Ticketing</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-green1/80">
            Whether you&apos;re flying in from abroad or travelling across Kenya, we
            find the best fares and issue your tickets — quickly, securely and with
            expert support every step of the way.
          </p>
        </div>

        {/* Ticketing tracks — foreigners vs locals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ticketingTracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.audience}
                className="flex flex-col rounded-2xl border border-green1/10 bg-white shadow-sm overflow-hidden transition hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Image band with audience label */}
                <div className="relative h-44 w-full">
                  <Image
                    src={track.image}
                    alt={track.audience}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green1/90 via-green1/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-3 text-cream">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/90 text-green1">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-bold drop-shadow">{track.audience}</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-green1/80 mb-4">{track.tagline}</p>
                  <ul className="space-y-2.5 mb-6">
                    {track.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-green1">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs pinned to the bottom for equal-height cards */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <a
                      href={waLink(track.waText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-green1 px-5 py-3 font-semibold text-cream transition hover:bg-green-700"
                    >
                      <MessageCircle className="h-5 w-5" />
                      {track.ctaLabel}
                    </a>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-green1/30 px-5 py-3 font-semibold text-green1 transition hover:bg-cream"
                    >
                      <Phone className="h-5 w-5" />
                      Call
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust signals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-xl bg-cream/60 py-4 px-6">
          {trustSignals.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-green1">
              <Icon className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Secondary services */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-green1 mb-8">
            More ways we help
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {secondaryServices.map((service, index) => (
              <motion.button
                key={service.id}
                type="button"
                onClick={() => openModal(service)}
                aria-label={`View more about ${service.title}`}
                className="group relative flex items-center gap-4 rounded-xl border border-green1/10 bg-white p-4 text-left shadow-sm transition hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={service.thumbnailUrl}
                    alt={service.title}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-green1">{service.title}</h4>
                  <p className="mt-1 line-clamp-2 text-sm text-green1/75">
                    {service.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-gold">
                    View more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Image-gallery modal for the secondary services */}
      <ServiceModal isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
    </section>
  );
};

export default Services;
