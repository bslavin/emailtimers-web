import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Clock } from "lucide-react"
import SendPreview from "@/components/SendPreview"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badges */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-sm font-medium text-brand-primary">
              <Clock className="h-3.5 w-3.5" />
              Email Marketing Timers
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-sm font-medium text-brand-primary">
              Boost Conversions
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-sm font-medium text-brand-primary">
              Create Urgency
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-sm font-medium text-brand-primary">
              Drive Clicks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-sm font-medium text-brand-primary">
              No Code Required
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="text-brand-primary">FREE</span> Countdown Timers
            <br />
            for Email.
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
            Increase engagement, conversions, and sales with animated countdown timers
            that update in real-time every time your email is opened.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="xl">
              <a href="https://app.emailtimers.com/users/sign-up">Start Free</a>
            </Button>
            <Button asChild variant="secondary" size="xl">
              <a href="/pricing">See Pricing</a>
            </Button>
          </div>

          {/* Animated timer preview */}
          <div className="mx-auto mt-14 max-w-3xl">
            <Image
              src="/screenshots/email-timer-animated.gif"
              alt="Animated countdown timer showing days, hours, minutes and seconds ticking down in real-time"
              width={900}
              height={450}
              className="w-full rounded-xl"
              priority
              unoptimized
            />
          </div>

          {/* Metrics */}
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-8 border-t border-gray-200 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 md:text-3xl">1.25M</div>
              <div className="mt-1 text-sm text-gray-500">Free impressions/mo</div>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-2xl font-bold text-gray-900 md:text-3xl">Every</div>
              <div className="mt-1 text-sm text-gray-500">Email client supported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 md:text-3xl">99.9%</div>
              <div className="mt-1 text-sm text-gray-500">Uptime</div>
            </div>
          </div>
          {/* Send preview form */}
          <SendPreview />
        </div>
      </div>
    </section>
  )
}
