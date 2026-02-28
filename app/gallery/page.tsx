import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import GallerySection from "@/components/gallery-section"

export const metadata: Metadata = {
  title: "Project Gallery | TRENDY WUDPLAST",
  description: "Explore our installations across residential, commercial, and hospitality projects.",
}

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <main>
        <section className="relative pt-32 pb-20 text-white">
          <div className="absolute inset-0">
            <Image src="/2_LandingPage.png" alt="Gallery Hero" fill className="object-cover" />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-left">
            <nav className="text-sm mb-4">
              <Link href="/" className="opacity-80 hover:opacity-100">Home</Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="font-medium">Gallery</span>
            </nav>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Project Gallery</h1>
              <p className="text-lg md:text-xl text-white/80">See how our WPC solutions elevate real spaces.</p>
            </div>
          </div>
        </section>
        <GallerySection />
      </main>
    </div>
  )
}

 