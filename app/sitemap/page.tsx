import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sitemap | TRENDY WUDPLAST",
  description: "Navigate through all pages and sections of the TRENDY WUDPLAST website.",
}

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "All Products", href: "/products" },
        { name: "WPC Doors", href: "/products/wpc-doors" },
        { name: "Door Frames", href: "/products/door-frames" },
        { name: "WPC Boards", href: "/products/wpc-boards" },
      ],
    },
    {
      title: "Blog & Resources",
      links: [
        { name: "Blog Home", href: "/blog" },
        { name: "WPC Technology", href: "/blog?category=WPC%20Technology" },
        { name: "Sustainability", href: "/blog?category=Sustainability" },
        { name: "Installation Tips", href: "/blog?category=Installation%20Tips" },
        { name: "Design Trends", href: "/blog?category=Design%20Trends" },
      ],
    },
    {
      title: "Company Information",
      links: [
        { name: "Careers", href: "/careers" },
        { name: "Warranty Information", href: "/warranty" },
        { name: "Shipping Policy", href: "/shipping-policy" },
        { name: "Return Policy", href: "/return-policy" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Sitemap", href: "/sitemap" },
      ],
    },
  ]

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
            <span className="text-gray-900 font-medium">Sitemap</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
          <p className="text-xl text-gray-600 mb-12">Navigate through all pages and sections of our website</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteStructure.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-light-green rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Finding Something?</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help you navigate our products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Contact Us
                </button>
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
