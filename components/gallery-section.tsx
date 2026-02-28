"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    name: "Modern Residential Complex",
    category: "Residential",
    image: "/7_PG1.png",
  },
  {
    name: "Hotel Floors",
    category: "Commercial",
    image: "/8_PG1HotelLobbyDoors.png",
  },
  {
    name: "Modern TV & Media Console",
    category: "Furniture",
    image: "/10_PG1TVUnitWPCBoard.png",
  },
  {
    name: "Contemporary Home Design",
    category: "Residential",
    image: "/6_PG1DoorFrame.png",
  },
  {
    name: "Office Meeting Room",
    category: "Commercial",
    image: "/11_PG1OfficeWPCBoards.png",
  },
  {
    name: "Bookshelf",
    category: "Furniture",
    image: "/9_PG1BookShelfWPCBoard.png",
  },
]

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Cities Covered" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent clicking next from closing the lightbox
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projects.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent clicking prev from closing the lightbox
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? projects.length - 1 : selectedImage - 1)
    }
  }

  // Animation variants for the scroll reveal
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
    <section id="gallery" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Project Gallery</h2>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Explore our successful installations across residential, commercial, and hospitality projects showcasing the
            versatility of our WPC solutions.
          </p>
        </div>

        {/* Animated Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-serif font-bold mb-1">{project.name}</h3>
                    <p className="text-sm font-sans">{project.category}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Statistics Bar */}
        <motion.div 
          className="bg-gradient-to-r from-primary to-amber-800 rounded-2xl p-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/90 font-sans">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox with AnimatePresence for smooth open/close */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full h-[80vh] sm:h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[selectedImage].image || "/placeholder.svg"}
                alt={projects[selectedImage].name}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-black/70 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-2xl border border-white/10 max-w-[calc(100%-2rem)] sm:max-w-md">
                <h3 className="text-lg sm:text-2xl font-serif font-bold text-white mb-1 line-clamp-1">{projects[selectedImage].name}</h3>
                <p className="text-sm sm:text-base font-sans text-[#C6D39C] uppercase tracking-wider">{projects[selectedImage].category}</p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white hover:text-black bg-black/50 backdrop-blur-sm rounded-full transition-all"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:text-black bg-black/50 backdrop-blur-sm rounded-full transition-all w-10 h-10 sm:w-12 sm:h-12"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:text-black bg-black/50 backdrop-blur-sm rounded-full transition-all w-10 h-10 sm:w-12 sm:h-12"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}