import type { Metadata } from "next"
import Script from "next/script"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Email Countdown Timers for Marketing Campaigns | Email Timers",
    template: "%s | Email Timers",
  },
  description:
    "Create animated countdown timers for your email marketing campaigns. Drive urgency, boost engagement, and increase conversions. Free plan with 1.25M impressions/month.",
  keywords:
    "email countdown timer, email marketing timer, countdown GIF, email timer generator, marketing countdown, evergreen timer, email campaign timer",
  authors: [{ name: "Email Timers" }],
  creator: "Email Timers",
  publisher: "Email Timers",
  metadataBase: new URL("https://www.emailtimers.com"),
  openGraph: {
    title: "Email Countdown Timers for Marketing Campaigns | Email Timers",
    description:
      "Create animated countdown timers that boost email engagement and conversions. Free plan with 1.25M impressions/month. Works with MailChimp, HubSpot, and 10+ platforms.",
    url: "https://www.emailtimers.com",
    siteName: "Email Timers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Countdown Timers for Marketing Campaigns",
    description:
      "Create animated countdown timers that boost email engagement and conversions. Free plan with 1.25M impressions/month.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.emailtimers.com",
  },
}

export const viewport = {
  themeColor: "#FF6B35",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Email Timers",
    alternateName: "Email Timers",
    url: "https://www.emailtimers.com",
    description:
      "Create animated countdown timers for email marketing campaigns. Drive urgency, boost engagement, and increase conversions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5965 Village Way Suite 105-234",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92130",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Email Timers",
    url: "https://www.emailtimers.com",
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Email Timers",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Animated countdown timer generator for email marketing campaigns",
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        description: "1,250,000 impressions/month, unlimited timers",
      },
      {
        "@type": "Offer",
        name: "Starter",
        price: "9",
        priceCurrency: "USD",
        description: "125,000 impressions/month, branding removed",
      },
      {
        "@type": "Offer",
        name: "Active Marketer",
        price: "29",
        priceCurrency: "USD",
        description: "700,000 impressions/month, branding removed, all features",
      },
      {
        "@type": "Offer",
        name: "Professional",
        price: "79",
        priceCurrency: "USD",
        description: "1,500,000 impressions/month, branding removed, all features",
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema, softwareSchema]),
          }}
        />
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXHVLDQ5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:p-4 focus:text-brand-primary">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MXHVLDQ5');`,
          }}
        />
      </body>
    </html>
  )
}
