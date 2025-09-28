import Link from "next/link"
import { Search, Calendar, Clock, User, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const featuredArticle = {
  slug: "complete-guide-wpc-doors",
  title: "The Complete Guide to WPC Doors: Benefits and Installation",
  excerpt: "Everything you need to know about choosing and installing WPC doors for your home or commercial project.",
  category: "Home Improvement",
  author: "Technical Team",
  date: "March 15, 2024",
  readTime: "8 min",
  image: "/wpc-door-installation.png",
}

const articles = [
  {
    slug: "sustainable-building-wpc-materials",
    title: "Sustainable Building: How WPC Materials Reduce Environmental Impact",
    excerpt: "Explore how WPC materials contribute to green building practices and environmental conservation.",
    category: "Sustainability",
    author: "Dr. Priya Sharma",
    date: "March 10, 2024",
    readTime: "6 min",
    image: "/wpc-sustainability.png",
  },
  {
    slug: "wpc-vs-traditional-wood-cost-analysis",
    title: "WPC vs Traditional Wood: A Comprehensive Cost Analysis",
    excerpt: "Detailed cost comparison between WPC and traditional wood materials over their lifecycle.",
    category: "Product Comparison",
    author: "Rajesh Kumar",
    date: "February 28, 2024",
    readTime: "10 min",
    image: "/wpc-cost-comparison.png",
  },
  {
    slug: "wpc-door-maintenance-tips",
    title: "Essential Maintenance Tips for WPC Doors and Frames",
    excerpt: "Keep your WPC doors looking new with these professional maintenance and care guidelines.",
    category: "Maintenance",
    author: "Technical Team",
    date: "February 20, 2024",
    readTime: "5 min",
    image: "/wpc-maintenance.png",
  },
  {
    slug: "commercial-wpc-applications",
    title: "Commercial Applications of WPC: Beyond Residential Use",
    excerpt: "Discover how WPC materials are revolutionizing commercial construction and design projects.",
    category: "Commercial Applications",
    author: "Architect Meera Patel",
    date: "February 15, 2024",
    readTime: "7 min",
    image: "/commercial-wpc.png",
  },
  {
    slug: "wpc-design-trends-2024",
    title: "2024 WPC Design Trends: What's Shaping Modern Architecture",
    excerpt: "Stay ahead with the latest WPC design trends influencing contemporary architecture and interior design.",
    category: "Design Trends",
    author: "Design Team",
    date: "February 10, 2024",
    readTime: "6 min",
    image: "/wpc-design-trends.png",
  },
  {
    slug: "wpc-installation-best-practices",
    title: "WPC Installation Best Practices for Contractors",
    excerpt: "Professional installation techniques and best practices for WPC doors, frames, and boards.",
    category: "Installation Tips",
    author: "Installation Expert",
    date: "February 5, 2024",
    readTime: "9 min",
    image: "/wpc-installation-guide.png",
  },
]

const categories = [
  { name: "WPC Technology", count: 8 },
  { name: "Sustainability", count: 6 },
  { name: "Installation Tips", count: 5 },
  { name: "Design Trends", count: 4 },
  { name: "Product Comparison", count: 3 },
  { name: "Maintenance", count: 7 },
  { name: "Home Improvement", count: 9 },
  { name: "Commercial Applications", count: 4 },
]

const recentArticles = articles.slice(0, 5)

const popularTags = [
  "WPC Doors",
  "Sustainability",
  "Installation",
  "Maintenance",
  "Cost Analysis",
  "Design Trends",
  "Commercial Use",
  "Home Improvement",
  "Eco-Friendly",
]

export default function BlogPage() {
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
            <span className="text-gray-900 font-medium">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-light-green py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Insights & Innovations</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Stay updated with the latest trends in WPC technology, sustainable construction, and industry insights
              from our experts
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Search articles..." className="pl-10 h-12 text-base" />
              </div>
              <select className="h-12 px-4 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Featured Article */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{featuredArticle.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${featuredArticle.slug}`}>
                      <Button className="bg-primary hover:bg-primary/90">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Articles Grid */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Card key={article.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 text-xs text-gray-500 mb-2">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 leading-tight line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{article.author}</span>
                        <Link href={`/blog/${article.slug}`}>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-8">
              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category.name}
                        className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-700 hover:text-primary cursor-pointer transition-colors">
                          {category.name}
                        </span>
                        <span className="text-gray-500 text-sm">({category.count})</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Recent Articles</h3>
                  <div className="space-y-4">
                    {recentArticles.map((article) => (
                      <Link key={article.slug} href={`/blog/${article.slug}`} className="block group">
                        <div className="flex space-x-3">
                          <img
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2 text-sm">
                              {article.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-light-green">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Get Weekly Insights</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Subscribe to receive the latest WPC industry insights and expert tips directly in your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Enter your email" type="email" />
                    <Button className="w-full bg-primary hover:bg-primary/90">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700 hover:bg-primary hover:text-white cursor-pointer transition-colors"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
