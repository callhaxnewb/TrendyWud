// app/products/wpc-doors/page.tsx

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Droplets, Leaf, Volume2, Flame, Wrench } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Premium WPC Doors | TRENDY WUDPLAST",
  description:
    "Experience the perfect fusion of natural wood aesthetics and advanced composite technology with our premium WPC doors.",
}

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
      image: "/premium-wpc-door-installation-luxury-home.png",
    },
    {
      title: "Commercial Buildings",
      description: "Offices, retail spaces, hotels, hospitals",
      image: "/commercial-building-wpc-doors.png",
    },
    {
      title: "Hospitality Sector",
      description: "Hotels, restaurants, resorts",
      image: "/hotel-room-wpc-door.png",
    },
    {
      title: "Institutional Buildings",
      description: "Schools, colleges, government offices",
      image: "/placeholder-syvry.png",
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
      image: "/wpc-furniture-architecture.png",
      href: "/products/wpc-boards",
    },
]

export default function WPCDoorsPage() {
  return (
    <div className="bg-background">
      <Navigation isProductPage={true} />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white">
            <div className="absolute inset-0">
                <Image
                    src="/3_WPCDoorsProductCard.png"
                    alt="Luxurious WPC Door"
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
                    <span className="font-medium">WPC Doors</span>
                </nav>
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                        Premium WPC Doors
                    </h1>
                    <p className="text-lg md:text-xl text-white/80">
                        Experience the perfect fusion of natural wood aesthetics and advanced composite technology.
                    </p>
                </div>
            </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Why Choose Our WPC Doors?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center bg-background hover:shadow-lg transition-shadow">
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