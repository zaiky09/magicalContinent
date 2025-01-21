import React from "react";
// import Buffalo from "../../public/images/Buffalo.jpg";
import Lion from "../../public/images/LionElephants.jpg";
import Leo from "../../public/images/Lion.jpg";
import Giraffe from "../../public/images/Giraffe3.jpg";
import Image from "next/image";

const Gallery = () => {
  return (
    <section
      // id="about_us"
      className="relative flex max-container padding-container items-center py-10 mb-10"
    >
      <div className="flex justify-between w-full relative h-[400px]">
        {/* First Image */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded-3xl border-2 border-green1"
            src={Giraffe.src}
            alt="Giraffes"
            width={400}
            height={1200}
          />
        </div>

        {/* Second Image */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded-3xl border-2 border-green1"
            src={Leo.src}
            alt="Lion"
            width={400}
            height={1200}
          />
        </div>

        {/* Third Image */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded-3xl border-2 border-green1"
            src={Lion.src}
            alt="Lioness"
            width={400}
            height={1200}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
