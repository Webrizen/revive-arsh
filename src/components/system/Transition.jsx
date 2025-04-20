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
    y: '-100%',
    transition: { delay: i * 0.05, duration: 0.5, ease: 'easeInOut' },
  }),
}

export default function StripTransition() {
  const [show, setShow] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setShow(true)
    const timeout = setTimeout(() => setShow(false), NUM_STRIPS * 80 + 1000)
    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {[...Array(NUM_STRIPS)].map((_, i) => (
            <motion.div
              key={i}
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
  )
}