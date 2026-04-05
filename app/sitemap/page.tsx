// app/sitemap/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import ContactSection from "@/components/contact-section"

const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Project Gallery", href: "/#gallery" },
        { name: "Contact Us", href: "/#contact" },
      ],
    },
    {
      title: "Our Products",
      links: [
        { name: "WPC Doors", href: "/products/wpc-doors" },
        { name: "Door Frames", href: "/products/door-frames" },
        { name: "WPC Boards", href: "/products/wpc-boards" },
      ],
    },
    {
      title: "Journal & Insights",
      links: [
        { name: "Journal Home", href: "/blog" },
        { name: "Guide to WPC Doors", href: "/blog/complete-guide-wpc-doors" },
        { name: "Sustainable Building", href: "/blog/sustainable-building-wpc-materials" },
        { name: "Cost Analysis", href: "/blog/wpc-vs-traditional-wood-cost-analysis" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Sitemap", href: "/sitemap" },
      ],
    },
]

export default function SitemapPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div className="bg-background min-h-screen">
      <Navigation isProductPage={true} />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[#423D33]" />
            <div className="container relative z-10 mx-auto px-4 max-w-6xl text-left">
                <nav className="text-sm mb-4">
                    <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link>
                    <span className="mx-2 opacity-50">/</span>
                    <span className="font-medium text-white">Sitemap</span>
                </nav>
                <motion.div 
                  className="max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                        Website Sitemap
                    </h1>
                    <p className="text-lg md:text-xl text-white/80">
                      Navigate through all pages and sections of our website with ease.
                    </p>
                </motion.div>
            </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {siteStructure.map((section, index) => (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <Card className="hover:shadow-lg transition-shadow border-border/50 h-full bg-background">
                    <CardHeader className="pb-4">
                      <CardTitle className="font-serif text-xl text-foreground">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link href={link.href} className="font-sans text-muted-foreground hover:text-primary transition-colors flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        <ContactSection variant="compact" />
      </main>
    </div>
  )
}