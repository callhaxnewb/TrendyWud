import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, CheckCircle, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Warranty Information | TRENDY WUDPLAST",
  description:
    "Comprehensive warranty coverage for all TRENDY WUDPLAST WPC products including doors, frames, and boards.",
}

export default function WarrantyPage() {
  const warrantyTerms = [
    {
      product: "WPC Doors",
      period: "10 Years",
      icon: <Shield className="h-8 w-8 text-green-600" />,
      coverage: [
        "Manufacturing defects",
        "Structural integrity",
        "Water resistance failure",
        "Termite damage (when properly installed)",
      ],
      exclusions: [
        "Normal wear and tear",
        "Damage from misuse or abuse",
        "Improper installation",
        "Exposure to extreme temperatures (>60°C)",
      ],
    },
    {
      product: "Door Frames",
      period: "5 Years",
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      coverage: ["Manufacturing defects", "Dimensional stability", "Joint integrity", "Material composition issues"],
      exclusions: [
        "Installation-related issues",
        "Damage from building settlement",
        "Modifications or alterations",
        "Chemical damage from cleaners",
      ],
    },
    {
      product: "WPC Boards",
      period: "3 Years",
      icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
      coverage: ["Manufacturing defects", "Surface integrity", "Moisture resistance", "Structural performance"],
      exclusions: [
        "Surface scratches from use",
        "Color fading from UV exposure",
        "Damage from improper handling",
        "Modifications or cutting",
      ],
    },
  ]

  const claimProcess = [
    {
      step: 1,
      title: "Contact Support",
      description: "Reach out to our customer service team with your concern",
    },
    {
      step: 2,
      title: "Provide Documentation",
      description: "Submit purchase receipt, photos, and installation details",
    },
    {
      step: 3,
      title: "Assessment",
      description: "Our technical team evaluates the claim and determines coverage",
    },
    {
      step: 4,
      title: "Resolution",
      description: "Repair, replacement, or refund as per warranty terms",
    },
  ]

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
            <span className="text-gray-900 font-medium">Warranty Information</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Warranty Information</h1>
          <p className="text-xl text-gray-600 mb-12">
            We stand behind the quality of our products with comprehensive warranty coverage
          </p>

          {/* Warranty Terms */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Warranty Coverage</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {warrantyTerms.map((term, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">{term.icon}</div>
                    <CardTitle className="text-xl">{term.product}</CardTitle>
                    <p className="text-2xl font-bold text-primary">{term.period}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Covered
                      </h4>
                      <ul className="space-y-1">
                        {term.coverage.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                        Not Covered
                      </h4>
                      <ul className="space-y-1">
                        {term.exclusions.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Claim Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How to File a Warranty Claim</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {claimProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Terms and Conditions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Warranty Terms & Conditions</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="prose prose-lg max-w-none">
                <h3>General Terms</h3>
                <ul>
                  <li>Warranty period begins from the date of purchase</li>
                  <li>Original purchase receipt required for all claims</li>
                  <li>Products must be installed according to our guidelines</li>
                  <li>Warranty is non-transferable</li>
                </ul>

                <h3>Installation Requirements</h3>
                <ul>
                  <li>Installation must be performed by qualified professionals</li>
                  <li>All installation guidelines must be followed</li>
                  <li>Proper ventilation and drainage must be maintained</li>
                  <li>Use only recommended hardware and accessories</li>
                </ul>

                <h3>Maintenance Requirements</h3>
                <ul>
                  <li>Regular cleaning with mild soap and water</li>
                  <li>Avoid harsh chemicals and abrasive cleaners</li>
                  <li>Periodic inspection of hardware and fittings</li>
                  <li>Prompt repair of any damage to prevent further issues</li>
                </ul>

                <h3>Remedy Options</h3>
                <p>
                  At our discretion, warranty claims may be resolved through repair, replacement, or refund. Labor costs
                  for warranty work are covered for the first year only.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-light-green rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Warranty Support?</h2>
            <p className="text-gray-600 mb-6">
              Our customer service team is here to help with all warranty-related questions and claims.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phone Support</h4>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-sm text-gray-500">Mon-Fri: 9 AM - 6 PM</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                <p className="text-gray-600">warranty@trendywudplast.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-sm text-gray-500">Quick support and updates</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
