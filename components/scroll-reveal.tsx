// components/scroll-reveal.tsx
"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      // Start hidden and slightly pushed down
      initial={{ opacity: 0, y: 50 }} 
      // Animate to fully visible and in position when in view
      whileInView={{ opacity: 1, y: 0 }} 
      // 'once: true' means it only animates the first time you scroll to it
      // 'margin: "-100px"' makes it trigger slightly after it enters the screen for a better effect
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}