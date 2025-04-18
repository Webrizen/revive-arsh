"use client";
import { logos } from "@/enums/data";
import React from "react";

const Marquee = () => {
  return (
    <div className="relative w-full overflow-x-hidden py-8 bg-transparent">
      {/* Gradient overlay - make sure it spans full width */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-transparent to-zinc-100 z-10 opacity-35 pointer-events-none w-screen" />

      {/* Container with constrained width */}
      <div className="w-screen overflow-hidden">
        {/* Marquee track */}
        <div className="flex w-max">
          {/* First Marquee */}
          <div className="flex shrink-0 items-center justify-around animate-marquee">
            {logos.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex flex-col items-center mx-4 md:mx-8"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Second Marquee (duplicate for seamless looping) */}
          <div className="flex shrink-0 items-center justify-around animate-marquee">
            {logos.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex flex-col items-center mx-4 md:mx-8"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;