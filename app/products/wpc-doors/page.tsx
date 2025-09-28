import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Droplets, Leaf, Volume2, Flame, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium WPC Doors | TRENDY WUDPLAST",
  description:
    "Experience the perfect fusion of natural wood aesthetics and advanced composite technology with our premium WPC doors.",
}

export default function WPCDoorsPage() {
  const benefits = [
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "100% Waterproof",
      description: "Never worry about moisture damage or warping",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Termite & Pest Resistant",
      description: "Natural protection without harmful chemicals",
    },
    {
      icon: <Wrench className="h-8 w-8 text-purple-600" />,
      title: "Low Maintenance",
      description: "No polishing, painting, or frequent repairs needed",
    },
    {
      icon: <Volume2 className="h-8 w-8 text-orange-600" />,
      title: "Sound Insulation",
      description: "Superior acoustic properties for peaceful spaces",
    },
    {
      icon: <Flame className="h-8 w-8 text-red-600" />,
      title: "Fire Retardant",
      description: "Enhanced safety with flame-resistant properties",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Eco-Friendly",
      description: "Made from 65% recycled materials",
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
      title: "Institutional",
      description: "Schools, colleges, government buildings",
      image: "/placeholder-syvry.png",
    },
  ]

  const installationSteps = [
    {
      step: 1,
      title: "Measure & Select",
      description: "Measure door opening and select appropriate frame",
    },
    {
      step: 2,
      title: "Install Frame",
      description: "Install door frame using screws or adhesive mounting",
    },
    {
      step: 3,
      title: "Hang Door",
      description: "Hang door using standard hinges and hardware",
    },
    {
      step: 4,
      title: "Adjust & Install",
      description: "Adjust door alignment and install locks/handles",
    },
    {
      step: 5,
      title: "Quality Check",
      description: "Apply final touches and quality check",
    },
  ]

  const comparisonData = [
    {
      feature: "Durability",
      wpc: "Excellent - 10+ years",
      wood: "Good - 5-8 years",
      steel: "Excellent - 10+ years",
    },
    {
      feature: "Maintenance",
      wpc: "Very Low",
      wood: "High - Regular polishing",
      steel: "Low - Occasional painting",
    },
    {
      feature: "Water Resistance",
      wpc: "100% Waterproof",
      wood: "Poor - Swells & warps",
      steel: "Good - May rust",
    },
    {
      feature: "Aesthetics",
      wpc: "Natural wood look",
      wood: "Natural beauty",
      steel: "Industrial look",
    },
    {
      feature: "Installation",
      wpc: "Easy - Standard tools",
      wood: "Moderate",
      steel: "Complex - Heavy",
    },
    {
      feature: "Cost",
      wpc: "Moderate",
      wood: "Varies widely",
      steel: "High",
    },
  ]

  const relatedProducts = [
    {
      title: "Door Frames",
      description: "Precision-engineered frames for perfect fit",
      image: "/precision-door-frame.png",
      href: "/products/door-frames",
    },
    {
      title: "WPC Boards",
      description: "Versatile boards for furniture and architecture",
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
              <Link href="/products/door-frames" className="text-gray-600 hover:text-primary transition-colors">
                Door Frames
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
          <span className="text-primary">WPC Doors</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Premium WPC Doors</h1>
              <p className="text-xl text-gray-600">Where Beauty Meets Durability</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience the perfect fusion of natural wood aesthetics and advanced composite technology. Our WPC
                doors offer unmatched performance for modern homes and commercial spaces.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Water Resistant
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Termite Proof
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Low Maintenance
                </Badge>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                  Eco-Friendly
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
                src="/premium-wpc-door-installation-luxury-home.png"
                alt="Premium WPC Door Installation"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Product Gallery</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src="/wpc-door-product.png"
                alt="WPC Door Product"
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
              <img
                src="/wpc-door-angle.png"
                alt="WPC Door Angle View"
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
              <img
                src="/placeholder-sbph5.png"
                alt="WPC Door Texture"
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
              <img
                src="/wpc-door-installation.png"
                alt="Installation Process"
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
              <img
                src="/wpc-door-colors.png"
                alt="Color Options"
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
              <img
                src="/wpc-door-hardware.png"
                alt="Hardware Options"
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our WPC Doors</h2>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Installation Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
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
                    <th className="text-center p-4 font-semibold text-gray-900">Steel Doors</th>
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
            Get expert guidance and custom quotes for your WPC door requirements
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
