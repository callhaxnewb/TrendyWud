// app/products/wpc-doors/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Droplets, Leaf, Volume2, Flame, Wrench } from "lucide-react"
import ContactSection from "@/components/contact-section"

/* Note: Exporting metadata is not allowed in a "use client" component.
  export const metadata = {
    title: "Premium WPC Doors | TRENDY WUDPLAST",
    description: "Experience the perfect fusion of natural wood aesthetics...",
  }
*/

const benefits = [
    {
      icon: Droplets,
      title: "100% Waterproof",
      description: "Never worry about moisture damage or warping.",
    },
    {
      icon: Shield,
      title: "Termite & Pest Resistant",
      description: "Natural protection without harmful chemicals.",
    },
    {
      icon: Wrench,
      title: "Low Maintenance",
      description: "No polishing, painting, or frequent repairs needed.",
    },
    {
      icon: Volume2,
      title: "Sound Insulation",
      description: "Superior acoustic properties for peaceful spaces.",
    },
    {
      icon: Flame,
      title: "Fire Retardant",
      description: "Enhanced safety with flame-resistant properties.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Made from recycled materials, reducing deforestation.",
    },
]

const specifications = [
    { label: "Standard Sizes", value: "2100 x 900 x 35mm, 2100 x 800 x 35mm, Custom sizes available" },
    { label: "Material Composition", value: "65% Wood Fiber, 30% HDPE, 5% Additives" },
    { label: "Density", value: "1.0 - 1.3 g/cm³" },
    { label: "Moisture Absorption", value: "< 0.5%" },
    { label: "Load Bearing", value: "Up to 100kg" },
    { label: "Finish Options", value: "Smooth, Wood Grain, Textured" },
    { label: "Color Options", value: "Natural Wood, Dark Walnut, Light Oak, White, Custom Colors" },
    { label: "Hardware Compatibility", value: "Standard door hardware" },
    { label: "Warranty", value: "10 years against manufacturing defects" },
]

const applications = [
    {
      title: "Residential Homes",
      description: "Bedrooms, bathrooms, main doors, interior doors",
      image: "/premium-wpc-door-installation-luxury-home.png", // Ensure this exists
    },
    {
      title: "Commercial Buildings",
      description: "Offices, retail spaces, hotels, hospitals",
      image: "/commercial-building-wpc-doors.png", // Ensure this exists
    },
    {
      title: "Hospitality Sector",
      description: "Hotels, restaurants, resorts",
      image: "/hotel-room-wpc-door.png", // Ensure this exists
    },
    {
      title: "Institutional Buildings",
      description: "Schools, colleges, government offices",
      image: "/commercial-wpc.png", // Ensure this exists
    },
]

const relatedProducts = [
    {
      title: "Door Frames",
      description: "Precision-engineered frames for a perfect fit.",
      image: "/14_DoorFrameProd1.png",
      href: "/products/door-frames",
    },
    {
      title: "WPC Boards",
      description: "Versatile boards for furniture and architecture.",
      image: "/5_Boards.png", 
      href: "/products/wpc-boards",
    },
]

export default function WPCDoorsPage() {
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
                    src="/3_WPCDoorsProductCard.png"
                    alt="Luxurious WPC Door"
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
                    <span className="font-medium text-white">WPC Doors</span>
                </nav>
                <motion.div 
                  className="max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                        Premium WPC Doors
                    </h1>
                    <p className="text-lg md:text-xl text-white/80">
                        Experience the perfect fusion of natural wood aesthetics and advanced composite technology.
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Why Choose Our WPC Doors?</h2>
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

        {/* Applications Section */}
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
                        {/* Title Wrapper: 60px tall, bottom-aligned */}
                        <div className="h-[60px] flex items-end mb-2">
                            <CardTitle className="text-xl font-serif text-white">{app.title}</CardTitle>
                        </div>
                        {/* Description Wrapper: 50px tall, top-aligned */}
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