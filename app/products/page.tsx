import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, AlertTriangle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium WPC Products | TRENDY WUDPLAST",
  description:
    "Discover our complete range of sustainable, durable WPC solutions including doors, frames, and boards for modern construction.",
}

export default function ProductsPage() {
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
    {
      feature: "Price",
      trendy: { status: "moderate", text: "Moderate" },
      wood: { status: "moderate", text: "Varies" },
      pvc: { status: "excellent", text: "Low" },
    },
    {
      feature: "Lifespan",
      trendy: { status: "excellent", text: "Very Long" },
      wood: { status: "moderate", text: "Moderate" },
      pvc: { status: "moderate", text: "Moderate" },
    },
  ]

  const products = [
    {
      id: "wpc-doors",
      title: "WPC Doors",
      description:
        "Premium doors that combine the beauty of wood with the durability of composite materials. Perfect for residential and commercial applications.",
      image: "/modern-wpc-door-luxury-home.png",
      features: [
        "Water Resistant & Termite Proof",
        "Low Maintenance & Long-Lasting",
        "Eco-Friendly & Sustainable",
        "Multiple Design Options",
      ],
      priceRange: "Starting from ₹8,500",
      href: "/products/wpc-doors",
    },
    {
      id: "door-frames",
      title: "Door Frames",
      description:
        "Precision-engineered frames that provide perfect fit and lasting performance. Designed to complement our WPC doors seamlessly.",
      image: "/precision-door-frame.png",
      features: [
        "Perfect Fit & Easy Installation",
        "Weather Resistant & Durable",
        "Coordinated with Door Colors",
        "Professional Grade Quality",
      ],
      priceRange: "Starting from ₹3,200",
      href: "/products/door-frames",
    },
    {
      id: "wpc-boards",
      title: "WPC Boards",
      description:
        "Versatile boards for various applications, from furniture to architectural elements. High strength with smooth finish.",
      image: "/wpc-furniture-architecture.png",
      features: ["Versatile Applications", "High Strength & Smooth Finish", "Easy to Work With", "100% Recyclable"],
      priceRange: "Starting from ₹85 per sq.ft",
      href: "/products/wpc-boards",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <Check className="h-5 w-5 text-green-600" />
      case "poor":
        return <X className="h-5 w-5 text-red-600" />
      case "moderate":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />
      default:
        return null
    }
  }

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
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <Button asChild>
                <Link href="#contact">Contact Us</Link>
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
          <span className="text-primary">Products</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Premium WPC Products for Every Need</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of sustainable, durable WPC solutions designed for modern construction
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Revolutionizing Construction with WPC Technology</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Wood Plastic Composite (WPC) represents the future of sustainable building materials. Combining the
              natural beauty of wood with the durability of engineered composites, our products deliver superior
              performance while reducing environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why TRENDY WUDPLAST Leads</h2>
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center p-4 font-semibold text-white bg-primary rounded-tl-lg">
                      TRENDY WUDPLAST (WPC)
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-900">Traditional Wood</th>
                    <th className="text-center p-4 font-semibold text-gray-900">PVC Foam Board</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="p-4 text-center bg-green-50">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(row.trendy.status)}
                          <span className="font-medium text-green-800">{row.trendy.text}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(row.wood.status)}
                          <span>{row.wood.text}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(row.pvc.status)}
                          <span>{row.pvc.text}</span>
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

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Product Range</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{product.title}</CardTitle>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-lg font-semibold text-primary mb-4">{product.priceRange}</p>
                    <Button asChild className="w-full group">
                      <Link href={product.href}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">Get expert guidance and custom quotes for your WPC requirements</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Call: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg" asChild>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </a>
        </Button>
      </div>
    </div>
  )
}
