import React from "react";
import Button from "../Button";
import Link from "next/link";

export const HeroText = () => {
  return (
    <div className="absolute top-1/3 left-[5%] w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 bg-cream/35 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
        Excellent{" "}
        <span className="text-green1">Travel Services</span>{" "}
        with Ease.
      </h1>
      
      {/* Subheading (Optional) */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green1 leading-relaxed mb-4 sm:mb-6">
        Experience seamless and luxurious travel arrangements designed just for you.
      </p>

      {/* Call-to-Action Button */}
      <Link href="#contact">
        <Button
          type="button"
          title="Call Now"
          variant="btn_light_lime"
          width="w-auto"
        />
      </Link>
    </div>
  );
};