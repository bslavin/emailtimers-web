import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Email Timers privacy policy — how we collect, use, and protect your data.",
  alternates: { canonical: "https://www.emailtimers.com/privacy" },
}

export default function PrivacyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.emailtimers.com" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.emailtimers.com/privacy" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="py-16 md:py-20">
        <article className="container prose prose-gray mx-auto max-w-3xl">
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: February 2026</p>

          <h2>Information We Collect</h2>
          <p>When you create an account or use Email Timers, we collect information you provide directly, including your name, email address, and payment information. We also collect usage data such as timer impressions, page views, and device information.</p>

          <h2>How We Use Your Information</h2>
          <p>We use your information to provide and improve Email Timers, process payments, send service communications, and analyze usage patterns to enhance our product.</p>

          <h2>Timer Impression Data</h2>
          <p>When an email containing an Email Timers countdown is opened, our servers process the request to generate the timer image. We log impression data (timestamp, general location, email client) for analytics. We do not read or access the content of your emails.</p>

          <h2>Data Sharing</h2>
          <p>We do not sell your personal data. We share data only with service providers necessary to operate Email Timers (payment processing, hosting, analytics) and when required by law.</p>

          <h2>Data Retention</h2>
          <p>We retain your account data for as long as your account is active. Analytics data is retained for 12 months. You may request deletion of your data at any time by contacting support.</p>

          <h2>Cookies</h2>
          <p>We use cookies for authentication, analytics, and service functionality. See our <a href="/cookie-notice">Cookie Notice</a> for details.</p>

          <h2>Security</h2>
          <p>We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security reviews.</p>

          <h2>Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. You may also object to processing or request data portability. Contact us at support to exercise these rights.</p>

          <h2>Contact</h2>
          <p>For privacy-related questions, contact us through our <a href="/contact">contact page</a> or visit our <a href="https://emailtimers.freshdesk.com/support/home">knowledge base</a>.</p>

          <p>DuoCircle LLC<br />5965 Village Way Suite 105-234<br />San Diego, CA 92130</p>
        </article>
      </section>
    </>
  )
}
