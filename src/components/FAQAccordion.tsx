"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do email countdown timers work?",
    answer:
      "Our timers are animated GIF images hosted on our servers. When you embed the timer in your email, it loads fresh from our CDN each time the email is opened — showing the accurate remaining time. No JavaScript or special email client support needed.",
  },
  {
    question: "What email platforms are supported?",
    answer:
      "Email Timers works with any email platform that supports images, including MailChimp, HubSpot, Gmail, Constant Contact, ConvertKit, Drip, AWeber, and many more. Just paste the HTML embed code into your email editor.",
  },
  {
    question: "What happens when the countdown reaches zero?",
    answer:
      "You can configure a custom expired message that displays after the timer ends. This could be text like \"Offer Expired\" or a custom image. On paid plans, you have full control over the expired state.",
  },
  {
    question: "What is the difference between Fixed, Evergreen, and Cyclic timers?",
    answer:
      "Fixed timers count down to a specific date and time (great for sales events). Evergreen timers start a fresh countdown for each recipient based on when they open the email (great for onboarding). Cyclic timers reset automatically when they expire (great for recurring deadlines).",
  },
  {
    question: "Is there really a free plan?",
    answer:
      "Yes! Our free plan includes 1,250,000 impressions per month, unlimited timer creation, global CDN delivery, and unlimited domains. The only difference is that free timers include a small Email Timers branding watermark.",
  },
  {
    question: "What does \"branding removed\" mean?",
    answer:
      "Free plan timers include a small \"Powered by Email Timers\" watermark. Any paid plan removes this branding completely, so your timers look fully custom and professional.",
  },
]

export default function FAQAccordion({ showSchema = false }: { showSchema?: boolean }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about email countdown timers.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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
