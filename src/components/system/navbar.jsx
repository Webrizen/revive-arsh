"use client";

import { useState } from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`flex flex-col transition-all duration-500 ease-in-out ${
        isMenuOpen
          ? "min-h-screen bg-black text-white"
          : "h-auto bg-white text-black"
      }`}
    >
      {/* Header */}
      <header className="flex items-center justify-between p-6 md:p-8">
        <Link
          href="/"
          className={`flex items-center ${outfit.className} text-xl font-medium`}
        >
          Arshahdul A.
        </Link>
        <div className="flex items-center">
          <Link
            href="/contact"
            className={`rounded-full ${
              isMenuOpen ? "bg-white text-black" : "bg-black text-white"
            } px-6 py-3 text-sm font-medium mr-6`}
          >
            Contact us
          </Link>
          <button
            onClick={toggleMenu}
            className="cursor-pointer hover:opacity-50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Grid - Animated Height */}
      <div
        className={`flex-1 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-2 overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <Link
            href="/work"
            className="flex items-center justify-right p-16 md:p-24 border-y border-r border-zinc-800 hover:bg-zinc-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium ">
              My Work
            </h2>
          </Link>

          <Link
            href="/about"
            className="flex items-center justify-left p-16 md:p-24 border-y border-zinc-800 hover:bg-zinc-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
              About Me
            </h2>
          </Link>

          <Link
            href="/process"
            className="flex items-center justify-right p-16 md:p-24 border-r border-zinc-800 hover:bg-zinc-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
              My Process
            </h2>
          </Link>

          <Link
            href="/blog"
            className="flex items-center justify-left p-16 md:p-24 border-zinc-800 hover:bg-zinc-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
             My Blog
            </h2>
          </Link>
        </div>
        <div
          className={`md:grid hidden grid-cols-1 md:grid-cols-2 border-t border-zinc-800 p-8 transition-all duration-500 ease-in-out`}
        >
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-medium mb-6">Our offices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-1">Copenhagen</h4>
                <p className="text-zinc-400">1 Carlsberg Gate</p>
                <p className="text-zinc-400">1260, København, Denmark</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Billund</h4>
                <p className="text-zinc-400">24 Lego Allé</p>
                <p className="text-zinc-400">7190, Billund, Denmark</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-lg font-medium mb-6">Follow us</h3>
            {/* Social links would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
