import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact Us | TRENDY WUDPLAST",
  description: "Get in touch for quotes, product details, and support.",
}

export default function ContactPage() {
  return (
    <div className="bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white">
          <div className="absolute inset-0">
            <Image src="/wpc-door-installation.png" alt="Contact Hero" fill className="object-cover" />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-left">
            <nav className="text-sm mb-4">
              <Link href="/" className="opacity-80 hover:opacity-100">Home</Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="font-medium">Contact</span>
            </nav>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
              <p className="text-lg md:text-xl text-white/80">We’d love to help you with your WPC requirements.</p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <ContactSection />

        {/* Office Info & Map Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="md:col-span-4 space-y-6">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Head Office</h2>
                  <p className="text-muted-foreground font-sans text-lg">
                    Chirod Road, Chaudhariwas,<br />
                    Hisar, Haryana 125007
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground font-medium font-sans">
                    <span className="text-muted-foreground mr-2">Phone:</span> 
                    +91 92532 69487
                  </p>
                  <p className="text-foreground font-medium font-sans">
                    <span className="text-muted-foreground mr-2">Email:</span> 
                    trendywud@gmail.com
                  </p>
                </div>
              </div>

              {/* Map Container with Padding */}
              <div className="md:col-span-8 w-full h-[500px] bg-muted rounded-2xl p-4 shadow-sm border border-border">
                <iframe
                  title="Trendy Wudplast Location"
                  src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206163.2548867474!2d75.50649284511617!3d29.026865507434774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913cb579a84cfcb%3A0xe451931b8013a891!2sTrendy%20WudPlast%20Industries!5e0!3m2!1sen!2sin!4v1771998502710!5m2!1sen!2sin"
                  className="w-full h-full rounded-xl"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              </div>
              </div>
          </div>
        </section>
      </main>
    </div>
  )
}