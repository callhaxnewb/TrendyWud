// app/blog/[slug]/page.tsx
"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactSection from "@/components/contact-section"

const getArticleBySlug = (slug: string) => {
  const articles = {
    "complete-guide-wpc-doors": {
      title: "The Complete Guide to WPC Doors: Benefits & Installation",
      category: "Knowledge Base",
      author: "TRENDY WUDPLAST Technical Team",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "/3_WPCDoorsProductCard.png",
      content: `
        <p class="text-xl text-muted-foreground font-sans italic leading-relaxed mb-10">For decades, the construction industry accepted a frustrating compromise: we loved the look of natural wood, but we hated the inevitable maintenance. Doors would swell during the monsoons, warp in the summer heat, and eventually fall prey to termites. Wood Plastic Composite (WPC) has fundamentally changed this reality.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">The Anatomy of a WPC Door</h2>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-4">WPC is exactly what it sounds like—a highly engineered hybrid. By taking fine wood fibers and binding them with high-density thermoplastics under extreme heat and pressure, we create a material that refuses to compromise. It has the weight, feel, and workability of wood, but the impenetrable armor of a polymer.</p>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-8">This isn't just mixing sawdust and plastic. It is a precise matrix that ensures the final product will not expand or contract when the humidity fluctuates. For architects and homeowners alike, this means a door that fits its frame perfectly on day one, and day ten thousand.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">The Non-Negotiable Benefits</h2>
        
        <h3 class="text-xl font-serif font-bold text-foreground mt-8 mb-3">1. Absolute Moisture Immunity</h3>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-6">Traditional wooden bathroom doors inevitably rot from the bottom up. Because the polymer matrix in WPC encapsulates the wood fibers entirely, water cannot penetrate the surface. You can literally hose a WPC door down, making it the ultimate solution for bathrooms, kitchens, and exterior facing areas.</p>

        <h3 class="text-xl font-serif font-bold text-foreground mt-8 mb-3">2. The End of the Termite Threat</h3>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-6">Termites are a silent, expensive nightmare for property owners. Because WPC lacks the continuous cellulose structure that insects feed on, it is inherently termite-proof. No chemical sprays, no toxic treatments—just total peace of mind.</p>

        <h3 class="text-xl font-serif font-bold text-foreground mt-8 mb-3">3. Acoustic and Thermal Insulation</h3>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-8">Thanks to its dense core and engineered structure, WPC provides excellent sound dampening. Whether it's keeping street noise out of a bedroom or maintaining privacy in a corporate boardroom, the material acts as a natural acoustic barrier.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">Installation: Familiar Yet Superior</h2>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-4">One of the greatest advantages of WPC is that carpenters don't need to learn a new trade. WPC doors can be cut, routed, and drilled using standard woodworking tools. However, because they are significantly denser than cheap hollow-core doors, they offer exceptional screw-holding capacity.</p>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-8">When hanging a WPC door, the hinges grip tighter and stay secure longer, preventing the dreaded "door sag" that plagues heavy wooden doors over time.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">The Bottom Line</h2>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-8">Choosing a door is no longer about picking the lesser of two evils. WPC doors offer the warmth and aesthetic appeal of traditional timber, but engineer away all of its flaws. It is simply a smarter way to build.</p>
      `,
    },
    "sustainable-building-wpc-materials": {
      title: "Sustainable Building: WPC Materials & The Environment",
      category: "Sustainability",
      author: "TRENDY WUDPLAST Eco Team",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/16_blogPic.png",
      content: `
        <p class="text-xl text-muted-foreground font-sans italic leading-relaxed mb-10">The construction sector is at a crossroads. As global demand for housing and infrastructure skyrockets, the environmental toll of traditional building materials has become impossible to ignore. We can no longer afford to clear-cut mature forests just to build doors and frames.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">Waste to Wealth: The WPC Formula</h2>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-6">Wood Plastic Composite (WPC) is born from the principles of the circular economy. Instead of logging healthy trees, WPC manufacturing utilizes reclaimed wood fibers—often the byproducts of sawmills and agricultural waste that would otherwise be burned or sent to a landfill.</p>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-8">These fibers are then bonded with thermoplastics. By upcycling these materials, WPC actively reduces the burden on our planet's waste management systems while preserving our natural forest canopies.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">Zero Deforestation Footprint</h2>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-6">Consider the lifecycle of a traditional solid teak or mahogany door. It takes decades for a tree to mature to the point where it can be harvested for timber. Once cut, only a fraction of that tree is usable for premium doors. WPC completely bypasses this destructive cycle. When you choose WPC, you are making a direct, quantifiable decision to leave trees in the ground where they belong.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">Longevity is the Ultimate Sustainability</h2>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-4">True sustainability isn't just about how a product is made; it's about how long it lasts. A product that needs to be replaced every five years requires a constant cycle of manufacturing, shipping, and disposal.</p>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-8">Because WPC is impervious to rot, moisture, and termites, its lifespan dramatically exceeds that of standard timber and MDF. A WPC board installed today will perform flawlessly for decades, drastically reducing the lifetime carbon footprint of the building it occupies.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">A Toxin-Free Environment</h2>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-8">Traditional wood products often require harsh chemical treatments to protect them from insects and the elements, while plywoods heavily rely on formaldehyde-based adhesives that off-gas into indoor air. TRENDY WUDPLAST WPC products are free from toxic chemicals and harmful emissions, ensuring safer air quality for your family or workforce.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">Looking Forward</h2>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-8">Beautiful spaces shouldn't cost the earth. By embracing WPC technology, architects, builders, and homeowners are proving that you can achieve premium aesthetics and unmatched durability while actively participating in global conservation efforts.</p>
      `,
    },
    "wpc-vs-traditional-wood-cost-analysis": {
      title: "WPC vs Traditional Wood: A Comprehensive Cost Analysis",
      category: "Industry Insights",
      author: "TRENDY WUDPLAST Analytics",
      date: "February 28, 2024",
      readTime: "10 min read",
      image: "/14_DoorFrameProd1.png",
      content: `
        <p class="text-xl text-muted-foreground font-sans italic leading-relaxed mb-10">In construction, the price tag on the shelf rarely tells the whole story. When comparing Wood Plastic Composite (WPC) to traditional wood, many buyers only look at the initial purchase price. But to understand the true financial impact, we have to look at the Total Cost of Ownership (TCO) over a 10 to 15-year horizon.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">The Illusion of "Cheap" Wood</h2>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-6">Commercial plywood or flush doors might present a lower upfront cost, while premium hardwoods like Teak demand a massive initial premium. WPC sits comfortably in the middle at the time of purchase. However, the moment a traditional wooden door is installed, the invisible meter starts running.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">Breaking Down the Hidden Costs</h2>
        
        <h3 class="text-xl font-serif font-bold text-foreground mt-8 mb-3">The Polishing and Painting Tax</h3>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-6">Natural wood requires regular sealing, polishing, or painting to maintain its aesthetic and protect it from the elements. Over a decade, a wooden door will typically need to be refinished 3 to 4 times. When you factor in the cost of premium polish, primer, and skilled labor, the maintenance cost quickly eclipses the original price of the door. WPC, on the other hand, comes pre-finished. It never needs a coat of paint. A simple wipe down is all it takes to keep it looking brand new.</p>

        <h3 class="text-xl font-serif font-bold text-foreground mt-8 mb-3">Pest Control and Damage</h3>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-6">If you live in an area prone to termites or borers, wooden doors are a liability. Annual anti-termite treatments add up. Worse, if a termite infestation takes hold, the door, the frame, and the labor to replace them must be paid for all over again. WPC's synthetic matrix makes it 100% termite-proof from day one, permanently eliminating this recurring expense.</p>

        <h3 class="text-xl font-serif font-bold text-foreground mt-8 mb-3">Weathering and Replacement</h3>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-8">Moisture is wood's greatest enemy. Bathroom doors or external frames made of wood absorb humidity, causing them to swell and stick in the monsoon, and shrink and crack in the summer. Eventually, water damage leads to rot, necessitating a full replacement. WPC's 100% waterproof nature means it has a zero-percent failure rate due to moisture. You buy it once, and you are done.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">The ROI of Zero Maintenance</h2>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-4">When we model the costs over a 15-year period, the data is striking. Traditional wood starts cheaper but its cumulative cost curve climbs steeply year after year due to labor, chemicals, and repairs.</p>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-8">WPC represents a flat line. The price you pay on day one is essentially the only price you will ever pay. For large-scale projects like hotels, hospitals, or residential complexes with hundreds of doors, this zero-maintenance characteristic translates to millions of rupees saved in operational budgets.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">The Verdict</h2>
        <p class="text-lg text-muted-foreground font-sans leading-relaxed mb-8">WPC is not just a building material; it is a financial strategy. By eliminating the unpredictable costs of maintenance, pest control, and premature replacement, WPC transforms doors and frames from ongoing liabilities into lifelong assets.</p>
      `,
    }
  }

  return articles[slug as keyof typeof articles] || null
}

