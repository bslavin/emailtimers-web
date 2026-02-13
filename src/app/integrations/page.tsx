import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Integrations — Email Platform Compatibility",
  description:
    "Email Timers works with MailChimp, HubSpot, Gmail, Constant Contact, ConvertKit, Drip, and 6 more platforms. Setup guides for each.",
  alternates: {
    canonical: "https://www.emailtimers.com/integrations",
  },
  openGraph: {
    title: "Integrations — Email Platform Compatibility | Email Timers",
    description:
      "Works with every email platform. Paste the embed code and you're done.",
    url: "https://www.emailtimers.com/integrations",
  },
}

const integrations = [
  { name: "MailChimp", slug: "mailchimp", logo: "/logos/mailchimp.png", description: "Drag-and-drop timer insertion in MailChimp campaigns and automations." },
  { name: "HubSpot", slug: "hubspot", logo: "/logos/hubspot.png", description: "Add countdown timers to HubSpot marketing emails and sequences." },
  { name: "Gmail", slug: "gmail", logo: "/logos/gmail.png", description: "Embed timers in Gmail messages for direct outreach and cold email." },
  { name: "Constant Contact", slug: "constant-contact", logo: "/logos/constant-contact.png", description: "Add urgency to your Constant Contact newsletters and campaigns." },
  { name: "ConvertKit", slug: "convertkit", logo: "/logos/convertkit.png", description: "Use timers in ConvertKit broadcasts and automated email sequences." },
  { name: "Drip", slug: "drip", logo: "/logos/drip.png", description: "Insert countdown timers into Drip workflows and campaign emails." },
  { name: "Infusionsoft", slug: "infusionsoft", logo: "/logos/infusionsoft.png", description: "Embed timers in Keap/Infusionsoft campaigns and follow-up sequences." },
  { name: "AWeber", slug: "aweber", logo: "/logos/aweber.png", description: "Add countdowns to AWeber broadcasts and autoresponder emails." },
  { name: "Exact Target", slug: "exact-target", logo: "/logos/exact-target.png", description: "Integrate timers with Salesforce Marketing Cloud (Exact Target) emails." },
  { name: "Mailshake", slug: "mailshake", logo: "/logos/mailshake.png", description: "Boost cold outreach with countdown urgency in Mailshake campaigns." },
  { name: "Woodpecker", slug: "woodpecker", logo: "/logos/woodpecker.png", description: "Add timer urgency to Woodpecker cold email and follow-up sequences." },
  { name: "Autopilot", slug: "autopilot", logo: "/logos/autopilot.png", description: "Insert countdown timers into Autopilot journeys and email campaigns." },
]

export default function IntegrationsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.emailtimers.com" },
      { "@type": "ListItem", position: 2, name: "Integrations", item: "https://www.emailtimers.com/integrations" },
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
              Integrations
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Email Timers works with any platform that supports images. Just paste the embed code — it&apos;s that simple. We have setup guides for every major platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((platform) => (
              <Card key={platform.slug} className="border-gray-200 hover:border-brand-primary/30">
                <CardHeader>
                  <div className="mb-3">
                    <Image
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      width={150}
                      height={36}
                      className="h-9 w-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                  <Link
                    href={`/guides#${platform.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline"
                  >
                    View setup guide <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
