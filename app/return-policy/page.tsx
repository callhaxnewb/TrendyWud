import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Return Policy | TRENDY WUDPLAST",
  description: "Understand our returns, exchanges, and warranty process.",
}

export default function ReturnPolicyPage() {
  return (
    <div className="bg-background">
      <main>
        <section className="relative pt-32 pb-16 text-white">
          <div className="absolute inset-0">
            <Image src="/wpc-maintenance.png" alt="Return" fill className="object-cover" />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-left">
            <nav className="text-sm mb-4">
              <Link href="/" className="opacity-80 hover:opacity-100">Home</Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="font-medium">Return Policy</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Return Policy</h1>
            <p className="text-white/80">Guidelines for returns, exchanges, and refunds.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-muted-foreground font-sans">
              <p>Eligible returns are accepted within 7 days of delivery for unused, undamaged items in original packaging.</p>
              <p>Custom or made-to-order products are generally non-returnable unless defective upon arrival.</p>
              <p>To initiate a return, contact us at trendywud@gmail.com with your order details and issue description.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


