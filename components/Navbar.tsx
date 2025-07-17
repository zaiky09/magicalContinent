"use client";

import { NAV_LINKS } from "../constants/index";
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import logo from "../public/images/7-removebg-preview.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY.current) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <nav
      className={`fixed top-0 left-0 z-30 w-full bg-green1 bg-opacity-40 backdrop-blur-sm transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
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
              className="regular-16 text-white flexCenter [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)] cursor-pointer transition-all hover:font-bold hover:btn_light_lime rounded-md"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:hidden" onClick={toggleMenu}>
          <i
            className={`bx bx-menu text-2xl text-white transition-all duration-300 ${
              open ? "bx-x" : ""
            }`}
          ></i>
        </div>
      </div>

      <ul
        className={
          "absolute top-20 left-0 flex flex-col gap-5 p-3 w-full bg-green1 opacity-70 lg:hidden" +
          (open ? " flex" : " hidden")
        }
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-cream flexCenter cursor-pointer transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
