// components/blog-section.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

const articles = [
  {
    slug: "complete-guide-wpc-doors",
    title: "The Complete Guide to WPC Doors: Benefits & Installation",
    preview: "Everything you need to know about choosing and installing WPC doors for your home or commercial project.",
    category: "Knowledge Base",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/3_WPCDoorsProductCard.png",
  },
  {
    slug: "sustainable-building-wpc-materials",
    title: "Sustainable Building: WPC Materials & The Environment",
    preview: "Explore how WPC materials contribute to green building practices without compromising quality.",
    category: "Sustainability",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "/wpc-boards-panels.png",
  },
  {
    slug: "wpc-vs-traditional-wood-cost-analysis",
    title: "WPC vs Traditional Wood: A Comprehensive Cost Analysis",
    preview: "A detailed breakdown of the long-term cost benefits of choosing WPC over traditional wood materials.",
    category: "Industry Insights",
    date: "February 28, 2024",
    readTime: "10 min read",
    image: "/14_DoorFrameProd1.png",
  },
]

export default function BlogSection() {
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
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Journal & Insights</h2>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, guides, and innovations in WPC technology.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {articles.map((article) => (
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
                  <CardTitle className="text-xl font-serif leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground font-sans mb-6 line-clamp-3">
                    {article.preview}
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

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans px-8 py-6 group/button">
            <Link href="/blog">
              View All Insights
              <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}