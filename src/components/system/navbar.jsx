"use client";

import { useState } from "react";
import ReviveLink from "./revive-link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Reusable menu item component
const NavMenuItem = ({
  href,
  title,
  alignRight = false,
  onClick,
}) => (
  <ReviveLink
  prefetch={false}
    href={href}
    className={`flex items-center ${
      alignRight ? "justify-end md:pr-12" : "justify-start md:pl-12"
    } p-16 md:p-24 border-y border-zinc-800 hover:bg-zinc-900 transition-all duration-300`}
    onClick={onClick}
  >
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
      {title}
    </h2>
  </ReviveLink>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isMenuOpen
          ? "min-h-screen bg-black text-white"
          : "bg-white/90 backdrop-blur-sm text-black"
      }`}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-8 md:py-6 relative z-10">
        <ReviveLink
        prefetch={false}
          href="/"
          className={`text-xl md:text-2xl font-bold ${outfit.className}`}
        >
          Arshahdul A.
        </ReviveLink>

        <div className="flex items-center gap-4">
          <ReviveLink
          prefetch={false}
            href="/contact"
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              isMenuOpen
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            Contact Me
          </ReviveLink>

          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800/5 cursor-pointer transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M3.75 9h16.5m-16.5 6.75h16.5"
                }
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Menu Grid - Slide down/up animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <NavMenuItem
            href="/work"
            title="My Work"
            alignRight
            onClick={() => setIsMenuOpen(false)}
          />
          <NavMenuItem
            href="/about"
            title="About Me"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavMenuItem
            href="/process"
            title="My Process"
            alignRight
            onClick={() => setIsMenuOpen(false)}
          />
          <NavMenuItem
            href="/blogs"
            title="My Blog"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;