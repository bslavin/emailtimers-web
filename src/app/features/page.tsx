import type { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Clock, Palette, Globe, BarChart3, Mail, Smartphone, RefreshCw, Languages, Image, Timer, Shield, Zap } from "lucide-react"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Features — Email Countdown Timer Capabilities",
  description:
    "Explore Email Timers features: multiple timer types, full customization, global CDN, real-time analytics, 12+ integrations, and mobile compatibility.",
  alternates: {
    canonical: "https://www.emailtimers.com/features",
  },
  openGraph: {
    title: "Features — Email Countdown Timer Capabilities | Email Timers",
    description:
      "Multiple timer types, full customization, global CDN delivery, real-time analytics, and compatibility with every email client.",
    url: "https://www.emailtimers.com/features",
  },
}

const featureGroups = [
  {
    title: "Timer Types",
    description: "Choose the right countdown for every campaign",
    features: [
      {
        icon: Clock,
        title: "Fixed Date Countdown",
        description: "Count down to a specific date and time. Perfect for product launches, flash sales, webinars, and holiday promotions. Every recipient sees the same deadline.",
      },
      {
        icon: RefreshCw,
        title: "Evergreen Timer",
        description: "Start a fresh countdown for each recipient based on when they open the email. Ideal for onboarding sequences, drip campaigns, and personalized offers.",
      },
      {
        icon: Timer,
        title: "Cyclic Timer",
        description: "Automatically resets when the countdown reaches zero. Great for recurring deadlines, weekly deals, and ongoing time-sensitive promotions.",
      },
    ],
  },
  {
    title: "Customization & Design",
    description: "Match timers to your brand identity",
    features: [
      {
        icon: Palette,
        title: "Full Color Control",
        description: "Customize every element — background, numbers, labels, separators. Match your brand colors exactly for a seamless email experience.",
      },
      {
        icon: Languages,
        title: "Dynamic Language",
        description: "Display timer labels in your audience's language. Support for multiple languages ensures your timers connect with global audiences.",
      },
      {
        icon: Image,
        title: "Expired State Customization",
        description: "Configure a custom message or image that displays when the timer reaches zero. Turn expired timers into continued engagement opportunities.",
      },
    ],
  },
  {
    title: "Performance & Reliability",
    description: "Enterprise-grade infrastructure you can rely on",
    features: [
      {
        icon: Globe,
        title: "Global CDN Delivery",
        description: "Timers are served from edge nodes worldwide for sub-second load times. Your recipients see instant timer rendering regardless of location.",
      },
      {
        icon: Shield,
        title: "99.9% Uptime",
        description: "Our infrastructure is built for reliability. Redundant systems ensure your timers are always available when your emails are opened.",
      },
      {
        icon: Zap,
        title: "Instant Rendering",
        description: "GIF-based timers require zero JavaScript. They render immediately in every email client — desktop, mobile, and webmail — without any loading delay.",
      },
    ],
  },
  {
    title: "Analytics & Integration",
    description: "Track performance and connect to your tools",
    features: [
      {
        icon: BarChart3,
        title: "Real-Time Analytics",
        description: "Track impressions, email opens, and engagement metrics for every timer. Understand which campaigns drive the most urgency and conversions.",
      },
      {
        icon: Mail,
        title: "12+ Platform Integrations",
        description: "Works with MailChimp, HubSpot, Gmail, Constant Contact, ConvertKit, Drip, AWeber, and more. Just paste the embed code — it works everywhere.",
      },
      {
        icon: Smartphone,
        title: "Universal Compatibility",
        description: "GIF-based rendering means timers work in every email client. Desktop apps, mobile clients, webmail — if it displays images, it displays your timer.",
      },
    ],
  },
]

export default function FeaturesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.emailtimers.com" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://www.emailtimers.com/features" },
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
              Powerful features for{" "}
              <span className="text-brand-primary">
                email marketers
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to create, customize, and track countdown timers that drive conversions.
            </p>
          </div>
        </div>
      </section>

      {featureGroups.map((group, gi) => (
        <section key={group.title} className={gi % 2 === 0 ? "bg-white py-16" : "bg-gray-50 py-16"}>
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{group.title}</h2>
              <p className="mt-2 text-gray-600">{group.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {group.features.map((f) => (
                <Card key={f.title} className="border-gray-200 hover:border-brand-primary/30">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                      <f.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{f.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  )
}
