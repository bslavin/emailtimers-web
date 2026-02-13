import HeroSection from "@/components/HeroSection"
import TimerDemo from "@/components/TimerDemo"
import FeaturesGrid from "@/components/FeaturesGrid"
import IntegrationLogos from "@/components/IntegrationLogos"
import TestimonialCards from "@/components/TestimonialCards"
import PricingPreview from "@/components/PricingPreview"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TimerDemo />
      <FeaturesGrid />
      <IntegrationLogos />
      <PricingPreview />
      <TestimonialCards />
      <FAQAccordion showSchema />
      <CTASection />
    </>
  )
}
