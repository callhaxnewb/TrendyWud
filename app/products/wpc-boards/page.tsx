import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Layers, Zap, Paintbrush, RotateCcw, Shield, Recycle } from "lucide-react"

export const metadata: Metadata = {
  title: "Versatile WPC Boards | TRENDY WUDPLAST",
  description:
    "From furniture making to architectural elements, our WPC boards offer the versatility and performance you need for any project.",
}

export default function WPCBoardsPage() {
  const benefits = [
    {
      icon: <Layers className="h-8 w-8 text-blue-600" />,
      title: "Versatile Applications",
      description: "Suitable for furniture, paneling, displays, and more",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "High Strength",
      description: "Superior load-bearing capacity for structural applications",
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-purple-600" />,
      title: "Smooth Finish",
      description: "Ready-to-use surface that accepts paints and laminates",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Easy Workability",
      description: "Cuts, drills, and shapes like natural wood",
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-orange-600" />,
      title: "Dimensional Stability",
      description: "Won't warp, crack, or split over time",
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-500" />,
      title: "100% Recyclable",
      description: "Environmentally responsible choice",
    },
  ]

  const specifications = [
    { label: "Standard Sizes", value: "8ft x 4ft, 10ft x 4ft, 12ft x 4ft" },
    { label: "Thickness Options", value: "6mm, 9mm, 12mm, 18mm, 25mm" },
    { label: "Material Composition", value: "60% Wood Fiber, 35% HDPE, 5% Additives" },
    { label: "Density", value: "0.9 - 1.2 g/cm³" },
    { label: "Flexural Strength", value: "25-30 MPa" },
    { label: "Surface Finish", value: "Smooth both sides" },
    { label: "Edge Treatment", value: "Square edge, rounded edge available" },
    { label: "Color Options", value: "Natural, White, Custom colors available" },
    { label: "Sheet Weight", value: "Varies by thickness (12-45 kg per sheet)" },
  ]

  const applications = [
    {
      title: "Furniture Making",
      description: "Cabinets, wardrobes, shelving, tables",
      image: "/wpc-furniture-application.png",
    },
    {
      title: "Interior Paneling",
      description: "Wall cladding, decorative panels",
      image: "/placeholder-sc7i8.png",
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

  const installationSteps = [
    {
      step: 1,
      title: "Plan & Measure",
      description: "Plan your project and measure required dimensions",
    },
    {
      step: 2,
      title: "Cut to Size",
      description: "Cut boards using standard woodworking tools",
    },
    {
      step: 3,
      title: "Assemble",
      description: "Join pieces using screws, adhesives, or hardware",
    },
    {
      step: 4,
      title: "Finish",
      description: "Apply paint, laminate, or desired finish",
    },
  ]

  const comparisonData = [
    {
      feature: "Workability",
      wpc: "Excellent - Like wood",
      plywood: "Good - Standard tools",
      mdf: "Good - Dust issues",
    },
    {
      feature: "Water Resistance",
      wpc: "Excellent - 100% waterproof",
      plywood: "Poor - Delaminates",
      mdf: "Poor - Swells badly",
    },
    {
      feature: "Durability",
      wpc: "Excellent - 15+ years",
      plywood: "Good - 8-12 years",
      mdf: "Moderate - 5-8 years",
    },
    {
      feature: "Environmental Impact",
      wpc: "Low - Recycled content",
      plywood: "High - Tree cutting",
      mdf: "Moderate - Formaldehyde",
    },
    {
      feature: "Maintenance",
      wpc: "None required",
      plywood: "Regular treatment",
      mdf: "Avoid moisture",
    },
  ]

  const relatedProducts = [
    {
      title: "WPC Doors",
      description: "Complete your project with matching doors",
      image: "/premium-wpc-door-installation-luxury-home.png",
      href: "/products/wpc-doors",
    },
    {
      title: "Door Frames",
      description: "Precision frames for perfect installation",
      image: "/precision-door-frame.png",
      href: "/products/door-frames",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              TRENDY WUDPLAST
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/products" className="text-gray-600 hover:text-primary transition-colors">
                All Products
              </Link>
              <Link href="/products/wpc-doors" className="text-gray-600 hover:text-primary transition-colors">
                WPC Doors
              </Link>
              <Link href="/products/door-frames" className="text-gray-600 hover:text-primary transition-colors">
                Door Frames
              </Link>
              <Button asChild size="sm">
                <a href="https://wa.me/919876543210">WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">WPC Boards</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Versatile WPC Boards</h1>
              <p className="text-xl text-gray-600">Endless Possibilities</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From furniture making to architectural elements, our WPC boards offer the versatility and performance
                you need for any project.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Versatile Use
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  High Strength
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Smooth Finish
                </Badge>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                  Recyclable
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Request Quote
                </Button>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/wpc-furniture-architecture.png"
                alt="WPC Boards in Furniture and Architecture"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our WPC Boards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technical Specifications</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r border-gray-200">{spec.label}</td>
                      <td className="px-6 py-4 text-gray-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{app.title}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Working with WPC Boards</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {installationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Compares</h2>
          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center p-4 font-semibold text-white bg-primary">TRENDY WUDPLAST WPC</th>
                    <th className="text-center p-4 font-semibold text-gray-900">Plywood</th>
                    <th className="text-center p-4 font-semibold text-gray-900">MDF</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="p-4 text-center bg-green-50 font-medium text-green-800">{row.wpc}</td>
                      <td className="p-4 text-center">{row.plywood}</td>
                      <td className="p-4 text-center">{row.mdf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Complete Your Project</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={product.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance and custom quotes for your WPC board requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Call Now: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
