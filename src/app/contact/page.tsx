import type { Metadata } from "next"
import { Mail, HelpCircle } from "lucide-react"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Email Timers team. We're here to help with setup, billing, or any questions about countdown timers for email.",
  alternates: {
    canonical: "https://www.emailtimers.com/contact",
  },
  openGraph: {
    title: "Contact Us | Email Timers",
    description: "Get in touch with the Email Timers team.",
    url: "https://www.emailtimers.com/contact",
  },
}

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.emailtimers.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.emailtimers.com/contact" },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Have a question or need help? We&apos;re here for you.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Contact form placeholder */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-5 w-5 text-brand-primary" />
                <h2 className="text-xl font-bold text-gray-900">Send us a message</h2>
              </div>
              {/* Iframe placeholder — replace src with actual form URL */}
              <div className="rounded-lg bg-gray-50 p-8 text-center text-sm text-gray-500">
                <p>Contact form will be embedded here.</p>
                <p className="mt-2 text-xs text-gray-400">Iframe embed — URL to be configured</p>
              </div>
            </div>

            {/* Support links */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="h-5 w-5 text-brand-accent" />
                  <h2 className="text-xl font-bold text-gray-900">Knowledge Base</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Find answers to common questions, setup tutorials, and troubleshooting guides in our knowledge base.
                </p>
                <a
                  href="https://emailtimers.freshdesk.com/support/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline"
                >
                  Visit Knowledge Base &rarr;
                </a>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="/guides" className="text-brand-primary hover:underline">Setup Guides</a>
                    {" "}<span className="text-gray-400">— Platform-specific embed instructions</span>
                  </li>
                  <li>
                    <a href="/pricing" className="text-brand-primary hover:underline">Pricing</a>
                    {" "}<span className="text-gray-400">— Plans and feature comparison</span>
                  </li>
                  <li>
                    <a href="/features" className="text-brand-primary hover:underline">Features</a>
                    {" "}<span className="text-gray-400">— Everything Email Timers can do</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
