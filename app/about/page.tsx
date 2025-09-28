import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Leaf, Factory } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | TRENDY WUDPLAST",
  description:
    "Learn about TRENDY WUDPLAST's journey in manufacturing premium WPC products and our commitment to sustainability.",
}

export default function AboutPage() {
  const milestones = [
    { year: "2010", event: "Company founded with a vision for sustainable building materials" },
    { year: "2012", event: "First WPC door production line established" },
    { year: "2015", event: "Expanded to door frames and architectural boards" },
    { year: "2018", event: "Achieved ISO 9001:2015 certification" },
    { year: "2020", event: "Launched eco-friendly product line with 70% recycled content" },
    { year: "2022", event: "Opened second manufacturing facility" },
    { year: "2024", event: "Serving 500+ satisfied customers across India" },
  ]

  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Sustainability",
      description: "Committed to environmental responsibility through recycled materials and eco-friendly processes.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Quality Excellence",
      description: "Uncompromising quality standards with rigorous testing and continuous improvement.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Customer Focus",
      description: "Building lasting relationships through exceptional service and customized solutions.",
    },
    {
      icon: <Factory className="h-8 w-8 text-orange-600" />,
      title: "Innovation",
      description: "Continuously advancing WPC technology to meet evolving market needs.",
    },
  ]

  const team = [
    {
      name: "Rajesh Patel",
      role: "Founder & CEO",
      bio: "15+ years in composite materials with vision for sustainable construction.",
      image: "/team-ceo.png",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of R&D",
      bio: "PhD in Materials Science, leading innovation in WPC technology.",
      image: "/team-rd.png",
    },
    {
      name: "Amit Kumar",
      role: "Production Manager",
      bio: "Expert in manufacturing processes with focus on quality control.",
      image: "/team-production.png",
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
            <span className="text-gray-900 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-light-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pioneering Sustainable Construction</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Since 2010, TRENDY WUDPLAST has been at the forefront of WPC technology, creating innovative building
              materials that combine durability, aesthetics, and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  TRENDY WUDPLAST was born from a simple yet powerful vision: to create building materials that don't
                  compromise between performance and environmental responsibility. Our founders recognized the need for
                  sustainable alternatives to traditional wood and synthetic materials.
                </p>
                <p>
                  Starting with a small facility in Gujarat, we've grown into a leading manufacturer of WPC products,
                  serving customers across India. Our journey has been marked by continuous innovation, unwavering
                  quality standards, and a deep commitment to sustainability.
                </p>
                <p>
                  Today, we're proud to offer a comprehensive range of WPC doors, frames, and boards that meet the
                  highest standards of durability, aesthetics, and environmental responsibility.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/company-facility.png"
                alt="TRENDY WUDPLAST Manufacturing Facility"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pt-4">
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who trust TRENDY WUDPLAST for their WPC needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
