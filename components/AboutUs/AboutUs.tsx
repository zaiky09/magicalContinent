"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Flying from "../../public/images/Flying.jpg";
import Travel from "../../public/images/Travel.jpg"; 

// Define the transition effect for fade-in with slight movement
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const AboutUs = () => {
  return (
    <motion.section
      id="about_us"
      className="relative flex items-center py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-cream to-white rounded-3xl shadow-xl overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Triggers when the section comes into view
    >
      <div className="flex flex-col lg:flex-row items-center w-full space-y-12 lg:space-y-0 lg:space-x-12">
        {/* About Text Section with animation */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left space-y-6"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-extrabold text-green1 tracking-tight leading-tight">
            About Us
          </h2>
          <p className="text-lg text-green1 leading-relaxed">
            At Magical Continent Ltd, we are more than just a travel company—we are curators of extraordinary experiences. We pride ourselves with staff that have 20 years of expertise in the travel and hospitality industry, we have mastered the art of delivering seamless, luxurious, and unforgettable journeys across Africa and beyond.
          </p>
          <p className="text-lg text-green1 leading-relaxed">
            Our staff with over two decades of experience have allowed us to build a deep understanding of global and regional travel trends, ensuring that every itinerary we craft is both immersive and meticulously planned. From elite concierge services to tailor-made itineraries, we go beyond conventional travel to offer personalized experiences that reflect your unique preferences.
          </p>
          <p className="text-lg text-green1 leading-relaxed">
            At the heart of Magical Continent Ltd is a commitment to excellence, reliability, and customer satisfaction. Whether it’s business travel, leisure getaways, or exclusive luxury retreats, we bring you the best in hospitality, convenience, and comfort.
          </p>
        </motion.div>

        {/* Image Section with animation */}
        <motion.div
          className="lg:w-1/2 flex justify-center gap-6"
          variants={fadeInUp}
        >
          {/* First Image */}
          <div className="relative group transform hover:scale-105 transition-all duration-300">
            <Image
              className="rounded-2xl shadow-lg"
              src={Flying}
              alt="Flying"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity"></div>
          </div>
          {/* Second Image */}
          <div className="relative group transform hover:scale-105 transition-all duration-300">
            <Image
              className="rounded-2xl shadow-lg"
              src={Travel}
              alt="Travel"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
