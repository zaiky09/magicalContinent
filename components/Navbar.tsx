"use client";

import { NAV_LINKS } from "../constants/index";
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../public/images/7-removebg-preview.png";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const lastScrollY = useRef(0);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  const controlNavbar = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 40);
    // Show near the top, or when scrolling up; hide when scrolling down.
    setShowNavbar(y < 80 || y < lastScrollY.current);
    lastScrollY.current = y;
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

  const solid = scrolled || open;

  return (
    <nav
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${solid ? "bg-green1/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div
        className={`w-full flexBetween max-container padding-container transition-all duration-300 ${
          solid ? "py-2" : "py-3 lg:py-5"
        }`}
      >
        <Link href="/" aria-label="Magical Continent home">
          <Image
            className={`h-auto transition-all duration-300 ${
              solid ? "w-[52px] lg:w-[92px]" : "w-[64px] lg:w-[120px]"
            }`}
            src={logo.src}
            alt="Magical Continent logo"
            width="150"
            height="143"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.key}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-1 text-[15px] font-medium tracking-wide transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    isActive
                      ? "text-gold after:w-full"
                      : "text-white hover:text-gold after:w-0 hover:after:w-full"
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
              className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-green1 shadow-sm transition hover:bg-cream hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded text-white transition-colors hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:hidden"
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <i className={`bx ${open ? "bx-x" : "bx-menu"} text-3xl transition-all duration-300`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-green1/95 px-4 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 py-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <Link
                    href={link.href}
                    key={link.key}
                    onClick={closeMenu}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-md px-3 py-2.5 text-base transition-all ${
                      isActive
                        ? "bg-white/10 font-semibold text-gold"
                        : "text-cream hover:bg-white/10 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center font-semibold text-green1"
              >
                Get a Quote
              </Link>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
