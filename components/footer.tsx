import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/#contact" },
  { name: "Warranty", href: "/warranty" },
  { name: "Sitemap", href: "/sitemap" },
]

const products = [
  { name: "WPC Doors", href: "/products/wpc-doors" },
  { name: "Door Frames", href: "/products/door-frames" },
  { name: "WPC Boards", href: "/products/wpc-boards" },
  { name: "All Products", href: "/products" },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/1_TrendyWudLogoFinal.png"
                alt="Trendy Wudplast Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0 object-cover"
              />
              <span className="text-xl font-serif font-bold">TRENDY WUDPLAST</span>
            </div>
            <p className="text-sm text-card/80 mb-4 font-sans">Sustainable Elegance in Every Product</p>
            <p className="text-sm text-card/70 font-sans leading-relaxed">
              Leading manufacturer of premium WPC doors, frames, and boards committed to quality and sustainability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-card/70 hover:text-primary transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="text-sm text-card/70 hover:text-primary transition-colors font-sans"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-card/70 font-sans">
              <p>Phone: +91 92532 69487</p>
              <p>Email: trendywud@gmail.com</p>
              <p>Address: Chirod, Road, Chaudhariwas, Hisar, Haryana 125007</p>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="border-t border-card/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-serif font-bold mb-2">Stay Connected</h3>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-card/70 hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-card/70 hover:text-primary cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-card/70 hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-card/70 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <h3 className="text-lg font-serif font-bold mb-2">Subscribe to our newsletter</h3>
              <p className="text-sm text-card/70 mb-3 font-sans">Get latest updates on WPC technology</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-card/10 border-card/20 text-card placeholder:text-card/50"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-card/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-card/70 font-sans">
            <p>© 2025 TRENDY WUDPLAST. All rights reserved.</p>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Leaf className="w-4 h-4 text-primary" />
              <span>for a sustainable future</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
