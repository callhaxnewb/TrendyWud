// app/products/wpc-boards/page.tsx

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Layers, Zap, Paintbrush, RotateCcw, Shield, Recycle } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Versatile WPC Boards | TRENDY WUDPLAST",
  description:
    "From furniture making to architectural elements, our WPC boards offer the versatility and performance you need for any project.",
}

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
      image: "/wpc-furniture-application.png",
    },
    {
      title: "Interior Paneling",
      description: "Wall cladding, decorative panels",
      image: "/modern-wpc-wood-interior.png",
    },
    {
      title: "Architectural Elements",
      description: "Room dividers, false ceilings",
      image: "/wpc-architectural-elements.png",
    },
    {
      title: "Display Units",
      description: "Retail displays, exhibition stands",
      image: "/wpc-display-units.png",
    },
]

const relatedProducts = [
    {
      title: "WPC Doors",
      description: "Complete your project with our matching WPC doors.",
      image: "/wpc-door-product.png",
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
  return (
    <div className="bg-background">
      <Navigation isProductPage={true} />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white">
            <div className="absolute inset-0">
                <Image
                    src="/wpc-furniture-architecture.png"
                    alt="WPC Boards used in modern architecture"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
            </div>
            <div className="container relative z-10 mx-auto px-4 text-left">
                <nav className="text-sm mb-4">
                    <Link href="/" className="opacity-80 hover:opacity-100">Home</Link>
                    <span className="mx-2 opacity-50">/</span>
                    <Link href="/products" className="opacity-80 hover:opacity-100">Products</Link>
                    <span className="mx-2 opacity-50">/</span>
                    <span className="font-medium">WPC Boards</span>
                </nav>
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                        Versatile WPC Boards
                    </h1>
                    <p className="text-lg md:text-xl text-white/80">
                        From custom furniture to large-scale architectural elements, our WPC boards offer the performance and flexibility your projects demand.
                    </p>
                </div>
            </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">The Foundation of Quality Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-sans">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">Technical Specifications</h2>
            <div className="max-w-4xl mx-auto bg-background rounded-xl shadow-lg border overflow-hidden">
              <table className="w-full">
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="p-4 font-medium text-foreground w-1/3">{spec.label}</td>
                      <td className="p-4 text-muted-foreground">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">Perfect For Any Setting</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow rounded-lg">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={app.image || "/placeholder.svg"}
                      alt={app.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    {/* FIX: Made the gradient stronger and taller for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  {/* FIX: Changed positioning to flexbox for better control and spacing */}
                  <div className="absolute inset-0 flex flex-col justify-end p-10">
                      <CardTitle className="text-lg font-serif text-white">{app.title}</CardTitle>
                      <CardDescription className="text-white/80 font-sans text-sm">{app.description}</CardDescription>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">Complete Your Project</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedProducts.map((product) => (
                <Card key={product.title} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-serif">{product.title}</CardTitle>
                    <CardDescription className="font-sans pt-1">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full group/button">
                      <Link href={product.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

         <ContactSection variant="compact" />
      </main>
      <Footer />
    </div>
  )
}