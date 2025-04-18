"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/enums/data";

// Custom hook for magnetic effect (create this in a separate file)
function useMagneticEffect(ref, strength = 16) {
  const onMouseMove = (e) => {
    const { current: el } = ref;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / strength;
    const y = (e.clientY - top - height / 2) / strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onMouseLeave = () => {
    const { current: el } = ref;
    el.style.transform = `translate(0px, 0px)`;
  };

  return { onMouseMove, onMouseLeave };
}

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`size-8 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-sm text-gray-500">{rating}.0</span>
    </div>
  );
};

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonial = testimonials[index];

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const prevMagnetic = useMagneticEffect(prevButtonRef);
  const nextMagnetic = useMagneticEffect(nextButtonRef);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <div className="flex md:items-stretch gap-10 lg:gap-14">
        <div className="hidden md:flex md:w-1/2 lg:w-2/5 md:h-auto overflow-hidden rounded-lg">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={testimonial.id}
              src={testimonial.client.img || "/placehholder.svg"}
              alt={testimonial.client.name}
              className="w-full h-[400px] aspect-square object-cover object-top rounded-2xl"
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              custom={direction}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
        <div className="flex-1 flex flex-col space-y-6 md:space-y-12 lg:space-y-16 md:py-6 lg:py-8 md:h-auto md:justify-center overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonial.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
             <div className="inline-block mb-4">
                <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800">
                  {testimonial.category}
                </span>
              </div>
              <StarRating rating={testimonial.stars} />
              <p className="text-xl lg:text-2xl font-medium text-zinc-700">
                {testimonial.message}
              </p>
              <motion.div
                className="flex items-start gap-4 my-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <img
                  src={testimonial.client.img || "/placehholder.svg"}
                  alt={testimonial.client.name}
                  className="w-12 h-12 rounded-full flex md:hidden"
                />
                <div className="space-y-1 flex-1">
                  <h2 className="text-lg font-semibold leading-none text-zinc-800">
                    {testimonial.client.name}
                  </h2>
                  <p className="text-zinc-500">{testimonial.client.position}</p>
                </div>
              </motion.div>
               <div className="mt-4 flex flex-wrap gap-2">
                {testimonial.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="md:absolute md:right-0 md:bottom-6 lg:bottom-8 bg-zinc-200 p-1 rounded-lg flex items-start gap-3 w-max mt-10 md:mt-0">
        <motion.button
          ref={prevButtonRef}
          onClick={handlePrev}
          aria-label="Prev Button"
          className="outline-none p-2.5 rounded-md text-zinc-700 transition ease-linear bg-zinc-200 hover:bg-white cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...prevMagnetic}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
        <motion.button
          ref={nextButtonRef}
          onClick={handleNext}
          aria-label="Next Button"
          className="outline-none p-2.5 rounded-md text-zinc-700 transition ease-linear bg-zinc-200 hover:bg-white cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...nextMagnetic}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
