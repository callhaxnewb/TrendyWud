"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-2 min-w-0 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm sm:text-lg font-serif font-bold text-white">W</span>
            </div>
            <span className="text-base sm:text-xl font-serif font-bold text-foreground truncate">
              <span className="hidden xs:inline">TRENDY </span>WUDPLAST
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) =>
              item.name === "Products" || item.name === "Blog" ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-sans whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-sans whitespace-nowrap"
                >
                  {item.name}
                </a>
              ),
            )}
          </div>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-3 2xl:space-x-4 flex-shrink-0">
            <a
              href="tel:+919253269487"
              className="flex items-center space-x-1 text-xs 2xl:text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 2xl:w-4 2xl:h-4 flex-shrink-0" />
              <span className="hidden 2xl:inline">+91 92532 69487</span>
              <span className="xl:inline 2xl:hidden">+91 9253269487</span>
            </a>
            <a
              href="mailto:trendywud@gmail.com"
              className="flex items-center space-x-1 text-xs 2xl:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-3 h-3 2xl:w-4 2xl:h-4 flex-shrink-0" />
              <span className="hidden 2xl:inline">trendywud@gmail.com</span>
            </a>
            <a
              href="https://wa.me/919253269487"
              className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4 2xl:w-5 2xl:h-5" />
            </a>
          </div>

          <div className="hidden lg:flex xl:hidden items-center space-x-2 flex-shrink-0">
            <a href="tel:+919253269487" className="text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-4 h-4" />
            </a>
            <a href="mailto:trendywud@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://wa.me/919253269487" className="text-primary hover:text-primary/80 transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden flex-shrink-0">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80">
              <div className="flex flex-col space-y-6 mt-6">
                {navItems.map((item) =>
                  item.name === "Products" || item.name === "Blog" ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-sans text-foreground hover:text-primary transition-colors py-2 border-b border-border/50 last:border-b-0"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-sans text-foreground hover:text-primary transition-colors py-2 border-b border-border/50 last:border-b-0"
                    >
                      {item.name}
                    </a>
                  ),
                )}
                <div className="pt-6 border-t border-border space-y-4">
                  <h3 className="font-semibold text-foreground mb-3">Contact Us</h3>
                  <a
                    href="tel:+919253269487"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>+91 92532 69487</span>
                  </a>
                  <a
                    href="mailto:trendywud@gmail.com"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span>trendywud@gmail.com</span>
                  </a>
                  <a
                    href="https://wa.me/919253269487"
                    className="flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors py-2"
                  >
                    <MessageCircle className="w-5 h-5 flex-shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
