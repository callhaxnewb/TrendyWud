"use client"

import { usePathname } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const isSolid = !isHome

  return (
    <div className="bg-background text-foreground">
      <Navigation isProductPage={isSolid} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

 