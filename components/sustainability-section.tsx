"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Recycle, TreePine, Award } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description:
      "Made from recycled wood fibers and plastic, reducing environmental impact while maintaining premium quality.",
  },
  {
    icon: Recycle,
    title: "100% Recyclable",
    description:
      "Our products can be fully recycled at the end of their lifecycle, contributing to a circular economy.",
  },
  {
    icon: TreePine,
    title: "Forest Conservation",
    description:
      "By using composite materials, we help preserve natural forests while delivering superior performance.",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "All our products meet international environmental standards and quality certifications.",
  },
]

const stats = [
  { value: "50%", label: "Less Carbon Footprint" },
  { value: "100%", label: "Recyclable Materials" },
  { value: "15+", label: "Years Durability" },
  { value: "Zero", label: "Harmful Chemicals" },
]

export default function SustainabilitySection() {
  // 1. Container rules for the staggered cascade effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }, // slightly faster stagger for 4 items
    },
  }

  // 2. Individual item rules (sliding up and fading in)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-card-foreground mb-6">
            Crafted with Care for Our Planet
          </h2>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Our products are designed for durability and beauty, ensuring a lasting positive impact on both your space
            and the environment.
          </p>
        </div>

        {/* Feature Cards Grid - Animated */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-background hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Bar - Animated */}
        <div className="bg-primary rounded-2xl p-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/90 font-sans">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}