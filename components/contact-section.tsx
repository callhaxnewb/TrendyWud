"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  })

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  
  // Validate required fields
  if (!formData.name || !formData.email || !formData.phone) {
    alert('Please fill in all required fields');
    return;
  }
  
  // Create dynamic WhatsApp message
  const generateWhatsAppMessage = () => {
    let message = `Hi TRENDY WUDPLAST, I would like to get a quote for WPC products.\n\n`;
    message += `-> My Details:\n`;
    message += `• Name: ${formData.name}\n`;
    message += `• Email: ${formData.email}\n`;
    message += `• Phone: ${formData.phone}\n`;
    
    if (formData.role) {
      message += `• Role: ${formData.role.charAt(0).toUpperCase() + formData.role.slice(1).replace('-', ' ')}\n`;
    }
    
    if (formData.message) {
      message += `\n-> Project Details:\n${formData.message}\n`;
    }
    
    message += `\nPlease contact me with product details and pricing. Thank you!`;
    
    return message;
  };
  
  // Create WhatsApp link
  const whatsappMessage = generateWhatsAppMessage();
  const whatsappLink = `https://wa.me/919253269487?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Open WhatsApp in new tab
  window.open(whatsappLink, '_blank');
  
  console.log("Form submitted:", formData);
};

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Let's Build Something Beautiful Together
          </h2>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space with premium WPC products? Get in touch with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Quote Form */}
          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-card-foreground mb-6">Get Your Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-card-foreground font-sans">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-card-foreground font-sans">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-card-foreground font-sans">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="role" className="text-card-foreground font-sans">
                    I am a...
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("role", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="architect">Architect</SelectItem>
                      <SelectItem value="interior-designer">Interior Designer</SelectItem>
                      <SelectItem value="builder">Builder/Contractor</SelectItem>
                      <SelectItem value="homeowner">Homeowner</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-card-foreground font-sans">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
                >
                  Get Your Quote
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-card-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground font-sans mb-8 leading-relaxed">
                Ready to discuss your project? Our team of experts is here to help you choose the perfect WPC solutions
                for your needs.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-serif font-bold text-card-foreground mb-3 flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-2" />
                    Email Us
                  </h4>
                  <div className="space-y-1 ml-7">
                    <p className="text-muted-foreground font-sans">info@trendywudplast.com</p>
                    <p className="text-muted-foreground font-sans">sales@trendywudplast.com</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-card-foreground mb-3 flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-2" />
                    Call Us
                  </h4>
                  <div className="space-y-1 ml-7">
                    <p className="text-muted-foreground font-sans">+91 98765 43210</p>
                    <p className="text-muted-foreground font-sans">+91 87654 32109</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-card-foreground mb-3 flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    Visit Us
                  </h4>
                  <div className="ml-7">
                    <p className="text-muted-foreground font-sans">TRENDY WUDPLAST INDUSTRIES LLP</p>
                    <p className="text-muted-foreground font-sans">Industrial Area, Phase-II</p>
                    <p className="text-muted-foreground font-sans">New Delhi, India</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-card-foreground mb-3 flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-2" />
                    Business Hours
                  </h4>
                  <div className="space-y-1 ml-7">
                    <p className="text-muted-foreground font-sans">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground font-sans">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
