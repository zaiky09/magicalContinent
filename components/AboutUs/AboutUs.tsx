import React from "react";
import Lion from "../../public/images/LionElephants.jpg";
import Giraffe from "../../public/images/Giraffe.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about_us"
      className="relative flex max-container padding-container items-center py-10 mb-10"
    >
      <div className="flex h-[400px]">
        <div className="flex absolute left-[-80px] top-[-16px] 2xl:top-[-60px] lg:top-[-20px] md:top-[-80px] md:left-0">
          <Image
            className="rounded-3xl border-2 border-white"
            src={Lion.src}
            alt="img"
            width={400}
            height={1200}
          />
        </div>
        <div className="flex absolute z-[-1] left-1/3 right-[-40px] top-[80px] h-5/6 2xl:top-[-120px] lg:top-[-60px] lg:h-[120%] lg:z-0">
          <Image
            className="rounded-3xl border-2 border-white"
            src={Giraffe.src}
            alt="img"
            width={400}
            height={1200}
          />
        </div>
      </div>
      <div className="p-4 bg-cream rounded-3xl m-4 left-1/4 absolute xl:top-[80px] xl:left-2/3">
      <h2 className="text-3xl font-bold text-center text-black-800 mb-6">
          About Us
        </h2>
        <p className="regular-14 xl:regular-16 text-center">
        Embark on a journey of unparalleled customer excellence, backed by over 20 years of expertise in delivering exceptional service experiences. We guarantee a journey that will leave you with lasting, nostalgic memories.

Experience the difference firsthand—because some moments are simply unforgettable.

With our commitment to quality and our seasoned expertise, we ensure every moment is crafted to perfection, leaving you with memories that stand the test of time.

We are the heartbeat of your journey, guiding you to exceptional experiences every step of the way.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
