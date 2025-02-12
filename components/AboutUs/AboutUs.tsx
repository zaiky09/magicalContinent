import React from "react";
import Flying from "../../public/images/Flying.jpg";
import Travel from "../../public/images/Travel.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about_us"
      className="relative flex items-center py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-cream to-white rounded-3xl shadow-xl"
    >
      {/* Container for the text and images */}
      <div className="flex flex-col lg:flex-row items-center w-full space-y-12 lg:space-y-0 lg:space-x-12">
        {/* About Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
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
          {/* <button className="px-6 py-3 mt-4 bg-gold text-white text-lg font-medium rounded-lg shadow-md hover:bg-green1 transition-all">
            Learn More
          </button> */}
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center gap-6">
          {/* First Image */}
          <div className="relative group transform hover:scale-105 transition-all duration-300">
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
          <div className="relative group transform hover:scale-105 transition-all duration-300">
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
