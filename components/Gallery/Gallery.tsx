import React from "react";
import Image from "next/image";
import Lion from "../../public/images/LionElephants.jpg";
import Leo from "../../public/images/Lion.jpg";
import Giraffe from "../../public/images/Giraffe3.jpg";

const Gallery = () => {
  return (
    <section className="relative flex flex-wrap justify-center items-center py-5 sm:py-10 mb-10">
      <div className="flex flex-wrap justify-center gap-4 w-full relative h-auto">
        {/* First Image */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded-3xl border-2 border-white object-cover w-full sm:w-[300px] md:w-[400px]"
            src={Giraffe.src}
            alt="Giraffes"
            width={400}
            height={1200}
          />
        </div>

        {/* Second Image */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded-3xl border-2 border-white object-cover w-full sm:w-[300px] md:w-[400px]"
            src={Leo.src}
            alt="Lion"
            width={400}
            height={1200}
          />
        </div>

        {/* Third Image */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded-3xl border-2 border-white object-cover w-full sm:w-[300px] md:w-[400px]"
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
