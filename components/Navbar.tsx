"use client";
import { NAV_LINKS } from "../constants/index";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/images/7-removebg-preview.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="absolute top-0 left-0 z-30 w-full">
      <div className="w-full flexBetween max-container padding-container z-30 py-2 lg:py-5">
        <Link href="/">
          <Image
            className="lg:w-[120px] h-auto w-[60px]"
            src={logo.src}
            alt="logo"
            width="150"
            height="143"
          />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-white flexCenter [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)] cursor-pointer transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        {/* Hamburger menu for small devices */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <i
            className={`bx bx-menu text-2xl transition-all duration-300 ${
              open ? "bx-x" : ""
            }`}></i>
        </div>

      </div>

      {/* Mobile menu */}
      <ul
        className={
          "absolute top-20 left-0 flex flex-col gap-5 p-3 w-full bg-white lg:hidden" +
          (open ? " flex" : " hidden")
        }
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
