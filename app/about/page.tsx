// app/about/page.tsx
"use client" // Added to enable Framer Motion animations

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Leaf, Factory } from "lucide-react"
import Navigation from "@/components/navigation"

/* Note: Exporting metadata is not allowed in a "use client" component.
  If you need this for SEO, move it to a layout.tsx file for the /about route!
  
  export const metadata = {
    title: "About Us | TRENDY WUDPLAST",
    description: "Learn about TRENDY WUDPLAST's journey...",
  }
*/

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to environmental responsibility through recycled materials and eco-friendly processes.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Uncompromising quality standards with rigorous testing and continuous improvement.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building lasting relationships through exceptional service and customized solutions.",
  },
  {
    icon: Factory,
    title: "Innovation",
    description: "Continuously advancing WPC technology to meet evolving market needs.",
  },
]

const leader = {
  name: "Rakesh Jain",
  role: "Founder & CEO",
  bio: "At Trendy Wudplast, our work is guided by a core set of principles: a commitment to unwavering quality, a responsibility towards our environment, and a dedication to the customer's enduring trust. These principles are the bedrock upon which our company is built. Our mission is to lead the building materials industry towards a more sustainable and reliable future. We achieve this by harnessing innovation to create Wood Plastic Composite (WPC) solutions that outperform traditional materials in every aspect from being 100% waterproof and termite-proof to utilizing eco-friendly components. Our purpose extends beyond our factory walls; it is about contributing to the creation of safer, stronger, and more sustainable living environments across the country. We believe in being a partner for progress, working closely with those in the construction and design community who share our commitment to building better.",
  image: "/team-ceo.jpg",
}

export default function AboutPage() {
  // Animation rules for smooth staggered scrolling
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="bg-background text-foreground">
      <Navigation isProductPage={true} />
      <main>
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/company-facility.png" 
              alt="TRENDY WUDPLAST Facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
          </div>
          
          {/* STANDARDIZED WRAPPER: max-w-6xl */}
          <div className="container relative z-10 mx-auto px-4 max-w-6xl text-left">
            <nav className="text-sm mb-4">
              <Link href="/" className="opacity-80 hover:opacity-100">Home</Link>
              <span className="mx-2 opacity-50">/</span>
              {/* CHANGE THIS LINE BELOW */}
              <span className="font-medium text-white">About Us</span> 
            </nav>
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                Crafting WPC Excellence Since 2023
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Based in Hisar, Haryana, we blend natural aesthetics with advanced composite engineering for durable, sustainable spaces.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          {/* STANDARDIZED WRAPPER: max-w-6xl */}
          <motion.div 
            className="container mx-auto px-4 max-w-6xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground font-sans text-lg">
                  <p>Founded in 2023, TRENDY WUDPLAST set out to reimagine building materials for India’s future. Our mission is simple: deliver wood-like warmth with uncompromising durability and sustainability—without the trade-offs.</p>
                  <p>From Hisar, Haryana, we’ve grown with a pragmatic, engineering-first approach, refining materials and designing products that perform consistently in Indian conditions.</p>
                  <p>Today, we supply premium WPC solutions for projects that aim to look better and last longer.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="relative aspect-video order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl">
                 <Image
                    src="/wpc-boards-panels.png"
                    alt="TRENDY WUDPLAST Manufacturing Facility"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-20 bg-muted">
          {/* STANDARDIZED WRAPPER: max-w-6xl */}
          <motion.div 
            className="container mx-auto px-4 max-w-6xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">Mission, Vision & Values</motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div variants={itemVariants}>
                <Card className="bg-background h-full shadow-lg border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-primary">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-sans text-lg">To manufacture elegant, durable WPC products that simplify construction, minimize maintenance, and reduce environmental impact.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="bg-background h-full shadow-lg border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-primary">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-sans text-lg">To become India’s most trusted WPC brand by uniting design and engineering, making sustainable choices the obvious choice.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-border/50">
              {values.map((value, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center group">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                        <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground font-sans">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Message from Founder */}
        <section className="py-24 bg-background overflow-hidden">
          {/* STANDARDIZED WRAPPER: max-w-6xl */}
          <motion.div 
            className="container mx-auto px-4 max-w-6xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Column: Text Content */}
              <motion.div variants={itemVariants} className="flex flex-col justify-center">
                  <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">Message from our Founder</h2>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">{leader.name}</h3>
                  <p className="text-xl text-muted-foreground font-medium mb-8">{leader.role}</p>
                  <p className="text-muted-foreground font-sans text-lg leading-relaxed text-justify">
                      {leader.bio}
                  </p>
              </motion.div>

              {/* Right Column: Image with Decorative Backdrop */}
              <motion.div variants={itemVariants} className="relative flex items-center justify-center min-h-[500px] p-6"> 
                  {/* The main image card */}
                  <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-10">
                      <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover"
                      />
                  </div>
                  {/* The new offset decorative card */}
                  <div 
                      className="absolute w-full max-w-[380px] aspect-[4/5] rounded-2xl -bottom-6 left-2 md:-left-4 z-0" 
                      style={{ backgroundColor: '#423D33' }} 
                  />
                  {/* Small wavy graphic */}
                  <svg 
                      className="absolute z-20 bottom-0 left-6 md:-left-2 w-16 h-16 drop-shadow-md" 
                      viewBox="30 0 50 120" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path d="M0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50ZM50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10Z" fill="#C6D39C" fillOpacity="0.15" />
                      <path d="M20 50C20 40 30 40 40 50C50 60 60 60 70 50" stroke="#C6D39C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M25 60C25 50 35 50 45 60C55 70 65 70 75 60" stroke="#C6D39C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Office Info & Map Section */}
        <section className="py-20 bg-muted">
          {/* STANDARDIZED WRAPPER: max-w-6xl */}
          <motion.div 
            className="container mx-auto px-4 max-w-6xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Head Office</h2>
                  <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                    Chirod Road, Chaudhariwas,<br />
                    Hisar, Haryana 125007
                  </p>
                </div>
                <div className="space-y-4 bg-background p-6 rounded-xl shadow-sm border border-border/50">
                  <p className="text-foreground font-medium font-sans flex items-center">
                    <span className="text-primary mr-3 font-bold uppercase tracking-wider text-sm">Phone</span> 
                    +91 92532 69487
                  </p>
                  <div className="w-full h-[1px] bg-border/50" />
                  <p className="text-foreground font-medium font-sans flex items-center">
                    <span className="text-primary mr-3 font-bold uppercase tracking-wider text-sm">Email</span> 
                    trendywud@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Map Container */}
              <motion.div variants={itemVariants} className="lg:col-span-8 w-full h-[450px] bg-background rounded-2xl p-3 shadow-lg border border-border/50">
                <iframe
                  title="Trendy Wudplast Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206163.2548867474!2d75.50649284511617!3d29.026865507434774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913cb579a84cfcb%3A0xe451931b8013a891!2sTrendy%20WudPlast%20Industries!5e0!3m2!1sen!2sin!4v1771998502710!5m2!1sen!2sin"
                  className="w-full h-full rounded-xl"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      
      {/* REMOVED <Footer /> FROM HERE TO FIX THE DOUBLE FOOTER BUG */}
    </div>
  )
}