export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const article = getArticleBySlug(resolvedParams.slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-background pt-24 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-serif font-bold text-foreground mb-6">Article Not Found</h1>
        <Link href="/blog">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">Return to Journal</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      
      {/* Breadcrumb */}
      <div className="bg-muted pt-28 lg:pt-32 pb-4 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="flex items-center space-x-2 text-sm font-sans text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Journal</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">{article.title}</span>
          </nav>
        </div>
      </div>

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        
        {/* Centered Article Header */}
        <header className="text-center mb-12">
          <div className="mb-6">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-sans">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-sans text-muted-foreground uppercase tracking-wider font-medium">
            <span>By {article.author}</span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              {article.readTime}
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <div className="relative aspect-video w-full mb-16 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Centered Reading Content */}
        <div className="max-w-3xl mx-auto">
          {/* I have removed the Tailwind Typography 'prose' classes here, so our custom HTML classes from the data object will take full priority! */}
          <div dangerouslySetInnerHTML={{ __html: article.content }} />

          {/* Minimal Social Share Footer */}
          <footer className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/blog" className="inline-flex items-center font-sans font-medium text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </Link>
            
            <div className="flex items-center space-x-4">
              <span className="font-sans text-sm font-medium text-muted-foreground uppercase tracking-wider">Share</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="rounded-full bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary border-border/50">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary border-border/50">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary border-border/50">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </article>

      <div className="border-t border-border/50">
        <ContactSection variant="compact" />
      </div>
      
    </div>
  )
}