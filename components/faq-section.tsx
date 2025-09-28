import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is WPC?",
    answer:
      "Wood Plastic Composite combines wood fibers and thermoplastics for a durable, water-resistant material ideal for doors, frames, and boards.",
  },
  {
    question: "Is WPC suitable for bathrooms?",
    answer: "Yes. WPC is highly resistant to water and humidity, making it a smart choice for wet areas.",
  },
  {
    question: "Can WPC be painted or laminated?",
    answer: "Absolutely. WPC accepts paint, laminates, and veneers for premium finishes.",
  },
  {
    question: "Is it eco-friendly?",
    answer: "Our products are 100% lead-free and designed to reduce reliance on natural wood.",
  },
  {
    question: "Do you provide customization?",
    answer: "We offer custom sizes and machining based on project requirements.",
  },
  {
    question: "Where do you ship?",
    answer: "We can fulfill orders across India. Contact us for project-specific logistics.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-card-foreground mb-6">FAQ</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-serif font-bold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
