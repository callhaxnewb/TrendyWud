// components/contact-section.tsx

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

// List of Indian States and Union Territories
const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", 
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];


export default function ContactSection({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    state: "", // Added state field
    message: "",
  })

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  
  if (!formData.name || !formData.email || !formData.phone || !formData.state) {
    alert('Please fill in all required fields, including state.');
    return;
  }
  
  const generateWhatsAppMessage = () => {
    let message = `Hi TRENDY WUDPLAST, I would like to get a quote for WPC products.\n\n`;
    message += `-> My Details:\n`;
    message += `• Name: ${formData.name}\n`;
    message += `• Email: ${formData.email}\n`;
    message += `• Phone: ${formData.phone}\n`;
    message += `• State: ${formData.state}\n`; // Added state to message
    
    if (formData.role) {
      message += `• Role: ${formData.role.charAt(0).toUpperCase() + formData.role.slice(1).replace('-', ' ')}\n`;
    }
    
    if (formData.message) {
      message += `\n-> Project Details:\n${formData.message}\n`;
    }
    
    message += `\nPlease contact me with product details and pricing. Thank you!`;
    
    return message;
  };
  
  const whatsappMessage = generateWhatsAppMessage();
  const whatsappLink = `https://wa.me/919253269487?text=${encodeURIComponent(whatsappMessage)}`;
  
  window.open(whatsappLink, '_blank');
  
  console.log("Form submitted:", formData);
};

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (variant === "compact") {
    return (
        <section id="contact" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <Card className="max-w-4xl mx-auto">
                    <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-serif font-bold text-card-foreground mb-2">Ready to Get a Quote?</h3>
                                <p className="text-muted-foreground font-sans mb-6">Fill out the form and our team will get back to you shortly.</p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name-compact" className="text-xs">Name *</Label>
                                        <Input id="name-compact" type="text" required value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone-compact" className="text-xs">Phone Number *</Label>
                                        <Input id="phone-compact" type="tel" required value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="email-compact" className="text-xs">Email *</Label>
                                        <Input id="email-compact" type="email" required value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} />
                                    </div>
                                    {/* Added State Dropdown to Compact Form */}
                                    <div>
                                        <Label htmlFor="state-compact" className="text-xs">State *</Label>
                                        <Select required onValueChange={(value) => handleInputChange("state", value)}>
                                            <SelectTrigger id="state-compact"><SelectValue placeholder="Select your state" /></SelectTrigger>
                                            <SelectContent>
                                                {indianStates.map(state => <SelectItem key={state} value={state}>{state}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <Button type="submit" size="lg" className="w-full">Get Your Quote</Button>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
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
          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-card-foreground mb-6">Get Your Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name-full" className="text-card-foreground font-sans">Name *</Label>
                  <Input id="name-full" type="text" required value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email-full" className="text-card-foreground font-sans">Email *</Label>
                  <Input id="email-full" type="email" required value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} className="mt-2" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="phone-full" className="text-card-foreground font-sans">Phone Number *</Label>
                        <Input id="phone-full" type="tel" required value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="mt-2" />
                    </div>
                    {/* Added State Dropdown to Full Form */}
                    <div>
                        <Label htmlFor="state-full" className="text-card-foreground font-sans">State *</Label>
                        <Select required onValueChange={(value) => handleInputChange("state", value)}>
                            <SelectTrigger id="state-full" className="mt-2"><SelectValue placeholder="Select your state" /></SelectTrigger>
                            <SelectContent>
                                {indianStates.map(state => <SelectItem key={state} value={state}>{state}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div>
                  <Label htmlFor="role" className="text-card-foreground font-sans">I am a...</Label>
                  <Select onValueChange={(value) => handleInputChange("role", value)}>
                    <SelectTrigger className="mt-2"><SelectValue placeholder="Select your role" /></SelectTrigger>
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
                  <Label htmlFor="message" className="text-card-foreground font-sans">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project requirements..." value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} className="mt-2 min-h-[120px]" />
                </div>
                <Button type="submit" size="lg" className="w-full">Get Your Quote</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-card-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground font-sans mb-8 leading-relaxed">
                Ready to discuss your project? Our team of experts is here to help you choose the perfect WPC solutions for your needs.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif font-bold text-card-foreground mb-3 flex items-center"><Mail className="w-5 h-5 text-primary mr-2" />Email Us</h4>
                  <div className="space-y-1 ml-7"><p className="text-muted-foreground font-sans">trendywud@gmail.com</p></div>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-card-foreground mb-3 flex items-center"><Phone className="w-5 h-5 text-primary mr-2" />Call Us</h4>
                  <div className="space-y-1 ml-7"><p className="text-muted-foreground font-sans">+91 92532 69487</p></div>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-card-foreground mb-3 flex items-center"><MapPin className="w-5 h-5 text-primary mr-2" />Visit Us</h4>
                  <div className="ml-7">
                    <p className="text-muted-foreground font-sans">TRENDY WUDPLAST INDUSTRIES LLP</p>
                    <p className="text-muted-foreground font-sans">Chirod, Road, Chaudhariwas</p>
                    <p className="text-muted-foreground font-sans">Hisar, Haryana 125007</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-card-foreground mb-3 flex items-center"><Clock className="w-5 h-5 text-primary mr-2" />Business Hours</h4>
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
