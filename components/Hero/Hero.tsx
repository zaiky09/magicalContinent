import React from "react";
import Video from "./Video";
import { HeroText } from "./HeroText";

export const Hero = () => {
  return (
    <section className="relative">
      <Video />
      {/* Overlay: vertically centered, left-aligned text via flex (robust at every size) */}
      <div className="absolute inset-0 flex items-center px-[5%]">
        <HeroText />
      </div>
    </section>
  );
};
