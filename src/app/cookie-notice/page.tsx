import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "Email Timers cookie notice — how we use cookies and similar technologies.",
  alternates: { canonical: "https://www.emailtimers.com/cookie-notice" },
}

export default function CookieNoticePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.emailtimers.com" },
      { "@type": "ListItem", position: 2, name: "Cookie Notice", item: "https://www.emailtimers.com/cookie-notice" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="py-16 md:py-20">
        <article className="container prose prose-gray mx-auto max-w-3xl">
          <h1>Cookie Notice</h1>
          <p className="lead">Last updated: February 2026</p>

          <h2>What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help us provide a better experience by remembering preferences and analyzing usage.</p>

          <h2>Cookies We Use</h2>

          <h3>Essential Cookies</h3>
          <p>Required for the website to function. These handle authentication, security, and basic functionality. Cannot be disabled.</p>

          <h3>Analytics Cookies</h3>
          <p>We use Google Analytics (via Google Tag Manager) to understand how visitors interact with our website. These cookies collect anonymized usage data including pages visited, time on site, and traffic sources.</p>

          <h3>Preference Cookies</h3>
          <p>These remember your choices (such as language or region) to provide a personalized experience.</p>

          <h2>Managing Cookies</h2>
          <p>You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. Note that blocking essential cookies may affect website functionality.</p>

          <h2>Timer Delivery</h2>
          <p>Email Timers countdown images served within emails do not use cookies. Timer impressions are logged via standard HTTP requests without placing cookies on the email recipient&apos;s device.</p>

          <h2>Updates</h2>
          <p>We may update this notice as our practices change. Check this page periodically for the latest information.</p>

          <h2>Contact</h2>
          <p>For questions about our cookie practices, <a href="/contact">contact us</a>.</p>
        </article>
      </section>
    </>
  )
}
