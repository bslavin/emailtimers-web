import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Email Timers helped us increase our flash sale conversions by over 30%. The countdown creates real urgency that drives clicks.",
    name: "Marketing Director",
    company: "E-commerce Brand",
  },
  {
    quote:
      "Dead simple to set up. Paste the code, done. Timers look great on every device and our open-to-click rate jumped immediately.",
    name: "Email Marketing Manager",
    company: "SaaS Company",
  },
  {
    quote:
      "We use evergreen timers for our onboarding sequences. Every new subscriber gets a personalized countdown — it&apos;s been a game-changer for activation.",
    name: "Growth Lead",
    company: "Digital Agency",
  },
]

export default function TestimonialCards() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Trusted by marketers everywhere
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See how email marketers use countdown timers to drive results.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-gray-200">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-primary text-brand-primary" />
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4 border-t pt-4">
                  <div className="font-medium text-gray-900">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
