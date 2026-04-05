// components/footer.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Project Gallery", href: "/#gallery" },
  { name: "Journal & Insights", href: "/blog" },
  { name: "Contact Us", href: "/#contact" },
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
      <div className="container mx-auto px-4 max-w-6xl py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/1_TrendyWudLogoFinal.png"
                alt="Trendy Wudplast Logo"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 object-cover"
              />
              <span className="text-xl font-serif font-bold tracking-wide">TRENDY WUDPLAST</span>
            </div>
            <p className="text-sm text-primary font-bold tracking-wider uppercase mb-4 font-sans">Sustainable Elegance</p>
            <p className="text-sm text-card/70 font-sans leading-relaxed">
              India's leading manufacturer of premium WPC doors, frames, and boards committed to quality, durability, and the environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
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
            <h3 className="text-lg font-serif font-bold mb-6 text-white">Products</h3>
            <ul className="space-y-3">
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
            <h3 className="text-lg font-serif font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4 text-sm text-card/70 font-sans">
              <p className="flex flex-col">
                <span className="text-card/50 text-xs uppercase tracking-wider mb-1">Phone</span>
                <span className="text-white">+91 92532 69487</span>
              </p>
              <p className="flex flex-col">
                <span className="text-card/50 text-xs uppercase tracking-wider mb-1">Email</span>
                <span className="text-white">trendywud@gmail.com</span>
              </p>
              <p className="flex flex-col">
                <span className="text-card/50 text-xs uppercase tracking-wider mb-1">Head Office</span>
                <span className="leading-relaxed text-white">Chirod Road, Chaudhariwas,<br />Hisar, Haryana 125007</span>
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="border-t border-card/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-serif font-bold mb-3 text-white">Stay Connected</h3>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-card/70 hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-card/70 hover:text-primary cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-card/70 hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-card/70 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="flex-1 max-w-md w-full">
              <h3 className="text-lg font-serif font-bold mb-2 text-white">Subscribe to our newsletter</h3>
              <p className="text-sm text-card/50 mb-4 font-sans">Get the latest updates on WPC technology.</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-card/5 border-card/10 text-card placeholder:text-card/30 focus-visible:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-card/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-card/50 font-sans">
            <p>© {new Date().getFullYear()} TRENDY WUDPLAST. All rights reserved.</p>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Leaf className="w-4 h-4 text-primary mx-1" />
              <span>for a sustainable future</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
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