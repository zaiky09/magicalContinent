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
            Embark on a journey of unparalleled customer excellence, backed by
            over 20 years of expertise in delivering exceptional service
            experiences. We guarantee a journey that will leave you with
            lasting, nostalgic memories.
          </p>
          <p className="text-lg text-green1 leading-relaxed">
            Experience the difference firsthand—because some moments are simply
            unforgettable. With our commitment to quality and our seasoned
            expertise, we ensure every moment is crafted to perfection.
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
