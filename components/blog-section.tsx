import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "5 Benefits of Choosing WPC Doors for Your Home",
    date: "March 15, 2024",
    preview: "Discover why WPC doors are becoming the preferred choice for modern homeowners...",
    image: "/12_Blog1.png",
    slug: "benefits-wpc-doors-home",
  },
  {
    title: "Sustainable Construction: The WPC Advantage",
    date: "March 10, 2024",
    preview: "Learn how WPC materials contribute to eco-friendly building practices...",
    image: "/13_Blog2.png",
    slug: "sustainable-construction-wpc-advantage",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Latest from Our Blog</h2>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends and insights in WPC technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-[2/1] overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground font-sans mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">{article.title}</h3>
                <p className="text-muted-foreground font-sans mb-4 leading-relaxed">{article.preview}</p>
                <Link href={`/blog/${article.slug}`}>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-sans">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg" className="font-sans bg-transparent">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
