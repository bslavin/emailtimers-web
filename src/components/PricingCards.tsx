import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    impressions: "1,250,000",
    description: "Get started with generous limits",
    featured: false,
    features: [
      { name: "Unlimited countdown timers", included: true },
      { name: "Global CDN delivery", included: true },
      { name: "Unlimited domains", included: true },
      { name: "Real-time analytics", included: true },
      { name: "Branding removed", included: false, highlight: true },
      { name: "Dynamic language", included: false },
      { name: "Expired custom message", included: false },
    ],
  },
  {
    name: "Starter",
    price: "$9",
    impressions: "125,000",
    description: "Remove branding from your timers",
    featured: false,
    features: [
      { name: "Unlimited countdown timers", included: true },
      { name: "Global CDN delivery", included: true },
      { name: "Unlimited domains", included: true },
      { name: "Real-time analytics", included: true },
      { name: "Branding removed", included: true, highlight: true },
      { name: "Dynamic language", included: true },
      { name: "Expired custom message", included: false },
    ],
  },
  {
    name: "Active Marketer",
    price: "$29",
    impressions: "700,000",
    description: "Full-featured for growing teams",
    featured: true,
    features: [
      { name: "Unlimited countdown timers", included: true },
      { name: "Global CDN delivery", included: true },
      { name: "Unlimited domains", included: true },
      { name: "Real-time analytics", included: true },
      { name: "Branding removed", included: true, highlight: true },
      { name: "Dynamic language", included: true },
      { name: "Expired custom message", included: true },
    ],
  },
  {
    name: "Professional",
    price: "$79",
    impressions: "1,500,000",
    description: "Maximum volume for power users",
    featured: false,
    features: [
      { name: "Unlimited countdown timers", included: true },
      { name: "Global CDN delivery", included: true },
      { name: "Unlimited domains", included: true },
      { name: "Real-time analytics", included: true },
      { name: "Branding removed", included: true, highlight: true },
      { name: "Dynamic language", included: true },
      { name: "Expired custom message", included: true },
    ],
  },
]

export default function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative flex flex-col rounded-2xl border-2 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${
            plan.featured
              ? "border-brand-primary shadow-lg shadow-brand-primary/10"
              : "border-gray-200"
          }`}
        >
          {plan.featured && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-primary px-4 py-1 text-xs font-bold text-white whitespace-nowrap">
              Most Popular
            </div>
          )}

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
          </div>

          <div className="mb-2">
            <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
            <span className="text-gray-500">/month</span>
          </div>
          <p className="mb-6 text-sm text-gray-500">
            {plan.impressions} impressions/mo
          </p>

          <ul className="mb-8 flex-1 space-y-3">
            {plan.features.map((f) => (
              <li key={f.name} className="flex items-center gap-2 text-sm">
                {f.included ? (
                  <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                ) : (
                  <X className="h-4 w-4 shrink-0 text-gray-300" />
                )}
                <span
                  className={
                    f.highlight && f.included
                      ? "font-semibold text-brand-primary"
                      : f.included
                      ? "text-gray-700"
                      : "text-gray-400"
                  }
                >
                  {f.name}
                </span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant={plan.featured ? "default" : "outline"}
            className="w-full"
            size="lg"
          >
            <a href="https://app.emailtimers.com/users/sign-up">
              {plan.price === "$0" ? "Get Started Free" : "Start Free Trial"}
            </a>
          </Button>
        </div>
      ))}
    </div>
  )
}
