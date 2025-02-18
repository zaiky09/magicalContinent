"use client"

import React, { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ContactUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // GSAP animations for the section
  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }

    if (headerRef.current) {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.5, // Reduce duration for faster transitions
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
      
    }

    if (contactInfoRef.current) {
      gsap.from(contactInfoRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }

    if (mapRef.current) {
      gsap.from(mapRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.7,
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-12 px-6 lg:px-20"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2
          ref={headerRef}
          className="text-4xl font-extrabold text-center text-green1 mb-4"
        >
          Contact Us
        </h2>
        <p className="text-center text-green1 mb-12">
          Feel free to reach out to us for inquiries or assistance!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div
            ref={contactInfoRef}
            className="bg-cream shadow-md rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-green1 mb-4">
              Get in Touch
            </h3>
            <p className="text-green1 mb-6">
              We would love to hear from you! Contact us via any of the channels
              below:
            </p>
            <ul className="space-y-4">
              {/* Phone Number */}
              <li className="flex items-center">
                <i className="bx bx-phone text-green1 text-2xl mr-4"></i>
                <a
                  href="tel:+254714837324"
                  className="text-green1 hover:text-[#7F9492] transition-colors"
                >
                  +254 732-861973
                </a>
              </li>

              {/* Email Address */}
              <li className="flex items-center">
                <i className="bx bx-envelope text-green1 text-2xl mr-4"></i>
                <a
                  href="mailto:magicalcontinentltd@outlook.com"
                  className="text-green1 hover:text-[#7F9492] transition-colors"
                >
                  magicalcontinentltd@outlook.com
                </a>
              </li>

              {/* Address */}
              <li className="flex items-center">
                <i className="bx bx-map text-green1 text-2xl mr-4"></i>
                <span className="text-green1">
                  Kirichwa Gardens Road, Nairobi, Kenya
                </span>
              </li>
            </ul>

            {/* WhatsApp Chat Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/254714837324?text=Hello!%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white flex items-center justify-center px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                <FaWhatsapp className="mr-2" size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            ref={mapRef}
            className="bg-white shadow-md rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-green1 mb-4">
              Our Location
            </h3>
            <p className="text-green1 mb-6">
              Find us at our office or contact us for more details.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.19164414426!2d36.77627532582244!3d-1.2922792237227505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a52a1cbd07d%3A0x794f3b7c1b8f9c38!2sKirichwa%20Gardens%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1692211510117!5m2!1sen!2ske"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" // This ensures the iframe is lazy-loaded
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;