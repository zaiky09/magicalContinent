"use client";

import React, { useEffect, useRef } from "react";
import Flying from "../../public/images/Flying.jpg";
import Travel from "../../public/images/Travel.jpg";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    // Animation for the text section (reduced fade effect)
    gsap.from(textRef.current, {
      opacity: 0.9, // Reduced fade effect
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animation for the first image
    gsap.from(imageRef1.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      scrollTrigger: {
        trigger: imageRef1.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animation for the second image
    gsap.from(imageRef2.current, {
      opacity: 0,
      x: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: imageRef2.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Parallax effect for the section
    gsap.from(sectionRef.current, {
      y: 50,
      opacity: 2.9,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="about_us"
      ref={sectionRef}
      className="relative flex items-center py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-cream to-white rounded-3xl shadow-xl overflow-hidden"
    >
      {/* Container for the text and images */}
      <div className="flex flex-col lg:flex-row items-center w-full space-y-12 lg:space-y-0 lg:space-x-12">
        {/* About Text Section */}
        <div ref={textRef} className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl font-extrabold text-green1 tracking-tight leading-tight">
            About Us
          </h2>
          <p className="text-lg text-green1 leading-relaxed">
            At Magical Continent Ltd, we are more than just a travel company—we are curators of extraordinary experiences. We pride ourselves with staff that have 20 years of expertise in the travel and hospitality industry, we have mastered the art of delivering seamless, luxurious, and unforgettable journeys across Africa and beyond.
          </p>
          <p className="text-lg text-green1 leading-relaxed">
            Our two decades of experience have allowed us to build a deep understanding of global and regional travel trends, ensuring that every itinerary we craft is both immersive and meticulously planned. From elite concierge services to tailor-made itineraries, we go beyond conventional travel to offer personalized experiences that reflect your unique preferences.
          </p>
          <p className="text-lg text-green1 leading-relaxed">
            At the heart of Magical Continent Ltd is a commitment to excellence, reliability, and customer satisfaction. Whether it’s business travel, leisure getaways, or exclusive luxury retreats, we bring you the best in hospitality, convenience, and comfort.

            Let our 20 years of expertise be your guide to effortless travel. With us, every journey is not just a trip—it’s an experience of a lifetime.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center gap-6">
          {/* First Image */}
          <div ref={imageRef1} className="relative group transform hover:scale-105 transition-all duration-300">
            <Image
              className="rounded-2xl shadow-lg"
              src={Flying.src}
              alt="Flying"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity"></div>
          </div>
          {/* Second Image */}
          <div ref={imageRef2} className="relative group transform hover:scale-105 transition-all duration-300">
            <Image
              className="rounded-2xl shadow-lg"
              src={Travel.src}
              alt="Travel"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;