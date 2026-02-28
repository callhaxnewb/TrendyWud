// app/page.tsx
"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import HeroSection from "@/components/hero-section"
import ProductsSection from "@/components/products-section"
import SustainabilitySection from "@/components/sustainability-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"

// 1. IMPORT YOUR NEW COMPONENT HERE
import ScrollReveal from "@/components/scroll-reveal" 

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    window.scrollTo(0, 0)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div>
        <main>
          {/* Hero section stays unwrapped so it's visible immediately */}
          <HeroSection />
          
          {/* 2. WRAP ALL OTHER SECTIONS LIKE THIS */}
          <ScrollReveal>
            <ProductsSection />
          </ScrollReveal>

          <ScrollReveal>
            <SustainabilitySection />
          </ScrollReveal>

          <ScrollReveal>
            <GallerySection />
          </ScrollReveal>

          <ScrollReveal>
            <TestimonialsSection />
          </ScrollReveal>

          <ScrollReveal>
            <FAQSection />
          </ScrollReveal>

          <ScrollReveal>
            <BlogSection />
          </ScrollReveal>

          <ScrollReveal>
            <ContactSection />
          </ScrollReveal>
        </main>
      </div>
    </>
  )
}