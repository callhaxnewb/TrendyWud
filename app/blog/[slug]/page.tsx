import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a CMS or database
const getArticleBySlug = (slug: string) => {
  const articles = {
    "complete-guide-wpc-doors": {
      title: "The Complete Guide to WPC Doors: Benefits and Installation",
      category: "Home Improvement",
      author: {
        name: "Technical Team",
        role: "WPC Specialists",
        bio: "Our technical team consists of experienced engineers and WPC specialists with over 15 years of combined experience in wood-plastic composite manufacturing and installation.",
        image: "/team-technical.png",
      },
      date: "March 15, 2024",
      readTime: "8 min",
      image: "/wpc-door-installation.png",
      content: `
        <p>Wood Plastic Composite (WPC) doors have revolutionized the construction and home improvement industry with their unique combination of durability, aesthetics, and environmental benefits. This comprehensive guide will walk you through everything you need to know about WPC doors, from their composition to installation best practices.</p>

        <h2>What Are WPC Doors?</h2>
        <p>WPC doors are manufactured using a blend of wood fibers and thermoplastic materials, creating a composite that combines the best properties of both materials. The typical composition includes:</p>
        <ul>
          <li>50-60% wood fibers or wood flour</li>
          <li>30-40% thermoplastic (usually polyethylene or polypropylene)</li>
          <li>5-10% additives (UV stabilizers, colorants, coupling agents)</li>
        </ul>

        <h2>Key Benefits of WPC Doors</h2>
        
        <h3>Water Resistance</h3>
        <p>Unlike traditional wood doors, WPC doors offer excellent moisture resistance, making them ideal for bathrooms, kitchens, and areas with high humidity. The plastic component creates a barrier that prevents water absorption and subsequent warping or rotting.</p>

        <h3>Termite Protection</h3>
        <p>The synthetic component in WPC doors makes them naturally resistant to termites and other wood-boring insects, eliminating the need for chemical treatments and ensuring long-term durability.</p>

        <h3>Low Maintenance</h3>
        <p>WPC doors require minimal maintenance compared to solid wood doors. They don't need regular painting, staining, or sealing, saving both time and money over their lifespan.</p>

        <h3>Eco-Friendly Aspects</h3>
        <p>WPC doors contribute to environmental conservation by utilizing recycled wood waste and plastic materials, reducing the demand for virgin timber and helping divert plastic waste from landfills.</p>

        <h2>Applications and Use Cases</h2>
        
        <h3>Residential Applications</h3>
        <ul>
          <li>Interior doors for bedrooms, bathrooms, and kitchens</li>
          <li>Exterior doors for patios and balconies</li>
          <li>Closet and wardrobe doors</li>
          <li>Partition doors in modern homes</li>
        </ul>

        <h3>Commercial Applications</h3>
        <ul>
          <li>Office buildings and corporate spaces</li>
          <li>Hotels and hospitality venues</li>
          <li>Healthcare facilities</li>
          <li>Educational institutions</li>
        </ul>

        <h2>Installation Guide</h2>
        
        <h3>Pre-Installation Checklist</h3>
        <ul>
          <li>Measure door opening accurately</li>
          <li>Check frame alignment and squareness</li>
          <li>Ensure proper clearance for door swing</li>
          <li>Verify hardware compatibility</li>
        </ul>

        <h3>Step-by-Step Installation Process</h3>
        <ol>
          <li><strong>Prepare the Opening:</strong> Clean the door frame and check for any damage or irregularities.</li>
          <li><strong>Position the Door:</strong> Carefully place the WPC door in the frame, ensuring proper alignment.</li>
          <li><strong>Install Hinges:</strong> Mark hinge positions and install using appropriate screws for WPC material.</li>
          <li><strong>Hang the Door:</strong> Attach the door to the frame hinges and test the swing.</li>
          <li><strong>Install Hardware:</strong> Add door handles, locks, and other hardware as required.</li>
          <li><strong>Final Adjustments:</strong> Make any necessary adjustments for proper fit and operation.</li>
        </ol>

        <h2>Maintenance Tips</h2>
        
        <h3>Regular Cleaning</h3>
        <p>Clean WPC doors with mild soap and water. Avoid harsh chemicals or abrasive cleaners that could damage the surface finish.</p>

        <h3>Hardware Maintenance</h3>
        <p>Regularly lubricate hinges and locks to ensure smooth operation. Check and tighten screws periodically.</p>

        <h3>What to Avoid</h3>
        <ul>
          <li>Excessive force when opening or closing</li>
          <li>Exposure to extreme temperatures</li>
          <li>Sharp objects that could scratch the surface</li>
          <li>Harsh chemical cleaners</li>
        </ul>

        <h2>Conclusion</h2>
        <p>WPC doors offer an excellent balance of durability, aesthetics, and environmental responsibility. Their low maintenance requirements and superior performance in various conditions make them an ideal choice for both residential and commercial applications. When properly installed and maintained, WPC doors can provide decades of reliable service while contributing to sustainable building practices.</p>
      `,
      tags: ["WPC Doors", "Installation", "Home Improvement", "Maintenance", "Sustainability"],
    },
  }

  return articles[slug as keyof typeof articles] || null
}

