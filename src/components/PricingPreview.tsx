import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function PricingPreview() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Start free. Upgrade when you&apos;re ready.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our free plan includes 1.25 million impressions per month — more than most competitors&apos; paid plans.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Free plan */}
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-8">
            <div className="text-sm font-medium uppercase tracking-wider text-gray-500">Free</div>
            <div className="mt-2">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500">/month</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">1,250,000 impressions/month</p>
            <ul className="mt-6 space-y-3">
              {["Unlimited countdown timers", "Global CDN delivery", "Unlimited domains", "Real-time analytics"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full" size="lg">
              <a href="https://app.emailtimers.com/users/sign-up">Get Started Free</a>
            </Button>
          </div>

          {/* Paid highlight */}
          <div className="relative rounded-2xl border-2 border-brand-primary bg-brand-primary/5 p-8">
            <div className="absolute -top-3 left-6 rounded-full bg-brand-primary px-3 py-1 text-xs font-bold text-white">
              Most Popular
            </div>
            <div className="text-sm font-medium uppercase tracking-wider text-brand-primary">Active Marketer</div>
            <div className="mt-2">
              <span className="text-4xl font-bold text-gray-900">$29</span>
              <span className="text-gray-500">/month</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">700,000 impressions/month</p>
            <ul className="mt-6 space-y-3">
              {[
                "Everything in Free",
                "Branding removed",
                "Dynamic language support",
                "Expired counter custom message",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span className={f === "Branding removed" ? "font-semibold text-brand-primary" : ""}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full" size="lg">
              <a href="https://app.emailtimers.com/users/sign-up">Start Free Trial</a>
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/pricing" className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline">
            Compare all plans <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
