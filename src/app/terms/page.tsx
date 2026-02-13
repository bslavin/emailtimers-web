import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Email Timers terms of service — rules and guidelines for using our countdown timer platform.",
  alternates: { canonical: "https://www.emailtimers.com/terms" },
}

export default function TermsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.emailtimers.com" },
      { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://www.emailtimers.com/terms" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="py-16 md:py-20">
        <article className="container prose prose-gray mx-auto max-w-3xl">
          <h1>Terms of Service</h1>
          <p className="lead">Last updated: February 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>By accessing or using Email Timers, you agree to be bound by these Terms of Service. If you do not agree, do not use the service.</p>

          <h2>Service Description</h2>
          <p>Email Timers provides animated countdown timer generation for email marketing campaigns. Timers are delivered as images via our content delivery network.</p>

          <h2>Account Responsibilities</h2>
          <p>You are responsible for maintaining the security of your account credentials. You must provide accurate information when creating an account and keep it up to date.</p>

          <h2>Acceptable Use</h2>
          <p>You may not use Email Timers for spam, phishing, or any illegal activity. Timers must not contain misleading information or be used to deceive recipients. We reserve the right to suspend accounts that violate these terms.</p>

          <h2>Impression Limits</h2>
          <p>Each plan includes a monthly impression allowance. Impressions reset at the beginning of each billing cycle. If you exceed your limit, timer delivery may be paused until the next cycle or until you upgrade your plan.</p>

          <h2>Payment and Billing</h2>
          <p>Paid plans are billed monthly. You may cancel at any time; cancellation takes effect at the end of your current billing period. Refunds are not provided for partial months.</p>

          <h2>Intellectual Property</h2>
          <p>You retain ownership of your timer designs and content. Email Timers retains ownership of the platform, technology, and service infrastructure.</p>

          <h2>Service Availability</h2>
          <p>We strive for 99.9% uptime but do not guarantee uninterrupted service. We are not liable for damages resulting from service interruptions.</p>

          <h2>Limitation of Liability</h2>
          <p>Email Timers and DuoCircle LLC are not liable for indirect, incidental, or consequential damages. Our total liability is limited to the fees you paid in the 12 months preceding the claim.</p>

          <h2>Changes to Terms</h2>
          <p>We may update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>

          <h2>Contact</h2>
          <p>For questions about these terms, <a href="/contact">contact us</a>.</p>

          <p>DuoCircle LLC<br />5965 Village Way Suite 105-234<br />San Diego, CA 92130</p>
        </article>
      </section>
    </>
  )
}
