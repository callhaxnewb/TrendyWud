// app/products/page.tsx

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, AlertTriangle, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Premium WPC Products | TRENDY WUDPLAST",
  description:
    "Discover our complete range of sustainable, durable WPC solutions including doors, frames, and boards for modern construction.",
}

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
      image: "/wpc-door-product.png",
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
      image: "/wpc-furniture-architecture.png",
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
  return (
    <div className="bg-background">
      <Navigation isProductPage={true} />
      
      <main>
        {/* Hero Section with Background Image */}
        {/* Hero Section with Background Image */}
        <section className="relative flex items-end h-[50vh] text-white">
            <div className="absolute inset-0">
                <Image
                    src="/wpc-products-showcase-hero.png"
                    alt="WPC Products Showcase"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-foreground/70" />
            </div>
            <div className="container relative z-10 mx-auto px-4 pb-16 sm:pb-20 text-left">
                <nav className="text-sm mb-4">
                    <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link>
                    <span className="mx-2 opacity-50">/</span>
                    <span className="font-medium">Products</span>
                </nav>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                    Our Premium WPC Collection
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-3xl">
                    Discover our complete range of sustainable, durable WPC solutions designed for modern construction.
                </p>
            </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Revolutionizing Construction with WPC</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wood Plastic Composite represents the future of sustainable building materials. Our products deliver superior performance by combining the natural beauty of wood with the durability of engineered composites.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">Why TRENDY WUDPLAST Leads</h2>
            <div className="max-w-6xl mx-auto overflow-x-auto">
                <div className="bg-background rounded-xl shadow-lg border">
                  <table className="w-full min-w-[700px]">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-5 font-serif font-bold text-foreground">Feature</th>
                        <th className="text-center p-5 font-serif font-bold text-primary-foreground bg-primary">
                          TRENDY WUDPLAST (WPC)
                        </th>
                        <th className="text-center p-5 font-serif font-bold text-foreground">Traditional Wood</th>
                        <th className="text-center p-5 font-serif font-bold text-foreground">PVC Foam Board</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row) => (
                        <tr key={row.feature} className="border-b last:border-b-0">
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
          </div>
        </section>

        {/* Products Grid Section */}
        <section id="product-range" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">Our Product Range</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                      <p className="text-lg font-semibold text-primary mb-4 font-sans">{product.priceRange}</p>
                      <Button asChild className="w-full group/button">
                        <Link href={product.href}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}