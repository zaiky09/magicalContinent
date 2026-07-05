import React from "react";
import logo from "../public/images/7-removebg-preview.png";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#holiday", label: "Packages" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about_us", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-green1 text-cream padding-container py-10 flex flex-col items-center">
      <div className="max-container grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <Link href="/" aria-label="Magical Continent home">
            <Image
              className="mb-4 h-auto w-[80px] lg:w-[110px]"
              src={logo.src}
              alt="Magical Continent logo"
              width="150"
              height="143"
            />
          </Link>
          <p className="text-sm text-cream/80">
            Seamless, luxurious travel across Africa and beyond.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            Explore
          </h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="text-sm text-cream/85 hover:text-gold transition" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-cream/85">
            <li>
              <a className="hover:text-gold transition" href="tel:+254721772473">
                +254 721-772473
              </a>
            </li>
            <li>
              <a className="hover:text-gold transition" href="mailto:magicalcontinentltd@outlook.com">
                magicalcontinentltd@outlook.com
              </a>
            </li>
            <li>Kirichwa Gardens Road, Nairobi, Kenya</li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="bx bxl-facebook-square text-2xl hover:text-gold transition"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="bx bxl-instagram text-2xl hover:text-gold transition"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bx bxl-linkedin-square text-2xl hover:text-gold transition"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="max-container mt-10 w-full border-t border-cream/15 pt-6 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Magical Continent Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
