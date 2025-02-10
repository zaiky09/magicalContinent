import React from "react";
import logo from "../public/images/7-removebg-preview.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-cream text-green1 padding-container py-4 lg:py-10 w-[100vw] flex justify-center">
      <div className="max-container flex flex-col lg:flex-row items-center lg:items-start w-full justify-between space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Logo and Copyright Section */}
        <div className="flex flex-col items-center lg:items-start">
          <Link href="/" className="flex justify-center">
            <Image
              className="lg:w-[120px] h-auto w-[60px] mb-4 lg:mb-6"
              src={logo.src}
              alt="logo"
              width="150"
              height="143"
            />
          </Link>
          <p className="text-sm text-center lg:text-left">
            Copyright © 2025 Magical Continent Ltd. All Rights Reserved.
          </p>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="uppercase text-lg mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a className="text-sm hover:text-[#7F9492]" href="#about_us">
                About Us
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-[#7F9492]" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-[#7F9492]" href="#services">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="uppercase text-lg mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="#">
              <i className="bx bxl-facebook-square text-2xl hover:text-[#7F9492]"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram text-2xl hover:text-[#7F9492]"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin-square text-2xl hover:text-[#7F9492]"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;