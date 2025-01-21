import AboutUs from "../../components/AboutUs/AboutUs";
import Contact from "../../components/Contact/Contact";
import { Hero } from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
// import Gallery from "@/components/Gallery/Gallery";
// import HowWeWork from "@/components/HowWeWork/HowWeWork";
// import PricingCards from "@/components/PricingCards/PricingCards";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
    </>
  );
}
