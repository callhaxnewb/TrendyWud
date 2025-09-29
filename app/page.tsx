// app/page.tsx

"use client"

import { useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ProductsSection from "@/components/products-section"
import SustainabilitySection from "@/components/sustainability-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={isLoading ? "hidden" : "block"}>
        <Navigation />
        {/* The spacer div has been removed from here */}
        <main>
          <HeroSection />
          <ProductsSection />
          <SustainabilitySection />
          <GallerySection />
          <TestimonialsSection />
          <FAQSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}