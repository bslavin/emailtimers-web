import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Setup Guides — How to Add Countdown Timers to Your Emails",
  description:
    "Step-by-step guides for adding Email Timers to MailChimp, HubSpot, Gmail, Constant Contact, ConvertKit, and 7 more platforms.",
  alternates: {
    canonical: "https://www.emailtimers.com/guides",
  },
  openGraph: {
    title: "Setup Guides — Add Countdown Timers to Any Email Platform",
    description:
      "Step-by-step embed instructions for 12+ email platforms including MailChimp, HubSpot, and Gmail.",
    url: "https://www.emailtimers.com/guides",
  },
}

const guides = [
  { name: "MailChimp", slug: "mailchimp", logo: "/logos/mailchimp.png", summary: "Drag-and-drop timer insertion in campaigns and automations." },
  { name: "HubSpot", slug: "hubspot", logo: "/logos/hubspot.png", summary: "Add timers to marketing emails and automated sequences." },
  { name: "Gmail", slug: "gmail", logo: "/logos/gmail.png", summary: "Embed timers in Gmail for direct outreach and cold email." },
  { name: "Constant Contact", slug: "constant-contact", logo: "/logos/constant-contact.png", summary: "Add urgency to newsletters and promotional campaigns." },
  { name: "ConvertKit", slug: "convertkit", logo: "/logos/convertkit.png", summary: "Use timers in broadcasts and automated email sequences." },
  { name: "Drip", slug: "drip", logo: "/logos/drip.png", summary: "Insert timers into workflows and e-commerce campaign emails." },
  { name: "Infusionsoft", slug: "infusionsoft", logo: "/logos/infusionsoft.png", summary: "Embed timers in Keap/Infusionsoft campaigns and sequences." },
  { name: "AWeber", slug: "aweber", logo: "/logos/aweber.png", summary: "Add countdowns to broadcasts and autoresponder emails." },
  { name: "Exact Target", slug: "exact-target", logo: "/logos/exact-target.png", summary: "Integrate with Salesforce Marketing Cloud emails." },
  { name: "Mailshake", slug: "mailshake", logo: "/logos/mailshake.png", summary: "Boost cold outreach with countdown urgency." },
  { name: "Woodpecker", slug: "woodpecker", logo: "/logos/woodpecker.png", summary: "Add urgency to cold email and follow-up sequences." },
  { name: "Autopilot", slug: "autopilot", logo: "/logos/autopilot.png", summary: "Insert timers into journeys and automated campaigns." },
]

export default function GuidesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.emailtimers.com" },
      { "@type": "ListItem", position: 2, name: "Setup Guides", item: "https://www.emailtimers.com/guides" },
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
              Setup Guides
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Step-by-step instructions for adding countdown timers to your emails. Select your platform below.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 items-center">
                  <Image
                    src={guide.logo}
                    alt={`${guide.name} logo`}
                    width={197}
                    height={48}
                    className="h-10 w-auto"
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-brand-primary">
                  {guide.name}
                </h2>
                <p className="mt-1 flex-1 text-sm text-gray-500">{guide.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-primary">
                  View guide <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Don&apos;t see your platform?{" "}
              <Link href="/contact" className="text-brand-primary font-medium hover:underline">
                Contact us
              </Link>{" "}
              — our timers work with any email client that supports images.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
