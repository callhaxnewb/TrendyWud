"use client"

import { useState, useEffect } from "react"
import { Leaf } from "lucide-react"

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500) // Wait for fade out animation
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center opacity-0 transition-opacity duration-500 pointer-events-none" />
    )
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="text-center">
        <div className="relative mb-6">
          {/* Company Logo - Circular wood texture with W and leaves */}
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-800 to-amber-900 rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700/50 to-amber-900/50 rounded-full" />
            <span className="text-3xl font-serif font-bold text-white relative z-10">W</span>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <Leaf className="w-4 h-4 text-primary animate-pulse" />
              <Leaf className="w-3 h-3 text-primary animate-pulse delay-300 ml-2" />
            </div>
          </div>
          {/* Floating animation */}
          <div className="absolute inset-0 animate-bounce">
            <Leaf className="w-6 h-6 text-primary absolute top-0 left-8 animate-pulse" />
            <Leaf className="w-4 h-4 text-primary absolute top-4 right-6 animate-pulse delay-500" />
          </div>
        </div>
        <h1 className="text-2xl font-serif font-bold text-foreground mb-2">TRENDY WUDPLAST</h1>
        <p className="text-muted-foreground font-sans">Sustainable Elegance in Every Product</p>
        <div className="mt-6 flex justify-center">
          <div className="w-8 h-1 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}