const relatedArticles = [
  {
    slug: "sustainable-building-wpc-materials",
    title: "Sustainable Building: How WPC Materials Reduce Environmental Impact",
    date: "March 10, 2024",
    image: "/wpc-sustainability.png",
  },
  {
    slug: "wpc-vs-traditional-wood-cost-analysis",
    title: "WPC vs Traditional Wood: A Comprehensive Cost Analysis",
    date: "February 28, 2024",
    image: "/wpc-cost-comparison.png",
  },
  {
    slug: "wpc-door-maintenance-tips",
    title: "Essential Maintenance Tips for WPC Doors and Frames",
    date: "February 20, 2024",
    image: "/wpc-maintenance.png",
  },
  {
    slug: "commercial-wpc-applications",
    title: "Commercial Applications of WPC: Beyond Residential Use",
    date: "February 15, 2024",
    image: "/commercial-wpc.png",
  },
]

const categories = [
  "WPC Technology",
  "Sustainability",
  "Installation Tips",
  "Design Trends",
  "Product Comparison",
  "Maintenance",
  "Home Improvement",
  "Commercial Applications",
]

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{article.title}</span>
          </nav>
          <Link
            href="/blog"
            className="inline-flex items-center mt-4 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="lg:w-2/3">
            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{article.title}</h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <img
                    src={article.author.image || "/placeholder.svg"}
                    alt={article.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{article.author.name}</p>
                    <p className="text-sm text-gray-500">{article.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Share2 className="h-4 w-4" />
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full aspect-video object-cover rounded-lg"
              />
            </header>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              {/* Tags */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex items-start space-x-4">
                  <img
                    src={article.author.image || "/placeholder.svg"}
                    alt={article.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{article.author.name}</h4>
                    <p className="text-primary font-medium mb-2">{article.author.role}</p>
                    <p className="text-gray-600">{article.author.bio}</p>
                  </div>
                </div>
              </div>

              {/* Social Sharing */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-gray-900">Share this article:</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </footer>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-8 space-y-8">
              {/* Expert Consultation Card */}
              <Card className="bg-light-green">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Need Expert Advice?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get personalized consultation from our WPC specialists for your project.
                  </p>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Phone Number" type="tel" />
                    <Input placeholder="Email Address" type="email" />
                    <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Select Interest</option>
                      <option value="wpc-doors">WPC Doors</option>
                      <option value="door-frames">Door Frames</option>
                      <option value="wpc-boards">WPC Boards</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    <Textarea placeholder="Your Message" rows={3} />
                    <Button className="w-full bg-primary hover:bg-primary/90">Get Consultation</Button>
                  </form>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    <a href="#what-are-wpc-doors" className="block text-gray-600 hover:text-primary transition-colors">
                      What Are WPC Doors?
                    </a>
                    <a href="#key-benefits" className="block text-gray-600 hover:text-primary transition-colors">
                      Key Benefits of WPC Doors
                    </a>
                    <a href="#applications" className="block text-gray-600 hover:text-primary transition-colors">
                      Applications and Use Cases
                    </a>
                    <a href="#installation-guide" className="block text-gray-600 hover:text-primary transition-colors">
                      Installation Guide
                    </a>
                    <a href="#maintenance-tips" className="block text-gray-600 hover:text-primary transition-colors">
                      Maintenance Tips
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((relatedArticle) => (
                      <Link key={relatedArticle.slug} href={`/blog/${relatedArticle.slug}`} className="block group">
                        <div className="flex space-x-3">
                          <img
                            src={relatedArticle.image || "/placeholder.svg"}
                            alt={relatedArticle.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2 text-sm">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{relatedArticle.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link href="/blog" className="block mt-4">
                    <Button variant="outline" className="w-full bg-transparent">
                      View All Related
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/blog?category=${encodeURIComponent(category)}`}
                        className="block text-gray-600 hover:text-primary transition-colors py-1"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-cream">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Get Weekly Insights</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Subscribe to receive the latest WPC industry insights and expert tips.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Enter your email" type="email" />
                    <Button className="w-full bg-primary hover:bg-primary/90">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
