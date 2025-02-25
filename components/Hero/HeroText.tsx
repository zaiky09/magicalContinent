"use client";

import React, { useLayoutEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import Link from "next/link";

export const HeroText = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);

  useLayoutEffect(() => {
    let ticking = false;

    const updateScrollDirection = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollDirection(window.scrollY > lastScrollY.current ? "down" : "up");
          lastScrollY.current = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: scrollDirection === "down" ? 50 : -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: scrollDirection === "down" ? 50 : -50 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute top-[25%] left-[5%] w-11/12 max-w-[600px] md:w-4/5 lg:w-3/5 xl:w-1/2 bg-cream/35 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
        Excellent <span className="text-green1">Travel Services</span> with Ease.
      </h1>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green1 leading-relaxed mb-4 sm:mb-6">
        Experience seamless and luxurious travel arrangements designed just for you.
      </p>

      <Link href="#contact">
        <Button type="button" title="Call Now" variant="btn_light_lime" width="w-auto" />
      </Link>
</motion.div>

  );
};
