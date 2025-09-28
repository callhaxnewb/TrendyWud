import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Settings, Zap, CloudRain, Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Precision Door Frames | TRENDY WUDPLAST",
  description:
    "Engineered for precision and built to last. Our WPC door frames ensure perfect alignment and seamless integration.",
}

export default function DoorFramesPage() {
  const benefits = [
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "Precision Engineering",
      description: "CNC-machined for perfect door alignment",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Easy Installation",
      description: "Quick-mount system reduces installation time",
    },
    {
      icon: <CloudRain className="h-8 w-8 text-gray-600" />,
      title: "Weather Resistant",
      description: "Superior protection against environmental elements",
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "Color Coordinated",
      description: "Perfectly matched with our door collection",
    },
  ]

  const specifications = [
    { label: "Standard Dimensions", value: "2100mm x 100mm x 35mm" },
    { label: "Material Composition", value: "65% Wood Fiber, 30% HDPE, 5% Additives" },
    { label: "Density", value: "1.0 - 1.3 g/cm³" },
    { label: "Moisture Absorption", value: "< 0.5%" },
    { label: "Load Bearing Capacity", value: "Up to 80kg per door" },
    { label: "Installation Method", value: "Screw Mount or Adhesive" },
    { label: "Finish Options", value: "Smooth, Textured, Wood Grain" },
    { label: "Color Matching", value: "Coordinated with WPC Door Colors" },
    { label: "Jamb Extensions", value: "Available for different wall thicknesses" },
    { label: "Hardware Pre-drilling", value: "Optional hinge and lock preparations" },
  ]

  const applications = [
    {
      title: "New Construction",
      description: "Frame installation during construction phase",
      image: "/door-frame-installation.png",
    },
    {
      title: "Renovation Projects",
      description: "Retrofit existing door openings",
      image: "/commercial-door-frame-installation.png",
    },
    {
      title: "Commercial Installations",
      description: "Office buildings, retail spaces",
      image: "/placeholder-ewfrf.png",
    },
  ]

  const installationSteps = [
    {
      step: 1,
      title: "Prepare Opening",
      description: "Clean and measure door opening accurately",
    },
    {
      step: 2,
      title: "Position Frame",
      description: "Place frame in opening and check alignment",
    },
    {
      step: 3,
      title: "Secure Frame",
      description: "Fix frame using screws or adhesive mounting",
    },
    {
      step: 4,
      title: "Final Check",
      description: "Verify alignment and make final adjustments",
    },
  ]

  const comparisonData = [
    {
      feature: "Precision",
      wpc: "CNC Machined - Perfect fit",
      wood: "Hand crafted - Variable",
      steel: "Machine made - Good",
    },
    {
      feature: "Installation Time",
      wpc: "Quick - 30 minutes",
      wood: "Moderate - 1 hour",
      steel: "Long - 2+ hours",
    },
    {
      feature: "Weather Resistance",
      wpc: "Excellent - All weather",
      wood: "Poor - Swells/shrinks",
      steel: "Good - May rust",
    },
    {
      feature: "Maintenance",
      wpc: "None required",
      wood: "Regular treatment needed",
      steel: "Periodic painting",
    },
    {
      feature: "Weight",
      wpc: "Light - Easy handling",
      wood: "Moderate",
      steel: "Heavy - Difficult",
    },
  ]

  const relatedProducts = [
    {
      title: "WPC Doors",
      description: "Premium doors that perfectly match our frames",
      image: "/premium-wpc-door-installation-luxury-home.png",
      href: "/products/wpc-doors",
    },
    {
      title: "WPC Boards",
      description: "Versatile boards for complete project solutions",
      image: "/wpc-furniture-architecture.png",
      href: "/products/wpc-boards",
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
              <Link href="/products/wpc-boards" className="text-gray-600 hover:text-primary transition-colors">
                WPC Boards
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
          <span className="text-primary">Door Frames</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Precision Door Frames</h1>
              <p className="text-xl text-gray-600">Perfect Fit, Every Time</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Engineered for precision and built to last. Our WPC door frames ensure perfect alignment and seamless
                integration with our door collection.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Perfect Fit
                </Badge>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Easy Installation
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Weather Resistant
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Sustainable
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
                src="/precision-door-frame.png"
                alt="Precision Door Frame Installation"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Door Frames</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Installation Process</h2>
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
                    <th className="text-center p-4 font-semibold text-gray-900">Traditional Wood</th>
                    <th className="text-center p-4 font-semibold text-gray-900">Steel Frames</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="p-4 text-center bg-green-50 font-medium text-green-800">{row.wpc}</td>
                      <td className="p-4 text-center">{row.wood}</td>
                      <td className="p-4 text-center">{row.steel}</td>
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
            Get expert guidance and custom quotes for your door frame requirements
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
