"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at ipsa pariatur culpa iste dolore aliquid officia modi quas.",
    author: "John Doe",
    role: "SEO, Kelasi-AI SARL",
    image: "https://placehold.co/600x400",
    avatar: "https://placehold.co/100x100",
  },
  {
    id: 2,
    quote:
      "This is an amazing service. The support is top-notch and the results are real. Highly recommend for startups.",
    author: "Jane Smith",
    role: "CTO, QuantumStack",
    image: "https://placehold.co/600x400?text=2",
    avatar: "https://placehold.co/100x100?text=JS",
  },
  {
    id: 3,
    quote:
      "Exactly what we needed! The UX is clean, intuitive, and the performance boost is visible.",
    author: "Arjun Rao",
    role: "Founder, DevCraft",
    image: "https://placehold.co/600x400?text=3",
    avatar: "https://placehold.co/100x100?text=AR",
  },
];

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
              src={testimonial.image}
              alt={testimonial.author}
              className="w-full h-full object-cover"
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
              <p className="text-xl lg:text-2xl font-medium text-zinc-700">
                {testimonial.quote}
              </p>
              <motion.div
                className="flex items-start gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full flex md:hidden"
                />
                <div className="space-y-1 flex-1">
                  <h2 className="text-lg font-semibold leading-none text-zinc-800">
                    {testimonial.author}
                  </h2>
                  <p className="text-zinc-500">{testimonial.role}</p>
                </div>
              </motion.div>
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