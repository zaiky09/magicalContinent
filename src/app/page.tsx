import AboutUs from "../../components/AboutUs/AboutUs";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";
import { Hero } from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import AirBnb from "../../components/Hero/AirBnb";
import RotatingBanner from "../../components/Hero/RotatingBanner";
import HolidayPackages from "../../components/Holiday/Holiday";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <RotatingBanner />
      <Services />
      <HolidayPackages />
      <AirBnb />
      <AboutUs />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
