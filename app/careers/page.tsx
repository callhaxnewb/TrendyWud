import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | TRENDY WUDPLAST",
  description:
    "Join our team and help shape the future of sustainable building materials. Explore career opportunities at TRENDY WUDPLAST.",
}

export default function CareersPage() {
  const openPositions = [
    {
      title: "Production Engineer",
      department: "Manufacturing",
      location: "Gujarat, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Lead production processes and quality control for WPC manufacturing operations.",
      requirements: [
        "Bachelor's degree in Mechanical/Chemical Engineering",
        "Experience in composite materials manufacturing",
        "Knowledge of quality control systems",
        "Strong problem-solving skills",
      ],
    },
    {
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "1-3 years",
      description: "Drive sales growth and build relationships with architects, contractors, and distributors.",
      requirements: [
        "Bachelor's degree in Business/Engineering",
        "Experience in B2B sales, preferably construction materials",
        "Excellent communication and presentation skills",
        "Willingness to travel",
      ],
    },
    {
      title: "Quality Control Specialist",
      department: "Quality Assurance",
      location: "Gujarat, India",
      type: "Full-time",
      experience: "1-2 years",
      description: "Ensure product quality through testing, inspection, and process improvement.",
      requirements: [
        "Diploma/Bachelor's in Engineering or Science",
        "Knowledge of testing procedures and equipment",
        "Attention to detail and analytical mindset",
        "Experience with ISO standards preferred",
      ],
    },
    {
      title: "R&D Intern",
      department: "Research & Development",
      location: "Gujarat, India",
      type: "Internship",
      experience: "Fresh Graduate",
      description: "Support research projects in WPC technology and product development.",
      requirements: [
        "Bachelor's/Master's in Materials Science or Chemical Engineering",
        "Interest in composite materials and sustainability",
        "Strong academic record",
        "Research experience preferred",
      ],
    },
  ]

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Collaborative Culture",
      description: "Work with passionate professionals in a supportive environment",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-600" />,
      title: "Career Growth",
      description: "Clear advancement paths and professional development opportunities",
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and comprehensive leave policies",
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
            <span className="text-gray-900 font-medium">Careers</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-light-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Build Your Career With Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Join our mission to create sustainable building materials and shape the future of construction. We're
              looking for passionate individuals who share our commitment to innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose TRENDY WUDPLAST?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Open Positions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{position.title}</CardTitle>
                      <p className="text-primary font-medium">{position.department}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        <MapPin className="h-3 w-3 mr-1" />
                        {position.location}
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        <Clock className="h-3 w-3 mr-1" />
                        {position.type}
                      </Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        {position.experience}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{position.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Apply Online</h3>
                <p className="text-sm text-gray-600">Submit your application and resume through our portal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Initial Screening</h3>
                <p className="text-sm text-gray-600">HR team reviews applications and conducts initial screening</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Interview Process</h3>
                <p className="text-sm text-gray-600">Technical and HR interviews with relevant team members</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Welcome Aboard</h3>
                <p className="text-sm text-gray-600">Onboarding and integration into our team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Position?</h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Send Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Contact HR: hr@trendywudplast.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
