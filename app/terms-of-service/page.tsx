// app/terms/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions | TRENDY WUDPLAST",
  description: "Terms and conditions for using TRENDY WUDPLAST website, products, and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Breadcrumb */}
      <div className="bg-muted pt-28 lg:pt-32 pb-4 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="flex items-center space-x-2 text-sm font-sans text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Terms & Conditions</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="mb-12 border-b border-border/50 pb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground font-sans">
            Visitors to this website are requested to read the terms and conditions appearing hereinafter along with our Privacy Policy. By accessing and using this site, you agree to be bound by these terms.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12">
          
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              We reserve the right in our sole discretion to edit or delete any documents, information, or other content appearing on the Site. By accessing and using TRENDY WUDPLAST's website and services, you agree to be bound by these Terms & Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Product Information & Specifications</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              The information, content, and services of this website are indicative of the products and services offered by Trendy Wudplast and should not be taken as absolute promises on the part of the company. While we endeavor to ensure details and descriptions are accurate, the same cannot be taken as a guarantee.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans leading-relaxed">
              <li>All product specifications are subject to standard manufacturing tolerances.</li>
              <li>Actual product colors and textures may vary slightly from digital representations on monitors or screens.</li>
              <li>Custom orders require written confirmation and approved specifications prior to manufacturing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Pricing & Orders</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              All prices are subject to change without notice. Orders are strictly subject to acceptance by TRENDY WUDPLAST, and we reserve the right to refuse or cancel orders at our sole discretion.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans leading-relaxed">
              <li>Payment terms must be strictly adhered to as per the agreed invoice or quotation.</li>
              <li>Late payments may incur additional interest or legal charges as applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Limitation of Liability & Disclaimer</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              The information, content, and products provided on this website are on an "as is" basis. Consumers/customers should verify and assure themselves as to the specific qualities and features of each product and service prior to purchasing the same.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Trendy Wudplast shall not be liable for any damages, whether direct or consequential, loss of business, loss of profits, or any other loss or damages resulting from the usage or the inability to use the products, information, or content provided. Our maximum liability shall in all cases be strictly limited to the purchase price of the specific product in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              All intellectual property rights and goodwill relating to Trendy Wudplast, including the name, logo, website design, product designs, proprietary specifications, and any associated trademarks or copyrights, belong exclusively to Trendy Wudplast. Users are strictly prohibited from using the information, content, or data available on the website for distribution, reproduction, copying, storing, selling, or for a third party for commercial or gainful purpose without explicit written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Indemnification</h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              You agree to indemnify, defend, and hold us and our partners, attorneys, staff, and affiliates harmless from any liability, loss, claim, and expense, including reasonable attorney's fees, related to your violation of this Agreement or use of the Site and its products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">General & Governing Law</h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              If any term of these terms and conditions is held to be invalid or unenforceable by a judicial decision, the rest of the Terms shall remain valid and enforceable. Any dispute arising out of the use of the website or our products is strictly subject to the laws of India and to the exclusive jurisdiction of the Courts of Hisar, Haryana.
            </p>
          </section>

          <section className="pt-8 border-t border-border/50">
            <h2 className="text-xl font-serif font-bold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              For any questions, clarifications, or legal correspondence regarding these terms, please contact us at:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground font-sans">
              <li><strong className="text-foreground">Email:</strong> trendywud@gmail.com</li>
              <li><strong className="text-foreground">Phone:</strong> +91 92532 69487</li>
              <li><strong className="text-foreground">Address:</strong> Chirod Road, Chaudhariwas, Hisar, Haryana 125007</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  )
}