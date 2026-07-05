"use client";

import { NAV_LINKS } from "../constants/index";
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import logo from "../public/images/7-removebg-preview.png";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("");
  const lastScrollY = useRef(0);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  const controlNavbar = useCallback(() => {
    // Always show near the top; otherwise hide on scroll-down, show on scroll-up.
    if (window.scrollY < 80 || window.scrollY < lastScrollY.current) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [controlNavbar]);

  // Scroll-spy: highlight the nav link for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-30 w-full bg-green1/70 backdrop-blur-md shadow-sm transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full flexBetween max-container padding-container z-30 py-2 lg:py-4">
        <Link href="/" aria-label="Magical Continent home">
          <Image
            className="lg:w-[120px] h-auto w-[60px]"
            src={logo.src}
            alt="Magical Continent logo"
            width="150"
            height="143"
          />
        </Link>

        <ul className="hidden h-full items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.key}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`regular-16 rounded-md px-1 py-0.5 transition-all [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    isActive ? "font-bold text-gold" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="#contact"
              className="rounded-full bg-gold px-5 py-2 font-semibold text-green1 transition hover:bg-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="lg:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <i className={`bx ${open ? "bx-x" : "bx-menu"} text-3xl transition-all duration-300`}></i>
        </button>
      </div>

      <ul
        id="mobile-menu"
        className={`absolute left-0 top-full w-full flex-col gap-2 bg-green1/95 p-4 lg:hidden ${
          open ? "flex" : "hidden"
        }`}
      >
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <Link
              href={link.href}
              key={link.key}
              onClick={closeMenu}
              aria-current={isActive ? "true" : undefined}
              className={`regular-16 rounded-md px-3 py-2 transition-all hover:bg-green1 ${
                isActive ? "font-bold text-gold" : "text-cream"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="#contact"
          onClick={closeMenu}
          className="mt-2 rounded-full bg-gold px-5 py-2 text-center font-semibold text-green1"
        >
          Get a Quote
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
