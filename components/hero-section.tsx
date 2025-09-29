import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/2_LandingPage.png"
          alt="WPC Doors, Frames and Boards Showcase"
          className="w-full h-full object-cover object-position-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      {/* Change: Alignment classes updated for consistent left alignment */}
      <div className="relative z-10 container mx-auto px-4 text-left">
        <div className="max-w-2xl mx-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Elevate Your Space with <span className="text-[rgb(210,233,165)]">Sustainable Elegance</span>
          </h1>
          <p className="text-xl md:text-1xl text-white/90 mb-8 font-sans leading-relaxed max-w-2xl">
            At TRENDY WUDPLAST, we fuse eco-innovation with premium craftsmanship. Discover doors, frames, and boards
            that redefine luxury.
          </p>
          {/* Change: Alignment classes updated for consistent left alignment */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-8 py-6 group"
              asChild
            >
              <Link href="/products">
                Explore Our Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground font-sans text-lg px-8 py-6 bg-transparent"
              asChild
            >
              <a href="#contact">
                <Play className="mr-2 w-5 h-5" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}