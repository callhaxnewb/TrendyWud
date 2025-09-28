import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Droplets, Wrench, Leaf, CheckCircle, Zap, Mountain, Recycle } from "lucide-react"

const products = [
  {
    name: "WPC Doors",
    description: "Premium doors that combine the beauty of wood with the durability of composite materials.",
    image: "/placeholder-1mfcb.png",
    href: "/products/wpc-doors",
    features: [
      { icon: Droplets, text: "Water Resistant" },
      { icon: Shield, text: "Termite Proof" },
      { icon: Wrench, text: "Low Maintenance" },
      { icon: Leaf, text: "Eco-Friendly" },
    ],
  },
  {
    name: "Door Frames",
    description: "Precision-engineered frames that provide perfect fit and lasting performance.",
    image: "/placeholder-7gk5n.png",
    href: "/products/door-frames",
    features: [
      { icon: CheckCircle, text: "Perfect Fit" },
      { icon: Zap, text: "Easy Installation" },
      { icon: Mountain, text: "Weather Resistant" },
      { icon: Leaf, text: "Sustainable" },
    ],
  },
  {
    name: "WPC Boards",
    description: "Versatile boards for various applications, from furniture to architectural elements.",
    image: "/wpc-boards-panels.png",
    href: "/products/wpc-boards",
    features: [
      { icon: Zap, text: "Versatile Use" },
      { icon: Mountain, text: "High Strength" },
      { icon: CheckCircle, text: "Smooth Finish" },
      { icon: Recycle, text: "Recyclable" },
    ],
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Our Premium Collection</h2>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Discover our range of sustainable WPC products, each crafted with precision and designed to elevate your
            space with lasting beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-serif font-bold text-card-foreground mb-3">{product.name}</h3>
                <p className="text-muted-foreground font-sans mb-6 flex-grow">{product.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-sans text-card-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-auto bg-transparent" asChild>
                  <Link href={product.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans px-8 py-6"
            asChild
          >
            <Link href="/products">View Complete Catalog</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
