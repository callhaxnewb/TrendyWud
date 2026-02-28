// components/loading-screen.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // The total time the loading screen stays visible (2 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false)
      // Wait for the fade-out animation to finish before destroying the component
      setTimeout(onComplete, 800) 
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // This creates the cinematic fade-out when the loading is done
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          // Using a deep, rich custom hex that perfectly matches your hero section's vibe
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#423D33]" 
        >
          {/* Logo and Brand Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            {/* Pulling in your actual logo from the footer */}
            <Image 
              src="/1_TrendyWudLogoFinal.png" 
              alt="Trendy Wudplast Logo" 
              width={80} 
              height={80} 
              className="mb-6 rounded-full shadow-2xl" 
            />
            
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-widest mb-3 uppercase drop-shadow-lg">
              Trendy Wudplast
            </h1>
            
            {/* The exact sage green color from your hero section */}
            <p className="text-[#C6D39C] font-sans tracking-[0.2em] text-xs sm:text-sm uppercase opacity-90">
              Sustainable Elegance
            </p>
          </motion.div>

          {/* Minimalist Luxury Loading Bar */}
          <motion.div
            className="mt-12 w-48 sm:w-64 h-[2px] bg-stone-700 overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className="h-full bg-[#C6D39C]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}