// components/navigation.tsx

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import Image from "next/image";


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
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll(); // Check on initial load
    
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
                isScrolled ? "text-foreground" : "text-white"
            )}>
              TRENDY WUDPLAST
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
                const NavLinkComponent = item.href.startsWith("/") ? Link : 'a';
                return (
                    <NavLinkComponent
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "text-base font-sans whitespace-nowrap transition-colors",
                            isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                        )}
                    >
                        {item.name}
                    </NavLinkComponent>
                )
            })}
          </div>

          <div className="hidden xl:flex items-center space-x-4 2xl:space-x-5 flex-shrink-0">
            <a
              href="tel:+919253269487"
              className={cn(
                "flex items-center space-x-2 text-sm whitespace-nowrap transition-colors",
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              )}
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>+91 92532 69487</span>
            </a>
            <a
              href="mailto:trendywud@gmail.com"
              className={cn(
                "flex items-center space-x-2 text-sm whitespace-nowrap transition-colors",
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              )}
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>trendywud@gmail.com</span>
            </a>
            <div className=" bottom-6 right-6 z-50">
              <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg" asChild>
                <a href="https://wa.me/919253269487" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("h-10 w-10 sm:h-12 sm:w-12 transition-colors",
                  isScrolled ? "text-foreground" : "text-white hover:bg-white/10 focus-visible:bg-white/10"
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
                    {navItems.map((item) => {
                      const NavLinkComponent = item.href.startsWith('/') ? Link : 'a';
                      return (
                        <NavLinkComponent
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsSheetOpen(false)}
                          className="text-lg font-sans text-muted-foreground hover:text-primary transition-colors py-2 rounded-md"
                        >
                          {item.name}
                        </NavLinkComponent>
                      );
                    })}
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
                    <a href="https://wa.me/919253269487" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                      <div className="bottom-6 right-6 z-50">
                        <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg" asChild>
                          <a href="https://wa.me/919253269487" target="_blank" rel="noopener noreferrer">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg>
                          </a>
                        </Button>
                      </div>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
                <SheetFooter className="p-6 border-t">
                  <Button asChild className="w-full" size="lg" onClick={() => setIsSheetOpen(false)}>
                    <a href="#contact">Get a Quote</a>
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