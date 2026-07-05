"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import Link from "next/link";

export const HeroText = () => {
  const handleCallNowClick = () => {
    window.location.href = "tel:+254732861973";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-[600px] md:max-w-[600px] lg:max-w-[640px] bg-cream/35 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
        Excellent <span className="text-green1">Travel Services</span> with Ease.
      </h1>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green1 leading-relaxed mb-4 sm:mb-6">
        Experience seamless and luxurious travel arrangements designed just for you.
      </p>

      <div className="flex gap-4">
        <Button type="button" title="Call Now" onClick={handleCallNowClick} />
        <Link href="#holiday">
          <Button type="button" title="View Packages" />
        </Link>
      </div>
    </motion.div>
  );
};
