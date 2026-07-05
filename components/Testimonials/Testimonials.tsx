"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// NOTE: Placeholder reviews — replace with real client testimonials.
type Testimonial = {
  name: string;
  trip: string;
  rating: number;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Achieng' O.",
    trip: "Maasai Mara Safari",
    rating: 5,
    quote:
      "From the ticketing to the game drives, everything was seamless. They handled every detail so we could just enjoy the Mara. Unforgettable!",
  },
  {
    name: "James & Wanjiru",
    trip: "Honeymoon in Seychelles",
    rating: 5,
    quote:
      "They found us fares we couldn't get anywhere else and planned the perfect honeymoon. Professional, warm and always a message away.",
  },
  {
    name: "David M.",
    trip: "Business travel to Europe",
    rating: 5,
    quote:
      "Last-minute flight changes were sorted in minutes. Their 24/7 support genuinely saved my trip. I book all my travel through them now.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-green1 py-16 px-6 md:px-12" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">
            Loved by travellers
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-cream">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.name}
              className="flex flex-col rounded-2xl bg-cream p-6 shadow-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
              <div className="mt-3 flex" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-green1">{t.quote}</blockquote>
              <figcaption className="mt-4 border-t border-green1/10 pt-3">
                <span className="block font-semibold text-green1">{t.name}</span>
                <span className="text-sm text-green1/70">{t.trip}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
