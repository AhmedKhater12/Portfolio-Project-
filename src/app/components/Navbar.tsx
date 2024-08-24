"use client";

import React, { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 py-4 w-full z-20 transition-all duration-3000 ${
        scrolled ? "bg-blue-500 opacity-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 duration-1000">
        <a href="/" className="text-3xl font-bold text-white">
          Khatooooor
        </a>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <FiAlignJustify className="w-6 h-6" />
          </button>
        </div>
        <ul
          className={`lg:flex lg:space-x-8 lg:static lg:flex-row lg:items-center lg:w-auto lg:opacity-100 lg:translate-x-0 transition-transform transform duration-1000 ${
            isOpen ? "block opacity-100 translate-x-0" : "hidden"
          } absolute top-16 right-10 w-48 p-6 bg-gray-800 lg:bg-transparent text-white uppercase space-y-6 lg:space-y-0`}
        >
          <li>
            <a
              href="/"
              className="text-xl font-semibold text-white hover:underline decoration-sky-500/95 "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="text-xl font-semibold text-white hover:underline  decoration-sky-500/95 "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Service"
              className="text-xl font-semibold text-white hover:underline  decoration-sky-500/95"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#Portfolio"
              className="text-xl font-semibold text-white hover:underline  decoration-sky-500/95"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#Blog"
              className="text-xl font-semibold text-white hover:underline  decoration-sky-500/95"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="text-xl font-semibold text-white hover:underline  decoration-sky-500/95"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
