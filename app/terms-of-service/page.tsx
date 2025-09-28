import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | TRENDY WUDPLAST",
  description: "Terms and conditions for using TRENDY WUDPLAST products and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Terms of Service</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: March 2024</p>

          <div className="prose prose-lg max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using TRENDY WUDPLAST's website and services, you agree to be bound by these Terms of
              Service and all applicable laws and regulations.
            </p>

            <h2>Products and Services</h2>
            <h3>Product Specifications</h3>
            <ul>
              <li>All product specifications are subject to manufacturing tolerances</li>
              <li>Colors may vary slightly from digital representations</li>
              <li>Custom orders require written confirmation</li>
              <li>Delivery times are estimates and may vary</li>
            </ul>

            <h3>Pricing and Payment</h3>
            <ul>
              <li>Prices are subject to change without notice</li>
              <li>Payment terms are net 30 days unless otherwise agreed</li>
              <li>Late payments may incur additional charges</li>
              <li>All prices are exclusive of taxes and shipping</li>
            </ul>

            <h2>Orders and Delivery</h2>
            <h3>Order Acceptance</h3>
            <p>
              Orders are subject to acceptance by TRENDY WUDPLAST. We reserve the right to refuse or cancel orders at
              our discretion.
            </p>

            <h3>Delivery Terms</h3>
            <ul>
              <li>Delivery dates are estimates and not guaranteed</li>
              <li>Risk of loss transfers upon delivery</li>
              <li>Customer is responsible for inspection upon delivery</li>
              <li>Claims for damage must be reported within 48 hours</li>
            </ul>

            <h2>Warranties and Disclaimers</h2>
            <h3>Product Warranty</h3>
            <ul>
              <li>WPC doors: 10-year limited warranty against manufacturing defects</li>
              <li>Door frames: 5-year limited warranty</li>
              <li>WPC boards: 3-year limited warranty</li>
              <li>Warranty excludes normal wear, misuse, or improper installation</li>
            </ul>

            <h3>Disclaimer</h3>
            <p>
              Products are provided "as is" without warranties beyond those expressly stated. We disclaim all implied
              warranties including merchantability and fitness for a particular purpose.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Our liability is limited to the purchase price of the products. We are not liable for consequential,
              incidental, or special damages.
            </p>

            <h2>Intellectual Property</h2>
            <ul>
              <li>All content on this website is protected by copyright</li>
              <li>TRENDY WUDPLAST trademarks may not be used without permission</li>
              <li>Product designs and specifications are proprietary</li>
            </ul>

            <h2>Returns and Refunds</h2>
            <h3>Return Policy</h3>
            <ul>
              <li>Standard products may be returned within 30 days</li>
              <li>Custom products are non-returnable</li>
              <li>Returns must be in original condition</li>
              <li>Customer pays return shipping costs</li>
            </ul>

            <h3>Refund Process</h3>
            <ul>
              <li>Refunds processed within 7-10 business days</li>
              <li>Restocking fee may apply (15% for standard products)</li>
              <li>Damaged or used products not eligible for refund</li>
            </ul>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes will be resolved in the courts of Gujarat,
              India.
            </p>

            <h2>Contact Information</h2>
            <p>For questions about these terms, contact us at:</p>
            <ul>
              <li>Email: legal@trendywudplast.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 123 Industrial Area, Manufacturing Hub, Gujarat, India</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
