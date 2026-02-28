// app/blog/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ContactSection from "@/components/contact-section"

const articles = [
  {
    slug: "complete-guide-wpc-doors",
    title: "The Complete Guide to WPC Doors: Benefits & Installation",
    excerpt: "Everything you need to know about choosing and installing WPC doors for your home or commercial project.",
    category: "Knowledge Base",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/3_WPCDoorsProductCard.png", 
  },
  {
    slug: "sustainable-building-wpc-materials",
    title: "Sustainable Building: WPC Materials & The Environment",
    excerpt: "Explore how WPC materials contribute to green building practices and environmental conservation without compromising quality.",
    category: "Sustainability",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "/16_blogPic.png", 
  },
  {
    slug: "wpc-vs-traditional-wood-cost-analysis",
    title: "WPC vs Traditional Wood: A Comprehensive Cost Analysis",
    excerpt: "A detailed breakdown of the long-term cost benefits of choosing WPC over traditional wood materials.",
    category: "Industry Insights",
    date: "February 28, 2024",
    readTime: "10 min read",
    image: "/14_DoorFrameProd1.png", 
  },
]

export default function BlogPage() {
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
    <div className="bg-background min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[#423D33]" /> {/* Dark brand background */}
            <div className="container relative z-10 mx-auto px-4 max-w-6xl text-left">
                <nav className="text-sm mb-4">
                    <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link>
                    <span className="mx-2 opacity-50">/</span>
                    <span className="font-medium text-white">Journal</span>
                </nav>
                <motion.div 
                  className="max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                        Insights & Innovations
                    </h1>
                    <p className="text-lg md:text-xl text-white/80">
                        Expert perspectives on WPC technology, sustainable construction, and modern design.
                    </p>
                </motion.div>
            </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {articles.map((article, index) => (
                <motion.div key={article.slug} variants={itemVariants} className="h-full">
                  <Card className="group flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 border-border/50">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-sans shadow-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="pt-6">
                      <div className="flex items-center space-x-4 text-xs font-sans text-muted-foreground mb-3 uppercase tracking-wider">
                        <div className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1.5 text-primary" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-serif leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <p className="text-muted-foreground font-sans mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="mt-auto pt-4 border-t border-border/50">
                        <Link href={`/blog/${article.slug}`} className="inline-flex items-center font-sans font-medium text-primary hover:text-primary/80 transition-colors group/link">
                          Read Article
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
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