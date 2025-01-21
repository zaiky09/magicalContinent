import React from "react";
import Flying from "../../public/images/Flying.jpg";
import Travel from "../../public/images/Travel.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about_us"
      className="relative flex max-container padding-container items-center py-20 mb-0 rounded-lg"
    >
      {/* Container for the text and images */}
      <div className="flex flex-col items-center w-full space-y-8 bg-cream rounded-3xl">

        {/* About Text Section (Centered) */}
        <div className="text-center p-6 space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">About Us</h2>
          <p className="text-lg text-black-800">
            Embark on a journey of unparalleled customer excellence, backed by over 20 years of expertise in delivering exceptional service experiences. We guarantee a journey that will leave you with lasting, nostalgic memories.
          </p>
          <p className="text-lg text-black-800">
            Experience the difference firsthand—because some moments are simply unforgettable. With our commitment to quality and our seasoned expertise, we ensure every moment is crafted to perfection.
          </p>
        </div>

        {/* Image Section (Placed below the text) */}
        <div className="flex flex-wrap justify-center gap-4 w-full relative h-auto">
          {/* First Image */}
          <div className="relative">
            <Image
              className="rounded-xl shadow-lg mb-10 border-2 border-white "
              src={Flying.src}
              alt="Flying"
              width={400}
              height={400}
            />
          </div>
          {/* Second Image */}
          <div className="relative">
            <Image
              className="rounded-xl shadow-lg border-2 bg-white"
              src={Travel.src}
              alt="Travel"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
