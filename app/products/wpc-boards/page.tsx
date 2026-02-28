// app/products/wpc-boards/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Layers, Zap, Paintbrush, RotateCcw, Shield, Recycle } from "lucide-react"
import ContactSection from "@/components/contact-section"

/* Note: Exporting metadata is not allowed in a "use client" component.
  export const metadata = {
    title: "Versatile WPC Boards | TRENDY WUDPLAST",
    description: "From furniture making to architectural elements...",
  }
*/

const benefits = [
    {
      icon: Layers,
      title: "Versatile Applications",
      description: "Suitable for furniture, paneling, displays, and more.",
    },
    {
      icon: Shield,
      title: "High Strength",
      description: "Superior load-bearing capacity for structural use.",
    },
    {
      icon: Paintbrush,
      title: "Smooth Finish",
      description: "Ready-to-use surface that accepts paints and laminates.",
    },
    {
      icon: Zap,
      title: "Easy Workability",
      description: "Cuts, drills, and shapes just like natural wood.",
    },
    {
      icon: RotateCcw,
      title: "Dimensional Stability",
      description: "Resistant to warping, cracking, or splitting over time.",
    },
    {
      icon: Recycle,
      title: "100% Recyclable",
      description: "An environmentally responsible choice for any project.",
    },
]

const specifications = [
    { label: "Standard Sizes", value: "8ft x 4ft, 10ft x 4ft, 12ft x 4ft" },
    { label: "Thickness Options", value: "6mm, 9mm, 12mm, 18mm, 25mm" },
    { label: "Material Composition", value: "60% Wood Fiber, 35% HDPE, 5% Additives" },
    { label: "Density", value: "0.9 - 1.2 g/cm³" },
    { label: "Flexural Strength", value: "25-30 MPa" },
    { label: "Surface Finish", value: "Smooth on both sides" },
    { label: "Edge Treatment", value: "Square edge, rounded edge available" },
    { label: "Color Options", value: "Natural, White, Custom colors available" },
]

const applications = [
    {
      title: "Furniture Making",
      description: "Cabinets, wardrobes, tables",
      image: "/wpc-furniture-application.png", // Ensure this exists
    },
    {
      title: "Interior Paneling",
      description: "Wall cladding, decorative panels",
      image: "/modern-wpc-wood-interior.png", // Ensure this exists
    },
    {
      title: "Architectural Elements",
      description: "Room dividers, false ceilings",
      image: "/luxury-hotel-wpc.png", // Ensure this exists
    },
    {
      title: "Display Units",
      description: "Retail displays, exhibition stands",
      image: "/15_boards.png", // Ensure this exists
    },
]

const relatedProducts = [
    {
      title: "WPC Doors",
      description: "Complete your project with our matching WPC doors.",
      image: "/3_WPCDoorsProductCard.png",
      href: "/products/wpc-doors",
    },
    {
      title: "Door Frames",
      description: "Precision frames for a perfect, seamless installation.",
      image: "/14_DoorFrameProd1.png",
      href: "/products/door-frames",
    },
]

export default function WPCBoardsPage() {
  // Animation rules
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div className="bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/5_Boards.png" // Swapped to use your main boards image for the hero
                    alt="WPC Boards used in modern architecture"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
            </div>
            <div className="container relative z-10 mx-auto px-4 max-w-6xl text-left">
                <nav className="text-sm mb-4">
                    <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link>
                    <span className="mx-2 opacity-50">/</span>
                    <Link href="/products" className="opacity-80 hover:opacity-100 transition-opacity">Products</Link>
                    <span className="mx-2 opacity-50">/</span>
                    <span className="font-medium text-white">WPC Boards</span>
                </nav>
                <motion.div 
                  className="max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                        Versatile WPC Boards
                    </h1>
                    <p className="text-lg md:text-xl text-white/80">
                        From custom furniture to large-scale architectural elements, our WPC boards offer the performance and flexibility your projects demand.
                    </p>
                </motion.div>
            </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">The Foundation of Quality Projects</h2>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <Card className="text-center bg-background hover:shadow-lg transition-shadow h-full flex flex-col">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <benefit.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-serif">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground font-sans">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Technical Specifications
            </motion.h2>
            
            <motion.div 
              className="max-w-4xl mx-auto bg-background rounded-xl shadow-lg border overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <table className="w-full">
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                      <td className="p-5 font-medium text-foreground w-1/3 md:w-1/2">{spec.label}</td>
                      <td className="p-5 text-muted-foreground">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Applications Section (BULLETPROOF FIX APPLIED) */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Perfect For Any Setting
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {applications.map((app, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="relative overflow-hidden group hover:shadow-xl transition-shadow rounded-xl h-full border-none">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={app.image || "/placeholder.svg"}
                        alt={app.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    </div>
                    
                    {/* FIXED: The Bulletproof Fixed-Height Wrappers */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 w-full">
                        <div className="h-[60px] flex items-end mb-2">
                            <CardTitle className="text-xl font-serif text-white">{app.title}</CardTitle>
                        </div>
                        <div className="h-[50px] flex items-start">
                            <CardDescription className="text-white/80 font-sans text-sm leading-relaxed">
                              {app.description}
                            </CardDescription>
                        </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Complete Your Project
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {relatedProducts.map((product, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-serif text-2xl">{product.title}</CardTitle>
                      <CardDescription className="font-sans pt-1 text-base">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <Button asChild variant="outline" className="w-full group/button">
                        <Link href={product.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
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