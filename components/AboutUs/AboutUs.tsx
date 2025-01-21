import React from "react";
import Plane from "../../public/images/Plane.jpg";
import Customer from "../../public/images/customerExperience.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about_us"
      className="relative flex max-container padding-container items-center py-20 mb-0 rounded-lg"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Column: About Text */}
        <div className="md:w-1/2 space-y-6 text-center rounded-lg md:text-left p-6">
            <h2 className="text-4xl font-semibold text-black">About Us</h2>
            <p className="text-lg text-black-800">
            Embark on a journey of unparalleled customer excellence, backed by over 20 years of expertise in delivering exceptional service experiences. We guarantee a journey that will leave you with lasting, nostalgic memories.
            </p>
            <p className="text-lg text-black-800">
            Experience the difference firsthand—because some moments are simply unforgettable. With our commitment to quality and our seasoned expertise, we ensure every moment is crafted to perfection.
            </p>
        </div>

        {/* Right Column: Images */}
        <div className="md:w-1/2 flex space-x-6 justify-center">
            {/* First Image */}
            <div className="relative">
            <Image
                className="rounded-xl shadow-lg border-4 border-green1"
                src={Customer.src}
                alt="Customer"
                width={400}
                height={400}
            />
            </div>
            {/* Second Image */}
            <div className="relative">
            <Image
                className="rounded-xl shadow-lg border-4 border-black"
                src={Plane.src}
                alt="Plane"
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
