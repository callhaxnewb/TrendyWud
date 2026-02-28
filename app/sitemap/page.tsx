// app/sitemap/page.tsx

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Sitemap | TRENDY WUDPLAST",
  description: "Navigate through all pages and sections of the TRENDY WUDPLAST website.",
}

const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/#contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "All Products", href: "/products" },
        { name: "WPC Doors", href: "/products/wpc-doors" },
        { name: "Door Frames", href: "/products/door-frames" },
        { name: "WPC Boards", href: "/products/wpc-boards" },
      ],
    },
    {
      title: "Blog & Resources",
      links: [
        { name: "Blog Home", href: "/blog" },
        { name: "WPC Technology", href: "/blog?category=WPC%20Technology" },
        { name: "Sustainability", href: "/blog?category=Sustainability" },
        { name: "Installation Tips", href: "/blog?category=Installation%20Tips" },
        { name: "Design Trends", href: "/blog?category=Design%20Trends" },
      ],
    },
    {
      title: "Company Information",
      links: [
        { name: "Careers", href: "/careers" },
        { name: "Warranty Information", href: "/warranty" },
        { name: "Shipping Policy", href: "/shipping-policy" },
        { name: "Return Policy", href: "/return-policy" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Sitemap", href: "/sitemap" },
      ],
    },
]

export default function SitemapPage() {
  return (
    <div className="bg-background">
      <Navigation isProductPage={true} />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white">
            <div className="absolute inset-0">
                <Image
                    src="/wpc-products-showcase-hero.png"
                    alt="Trendy Wudplast Products"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-foreground/70" />
            </div>
            <div className="container relative z-10 mx-auto px-4 text-left">
                <nav className="text-sm mb-4">
                    <Link href="/" className="opacity-80 hover:opacity-100">Home</Link>
                    <span className="mx-2 opacity-50">/</span>
                    <span className="font-medium">Sitemap</span>
                </nav>
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                        Website Sitemap
                    </h1>
                    <p className="text-lg md:text-xl text-white/80">
                      Navigate through all pages and sections of our website with ease.
                    </p>
                </div>
            </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteStructure.map((section, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-serif">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.href} className="font-sans text-muted-foreground hover:text-primary transition-colors">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <ContactSection variant="compact" />
      </main>
      <Footer />
    </div>
  )
}