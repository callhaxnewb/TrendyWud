import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | TRENDY WUDPLAST",
  description: "Learn how TRENDY WUDPLAST collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
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
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: March 2024</p>

          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              TRENDY WUDPLAST ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website or use
              our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <ul>
              <li>Name and contact information (email, phone, address)</li>
              <li>Company information for business inquiries</li>
              <li>Project details and specifications</li>
              <li>Communication preferences</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li>IP address and browser information</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Device information and operating system</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>Provide and improve our products and services</li>
              <li>Respond to inquiries and customer support requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Process orders and manage business relationships</li>
              <li>Comply with legal obligations</li>
              <li>Analyze website usage and improve user experience</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information in the
              following circumstances:
            </p>
            <ul>
              <li>With service providers who assist in our operations</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights and safety</li>
              <li>In connection with business transfers</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <ul>
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability rights</li>
            </ul>

            <h2>Cookies Policy</h2>
            <p>
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can
              control cookie settings through your browser preferences.
            </p>

            <h2>Contact Information</h2>
            <p>For privacy-related questions or concerns, contact us at:</p>
            <ul>
              <li>Email: privacy@trendywudplast.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 123 Industrial Area, Manufacturing Hub, Gujarat, India</li>
            </ul>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of any material changes by posting the
              new policy on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
