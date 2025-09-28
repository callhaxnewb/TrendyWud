import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Architect, RK Associates",
    content:
      "TRENDY WUDPLAST has been our go-to supplier for premium WPC doors. Their quality is exceptional and the lead-free guarantee gives us confidence in recommending them to our clients.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Interior Designer, Creative Spaces",
    content:
      "The aesthetic appeal and durability of their WPC products is outstanding. Our clients love the modern look and the peace of mind that comes with termite-resistant materials.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Project Manager, Metro Constructions",
    content:
      "Working with TRENDY WUDPLAST has been a game-changer. Their products are eco-friendly, durable, and the installation process is seamless. Highly recommended for commercial projects.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">What Our Partners Say</h2>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Trusted by architects, designers, and builders across the industry for our commitment to quality and
            sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground font-sans mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-border pt-4">
                  <h4 className="font-serif font-bold text-card-foreground mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground font-sans">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
