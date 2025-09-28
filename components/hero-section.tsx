import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/wpc-products-showcase-hero.png"
          alt="WPC Doors, Frames and Boards Showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Elevate Your Space with <span className="text-primary">Sustainable Elegance</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-sans leading-relaxed max-w-2xl">
            At TRENDY WUDPLAST, we fuse eco-innovation with premium craftsmanship. Discover doors, frames, and boards
            that redefine luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-8 py-6"
              asChild
            >
              <Link href="/products">
                Explore Our Collection
                <ArrowRight className="ml-2 w-5 h-5" />
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
