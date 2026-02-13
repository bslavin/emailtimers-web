import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-primary via-brand-accent to-brand-fuchsia py-16 md:py-20">
      <div className="container relative text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ready to boost your email conversions?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Join thousands of marketers using Email Timers to create urgency and drive action. Start free — no credit card required.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="xl" className="bg-white text-brand-primary hover:bg-white/90 shadow-xl hover:shadow-2xl">
            <a href="https://app.emailtimers.com/users/sign-up">Start Free Today</a>
          </Button>
          <Button asChild variant="ghost" size="xl" className="text-white border-2 border-white/30 hover:bg-white/10">
            <a href="/pricing">View Pricing</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
