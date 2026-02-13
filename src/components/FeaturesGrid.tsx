import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Clock, Palette, Globe, BarChart3, Mail, Smartphone } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Multiple Timer Types",
    description:
      "Fixed date countdowns, evergreen timers that start per-recipient, and cyclic timers that reset automatically.",
  },
  {
    icon: Palette,
    title: "Full Customization",
    description:
      "Match your brand with custom colors, fonts, styles, and expired-state messages. Design timers that look native to your emails.",
  },
  {
    icon: Globe,
    title: "Global CDN Delivery",
    description:
      "Sub-second load times worldwide. Our CDN ensures your timers render instantly regardless of where your recipients are.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track impressions, email opens, and engagement. Know exactly how your timers perform with built-in analytics.",
  },
  {
    icon: Mail,
    title: "12+ Integrations",
    description:
      "Works with MailChimp, HubSpot, Gmail, Constant Contact, ConvertKit, and more. Just paste the embed code.",
  },
  {
    icon: Smartphone,
    title: "Mobile Compatible",
    description:
      "GIF-based timers work in every email client — desktop, mobile, webmail. No JavaScript or special rendering needed.",
  },
]

export default function FeaturesGrid() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Everything you need to create{" "}
            <span className="text-brand-primary">
              urgency
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features that make creating and managing email countdown timers effortless.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-gray-200 hover:border-brand-primary/30">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                  <feature.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
