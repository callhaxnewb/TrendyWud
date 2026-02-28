// components/navigation.tsx

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { WhatsappIcon } from "@/components/ui/whatsapp-icon"

const navItems = [
  { name: "Home", href: "/" }, // Changed from #home to /
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Journal", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

// The component now accepts an optional 'isProductPage' prop
export default function Navigation({ isProductPage = false }: { isProductPage?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // If it's a product page, always treat it as scrolled. Otherwise, use the scroll state.
  const showSolidNav = isProductPage || isScrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        showSolidNav ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center space-x-3 min-w-0 flex-shrink-0">
            <Image
              src="/1_TrendyWudLogoFinal.png"
              alt="Trendy Wudplast Logo"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 object-cover"
            />
            <span className={cn(
                "text-xl sm:text-3xl font-serif font-bold transition-colors",
                showSolidNav ? "text-foreground" : "text-white"
            )}>
              TRENDY WUDPLAST
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                        "text-base font-sans whitespace-nowrap transition-colors",
                        showSolidNav ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                    )}
                >
                    {item.name}
                </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center space-x-4 2xl:space-x-5 flex-shrink-0">
            <a
              href="tel:+919253269487"
              className={cn( "flex items-center space-x-2 text-sm whitespace-nowrap transition-colors",
                showSolidNav ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              )}
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>+91 92532 69487</span>
            </a>
            <a
              href="mailto:trendywud@gmail.com"
              className={cn("flex items-center space-x-2 text-sm whitespace-nowrap transition-colors",
                showSolidNav ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              )}
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>trendywud@gmail.com</span>
            </a>
            <a
              href="https://wa.me/919253269487"
              className="hover:opacity-80 transition-opacity flex-shrink-0"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <WhatsappIcon className={cn("w-5 h-5", showSolidNav ? "text-primary" : "text-white")} />
            </a>
          </div>
          
          <div className="flex items-center lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("h-10 w-10 sm:h-12 sm:w-12 transition-colors",
                  showSolidNav ? "text-foreground" : "text-white hover:bg-white/10 focus-visible:bg-white/10"
                )}>
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[340px] flex flex-col p-0 mt-16 sm:mt-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)]"
              >
                <div className="flex-1 overflow-y-auto p-6 pt-8">
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsSheetOpen(false)}
                          className="text-lg font-sans text-muted-foreground hover:text-primary transition-colors py-2 rounded-md"
                        >
                          {item.name}
                        </Link>
                    ))}
                  </nav>
                  <Separator className="my-6" />
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Contact Us</h3>
                    <a href="tel:+919253269487" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <span>+91 92532 69487</span>
                    </a>
                    <a href="mailto:trendywud@gmail.com" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      <span>trendywud@gmail.com</span>
                    </a>
                    <a 
                      href="https://wa.me/919253269487" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <WhatsappIcon className="w-5 h-5 flex-shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
                <SheetFooter className="p-6 border-t">
                  <Button asChild className="w-full" size="lg" onClick={() => setIsSheetOpen(false)}>
                    <a href="/contact">Get a Quote</a>
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}