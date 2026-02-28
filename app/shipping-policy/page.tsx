import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Shipping Policy | TRENDY WUDPLAST",
  description: "Learn about our shipping timelines, coverage, and handling.",
}

export default function ShippingPolicyPage() {
  return (
    <div className="bg-background">
      <main>
        <section className="relative pt-32 pb-16 text-white">
          <div className="absolute inset-0">
            <Image src="/wpc-installation-guide.png" alt="Shipping" fill className="object-cover" />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-left">
            <nav className="text-sm mb-4">
              <Link href="/" className="opacity-80 hover:opacity-100">Home</Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="font-medium">Shipping Policy</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Shipping Policy</h1>
            <p className="text-white/80">Timelines and coverage for deliveries across India.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-muted-foreground font-sans">
              <p>Orders are processed within 2-4 business days. Delivery times vary by location and order size.</p>
              <p>We ship across India through reliable logistics partners. Tracking details are shared when available.</p>
              <p>Large or custom orders may require extended handling time. We will communicate timelines proactively.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


