'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NUM_STRIPS = 6
const COLORS = [
  '#0F0F0F',
  '#1A1A1A',
  '#1E1E1E',
  '#2A2A2A',
  '#333333',
  '#3D3D3D',
]

const stripVariants = {
  initial: (i) => ({
    y: '-100%',
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
  animate: (i) => ({
    y: '0%',
    transition: { delay: i * 0.05, duration: 0.5, ease: 'easeInOut' },
  }),
  exit: (i) => ({
    y: '-100%', // Changed from '100%' to '-100%' to make strips slide up on exit
    transition: { 
      delay: i * 0.05, // Changed to same order as enter (first to last)
      duration: 0.5, 
      ease: 'easeInOut' 
    },
  }),
}

const contentVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { delay: NUM_STRIPS * 0.05 + 0.3, duration: 0.5 } 
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 } 
  }
}

export default function StripTransition({ children }) {
  const [isAnimating, setIsAnimating] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsAnimating(true)
    const timeout = setTimeout(() => setIsAnimating(false), NUM_STRIPS * 80 + 1000)
    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <>
      <AnimatePresence mode="wait">
        {isAnimating && (
          <div className="fixed inset-0 z-[9999] pointer-events-none">
            {[...Array(NUM_STRIPS)].map((_, i) => (
              <motion.div
                key={`strip-${i}`}
                custom={i}
                variants={stripVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute top-0 bottom-0 w-full"
                style={{
                  left: `${i * (100 / NUM_STRIPS)}%`,
                  backgroundColor: COLORS[i % COLORS.length],
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}