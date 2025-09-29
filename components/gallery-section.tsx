"use client"

import { useState } from "react"
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

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projects.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? projects.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Project Gallery</h2>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Explore our successful installations across residential, commercial, and hospitality projects showcasing the
            versatility of our WPC solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="bg-gradient-to-r from-primary to-amber-800 rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/90 font-sans">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[selectedImage].image || "/placeholder.svg"}
              alt={projects[selectedImage].name}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-auto bg-black/70 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 rounded-lg shadow-xl border border-white/10 max-w-[calc(100%-1rem)] sm:max-w-none">
              <h3 className="text-sm sm:text-xl font-serif font-bold text-white line-clamp-1">{projects[selectedImage].name}</h3>
              <p className="text-xs sm:text-sm font-sans text-white/80 hidden sm:block">{projects[selectedImage].category}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 bg-black/50 backdrop-blur-sm rounded-full transition-all hover:scale-110"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 bg-[#352C24]/50 backdrop-blur-sm rounded-full transition-all hover:scale-110"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 bg-black/50 backdrop-blur-sm rounded-full transition-all hover:scale-110"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
