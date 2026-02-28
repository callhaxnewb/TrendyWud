// app/products/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, AlertTriangle, ArrowRight } from "lucide-react"
import ContactSection from "@/components/contact-section"

/* Note: Exporting metadata is not allowed in a "use client" component.
  export const metadata = {
    title: "Premium WPC Products | TRENDY WUDPLAST",
    description: "Discover our complete range of sustainable, durable WPC solutions...",
  }
*/

const comparisonData = [
    {
      feature: "Water Resistance",
      trendy: { status: "excellent", text: "100% Waterproof" },
      wood: { status: "poor", text: "Prone to Swelling/Rot" },
      pvc: { status: "excellent", text: "Waterproof" },
    },
    {
      feature: "Termite Proof",
      trendy: { status: "excellent", text: "Yes" },
      wood: { status: "poor", text: "No" },
      pvc: { status: "excellent", text: "Yes" },
    },
    {
      feature: "Maintenance",
      trendy: { status: "excellent", text: "Extremely Low" },
      wood: { status: "poor", text: "High (Needs Polishing)" },
      pvc: { status: "moderate", text: "Low" },
    },
    {
      feature: "Eco-Friendly",
      trendy: { status: "excellent", text: "High (Recycled)" },
      wood: { status: "poor", text: "Low (Deforestation)" },
      pvc: { status: "poor", text: "Low (Virgin Plastics)" },
    },
    {
      feature: "Screw Holding",
      trendy: { status: "excellent", text: "Excellent" },
      wood: { status: "moderate", text: "Good" },
      pvc: { status: "poor", text: "Poor to Average" },
    },
]

const products = [
    {
      id: "wpc-doors",
      title: "WPC Doors",
      description:
        "Premium doors that combine the beauty of wood with the durability of composite materials.",
      image: "/3_WPCDoorsProductCard.png", // Changed to match your homepage image path
      features: [
        "100% Waterproof & Termite Proof",
        "Low Maintenance & Long-Lasting",
        "Eco-Friendly & Sustainable",
        "Superior Sound Insulation",
      ],
      priceRange: "",
      href: "/products/wpc-doors",
    },
    {
      id: "door-frames",
      title: "Door Frames",
      description:
        "Precision-engineered frames that provide perfect fit and lasting performance.",
      image: "/14_DoorFrameProd1.png",
      features: [
        "Precision Fit & Easy Installation",
        "Weather Resistant & Durable",
        "Coordinated with Door Colors",
        "Professional Grade Quality",
      ],
      priceRange: "",
      href: "/products/door-frames",
    },
    {
      id: "wpc-boards",
      title: "WPC Boards",
      description:
        "Versatile boards for various applications, from furniture to architectural elements.",
      image: "/5_Boards.png", // Changed to match your homepage image path
      features: ["Versatile Applications", "High Strength & Smooth Finish", "Easy to Work With", "100% Recyclable"],
      priceRange: "",
      href: "/products/wpc-boards",
    },
]

const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <Check className="h-5 w-5 text-green-600 mx-auto" />
      case "poor":
        return <X className="h-5 w-5 text-red-600 mx-auto" />
      case "moderate":
        return <AlertTriangle className="h-5 w-5 text-yellow-600 mx-auto" />
      default:
        return null
    }
}

export default function ProductsPage() {
  // Animation rules
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
    <div className="bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative flex items-end h-[50vh] text-white">
            <div className="absolute inset-0">
                <Image
                    src="/wpc-products-showcase-hero.png" // Make sure this image exists!
                    alt="WPC Products Showcase"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-foreground/70" />
            </div>
            {/* Added max-w-6xl for alignment */}
            <div className="container relative z-10 mx-auto px-4 pb-16 sm:pb-20 max-w-6xl text-left">
                <nav className="text-sm mb-4">
                    <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link>
                    <span className="mx-2 opacity-50">/</span>
                    {/* Changed to text-white for visibility */}
                    <span className="font-medium text-white">Products</span>
                </nav>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                      Our Premium WPC Collection
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 max-w-3xl">
                      Discover our complete range of sustainable, durable WPC solutions designed for modern construction.
                  </p>
                </motion.div>
            </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20">
          <motion.div 
            className="container mx-auto px-4 max-w-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Revolutionizing Construction with WPC</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wood Plastic Composite represents the future of sustainable building materials. Our products deliver superior performance by combining the natural beauty of wood with the durability of engineered composites.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-20 bg-muted overflow-hidden">
          <motion.div 
            className="container mx-auto px-4 max-w-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">Why TRENDY WUDPLAST Leads</h2>
            <div className="overflow-x-auto pb-4">
                <div className="bg-background rounded-xl shadow-lg border min-w-[700px]">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-5 font-serif font-bold text-foreground">Feature</th>
                        <th className="text-center p-5 font-serif font-bold text-primary-foreground bg-primary rounded-tr-xl lg:rounded-none">
                          TRENDY WUDPLAST (WPC)
                        </th>
                        <th className="text-center p-5 font-serif font-bold text-foreground">Traditional Wood</th>
                        <th className="text-center p-5 font-serif font-bold text-foreground">PVC Foam Board</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row) => (
                        <tr key={row.feature} className="border-b last:border-b-0 hover:bg-muted/50 transition-colors">
                          <td className="p-5 font-medium text-foreground">{row.feature}</td>
                          <td className="p-5 text-center bg-primary/5">
                            <div className="flex flex-col items-center justify-center gap-1">
                              {getStatusIcon(row.trendy.status)}
                              <span className="text-sm font-medium text-primary">{row.trendy.text}</span>
                            </div>
                          </td>
                          <td className="p-5 text-center">
                            <div className="flex flex-col items-center justify-center gap-1">
                              {getStatusIcon(row.wood.status)}
                              <span className="text-sm text-muted-foreground">{row.wood.text}</span>
                            </div>
                          </td>
                          <td className="p-5 text-center">
                            <div className="flex flex-col items-center justify-center gap-1">
                              {getStatusIcon(row.pvc.status)}
                              <span className="text-sm text-muted-foreground">{row.pvc.text}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </div>
          </motion.div>
        </section>

        {/* Products Grid Section */}
        <section id="product-range" className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Our Product Range
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {products.map((product) => (
                <motion.div key={product.id} variants={itemVariants} className="h-full">
                  <Card className="group flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-serif">{product.title}</CardTitle>
                      <CardDescription className="font-sans pt-2">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow p-6 pt-0">
                      <ul className="space-y-3 mb-6">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                            <Check className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto">
                        {product.priceRange && (
                          <p className="text-lg font-semibold text-primary mb-4 font-sans">{product.priceRange}</p>
                        )}
                        <Button asChild className="w-full group/button">
                          <Link href={product.href}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Note: I'm leaving your ContactSection as is, since it will likely handle its own internal animations or just display normally at the bottom! */}
        <ContactSection />
      </main>
    </div>
  )
}