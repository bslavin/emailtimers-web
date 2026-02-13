import type { Metadata } from "next"
import PricingCards from "@/components/PricingCards"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Pricing — Email Countdown Timer Plans",
  description:
    "Start free with 1.25M impressions/month. Paid plans from $9/mo remove branding and unlock advanced features. No credit card required.",
  alternates: {
    canonical: "https://www.emailtimers.com/pricing",
  },
  openGraph: {
    title: "Pricing — Email Countdown Timer Plans | Email Timers",
    description:
      "Start free with 1.25M impressions/month. Paid plans from $9/mo remove branding and unlock advanced features.",
    url: "https://www.emailtimers.com/pricing",
  },
}

export default function PricingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.emailtimers.com" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.emailtimers.com/pricing" },
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
              Simple, transparent{" "}
              <span className="text-brand-primary">
                pricing
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Start free with 1.25 million impressions per month. Upgrade to remove branding and unlock advanced features.
            </p>
          </div>

          <div className="mt-12">
            <PricingCards />
          </div>
        </div>
      </section>
      <FAQAccordion showSchema />
      <CTASection />
    </>
  )
}
