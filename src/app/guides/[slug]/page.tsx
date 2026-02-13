import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Copy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/CTASection"

const guides: Record<string, {
  name: string
  logo: string
  description: string
  overview: string
  steps: { title: string; detail: string; code?: string }[]
  tips: string[]
}> = {
  mailchimp: {
    name: "MailChimp",
    logo: "/logos/mailchimp.png",
    description: "Add countdown timers to your MailChimp email campaigns and automations.",
    overview: "MailChimp makes it easy to add countdown timers using their drag-and-drop editor. You can insert timers into regular campaigns, automated workflows, and A/B test emails. The timer displays as a standard image, so it's compatible with all MailChimp templates.",
    steps: [
      {
        title: "Create your timer",
        detail: "Log in to Email Timers and create a new countdown timer. Choose your timer type (fixed date, evergreen, or cyclic), customize the colors and style to match your brand, and set your target date/time.",
      },
      {
        title: "Copy the embed code",
        detail: "Once your timer is ready, click the \"Get Code\" button. Copy the HTML embed code — it contains an image tag that points to your unique timer URL.",
        code: '<img src="https://app.emailtimers.com/timer/YOUR_TIMER_ID.gif" alt="Countdown Timer" width="600" height="200" />',
      },
      {
        title: "Open MailChimp email editor",
        detail: "In MailChimp, create a new campaign or edit an existing one. Open the email editor and navigate to where you want the timer to appear.",
      },
      {
        title: "Add a Code content block",
        detail: "From the content blocks panel, drag a \"Code\" block into your email layout. This block accepts raw HTML which is what we need for the timer.",
      },
      {
        title: "Paste and send",
        detail: "Paste your Email Timers embed code into the code block. Preview your email to verify the timer appears correctly, then schedule or send your campaign.",
      },
    ],
    tips: [
      "Use a 600px wide timer for best results in MailChimp templates",
      "Test with MailChimp's preview mode to see how the timer renders across email clients",
      "For automated workflows, evergreen timers work best since each recipient gets a fresh countdown",
      "The timer image updates automatically — no need to edit your campaign after setup",
    ],
  },
  hubspot: {
    name: "HubSpot",
    logo: "/logos/hubspot.png",
    description: "Embed countdown timers in HubSpot marketing emails and automated sequences.",
    overview: "HubSpot's email editor supports custom HTML modules, making it straightforward to add countdown timers to your marketing emails, sales sequences, and automated workflows.",
    steps: [
      {
        title: "Create your timer",
        detail: "In Email Timers, create a new countdown. Pick your timer type, set the end date, and customize the design to match your HubSpot email template colors.",
      },
      {
        title: "Copy the embed code",
        detail: "Click \"Get Code\" and copy the HTML embed code for your timer.",
        code: '<img src="https://app.emailtimers.com/timer/YOUR_TIMER_ID.gif" alt="Countdown Timer" width="600" height="200" />',
      },
      {
        title: "Edit your HubSpot email",
        detail: "In HubSpot, go to Marketing > Email and create or edit your email. Open the drag-and-drop editor.",
      },
      {
        title: "Add a custom HTML module",
        detail: "Drag a \"Custom HTML\" module into your email layout at the desired position. Double-click it to open the code editor.",
      },
      {
        title: "Paste the code",
        detail: "Paste the Email Timers embed code into the HTML editor. Click \"Save\" and preview the email to confirm the timer renders correctly.",
      },
    ],
    tips: [
      "HubSpot's responsive templates work well with 600px wide timers",
      "Use personalization tokens alongside timers for maximum impact",
      "For sequences, consider evergreen timers that start fresh for each contact",
      "Test across HubSpot's email client preview to verify rendering",
    ],
  },
  gmail: {
    name: "Gmail",
    logo: "/logos/gmail.png",
    description: "Add countdown timers to Gmail messages for direct outreach.",
    overview: "Gmail doesn't support raw HTML in compose, but you can insert timer images directly using the image URL. This works for one-to-one emails and cold outreach.",
    steps: [
      {
        title: "Create your timer",
        detail: "Set up a new countdown timer in Email Timers. For individual outreach, evergreen timers often work best.",
      },
      {
        title: "Copy the image URL",
        detail: "Instead of the full HTML code, copy just the image URL from your timer dashboard. It looks like a direct link ending in .gif.",
        code: "https://app.emailtimers.com/timer/YOUR_TIMER_ID.gif",
      },
      {
        title: "Compose your Gmail message",
        detail: "Open Gmail and compose a new email or reply. Position your cursor where you want the timer to appear.",
      },
      {
        title: "Insert the image",
        detail: "Click the \"Insert photo\" icon in the compose toolbar (or drag and drop). Select \"Web Address (URL)\" and paste your timer image URL. Click Insert.",
      },
      {
        title: "Send your email",
        detail: "The timer image will appear inline in your email. It updates with an accurate countdown each time the recipient opens the message.",
      },
    ],
    tips: [
      "Gmail's compose window lets you resize the image after inserting — drag the corners to fit",
      "For cold outreach, pair the timer with a clear CTA and deadline",
      "The timer works in Gmail's mobile app too",
      "If inserting via URL doesn't work, download the timer image and attach it inline",
    ],
  },
  "constant-contact": {
    name: "Constant Contact",
    logo: "/logos/constant-contact.png",
    description: "Add urgency to your Constant Contact newsletters and campaigns.",
    overview: "Constant Contact's email editor supports HTML code blocks, making it simple to embed countdown timers in your newsletters, promotions, and event invitations.",
    steps: [
      {
        title: "Create your timer",
        detail: "Build a countdown timer in Email Timers. Choose colors that complement your Constant Contact template.",
      },
      {
        title: "Copy the embed code",
        detail: "Copy the HTML embed code from your timer dashboard.",
        code: '<img src="https://app.emailtimers.com/timer/YOUR_TIMER_ID.gif" alt="Countdown Timer" width="600" height="200" />',
      },
      {
        title: "Edit your email in Constant Contact",
        detail: "Create or edit a campaign in Constant Contact. Open the email editor.",
      },
      {
        title: "Insert an HTML block",
        detail: "Add an \"HTML\" content block to your email layout where you want the timer. Click to edit the block.",
      },
      {
        title: "Paste the code and preview",
        detail: "Paste the embed code, save the block, and use Constant Contact's preview to verify the timer displays correctly.",
      },
    ],
    tips: [
      "Constant Contact's templates are typically 600px wide — match your timer width",
      "Use timers for event registrations, flash sales, and limited-time offers",
      "Preview in multiple email clients using Constant Contact's built-in tool",
    ],
  },
  convertkit: {
    name: "ConvertKit",
    logo: "/logos/convertkit.png",
    description: "Use timers in ConvertKit broadcasts and automated email sequences.",
    overview: "ConvertKit's email editor supports HTML mode, which lets you embed countdown timer code directly into your broadcasts and sequence emails.",
    steps: [
      {
        title: "Create your timer",
        detail: "Set up a countdown timer in Email Timers. For automated sequences, evergreen timers are ideal.",
      },
      {
        title: "Copy the embed code",
        detail: "Copy the HTML embed code for your timer.",
        code: '<img src="https://app.emailtimers.com/timer/YOUR_TIMER_ID.gif" alt="Countdown Timer" width="600" height="200" />',
      },
      {
        title: "Open ConvertKit email editor",
        detail: "In ConvertKit, create a new broadcast or edit a sequence email.",
      },
      {
        title: "Switch to HTML mode",
        detail: "In the email editor, click the HTML button (</>) to switch to raw HTML editing mode.",
      },
      {
        title: "Paste and publish",
        detail: "Paste the embed code at the desired location in the HTML. Switch back to visual mode to confirm the timer appears, then send or schedule.",
      },
    ],
    tips: [
      "ConvertKit emails are typically plain-text styled — the timer adds strong visual contrast",
      "Evergreen timers pair perfectly with ConvertKit's automated sequences",
      "Test your email using ConvertKit's preview feature before sending",
    ],
  },
  drip: {
    name: "Drip",
    logo: "/logos/drip.png",
    description: "Insert countdown timers into Drip workflows and campaign emails.",
    overview: "Drip's visual email builder supports HTML blocks, making it easy to embed Email Timers into your e-commerce campaigns and automated workflows.",
    steps: [
      {
        title: "Create your timer",
        detail: "Build a countdown timer in Email Timers. Match the style to your Drip campaign design.",
      },
      {
        title: "Copy the embed code",
        detail: "Copy the HTML embed code from your timer.",
        code: '<img src="https://app.emailtimers.com/timer/YOUR_TIMER_ID.gif" alt="Countdown Timer" width="600" height="200" />',
      },
      {
        title: "Open Drip's visual builder",
        detail: "In Drip, create or edit a campaign email. Open the visual email builder.",
      },
      {
        title: "Add an HTML block",
        detail: "Drag an HTML content block into your email layout where you want the timer.",
      },
      {
        title: "Paste the code",
        detail: "Paste the Email Timers embed code into the HTML block. Save and preview your email.",
      },
    ],
    tips: [
      "Drip's e-commerce focus pairs well with countdown timers for flash sales and cart abandonment",
      "Use Drip's workflow builder to trigger timer-embedded emails based on user behavior",
      "Test timer rendering across devices using Drip's preview mode",
    ],
  },
  infusionsoft: {
    name: "Infusionsoft",
    logo: "/logos/infusionsoft.png",
    description: "Embed timers in Keap/Infusionsoft campaigns and follow-up sequences.",
    overview: "Infusionsoft (now Keap) allows you to embed HTML in your email campaigns. This makes adding countdown timers straightforward for your follow-up sequences and broadcast emails.",
    steps: [
      {
        title: "Create your timer",
        detail: "Set up a new countdown timer in Email Timers. Configure the end date and customize the design.",
      },
      {
        title: "Copy the embed code",
        detail: "Copy the HTML embed code for your countdown timer.",
        code: '<img src="https://app.emailtimers.com/timer/YOUR_TIMER_ID.gif" alt="Countdown Timer" width="600" height="200" />',
      },
      {
        title: "Open Infusionsoft email builder",
        detail: "In Infusionsoft/Keap, navigate to your campaign and open the email you want to edit.",
      },
      {
        title: "Add an HTML snippet",
        detail: "In the email builder, add a text block or HTML snippet where you want the timer to appear.",
      },
      {
        title: "Paste and save",
        detail: "Switch to HTML/source mode, paste the timer code, and save. Preview the email to confirm it renders correctly.",
      },
    ],
    tips: [
      "Infusionsoft's campaign builder works great with evergreen timers in automated sequences",
      "Use timers in your follow-up sequences to increase urgency on offers",
      "Test with a contact record before sending to your full list",
    ],
  },
  aweber: {
    name: "AWeber",
    logo: "/logos/aweber.png",
    description: "Add countdowns to AWeber broadcasts and autoresponder emails.",
    overview: "AWeber's drag-and-drop email editor supports custom HTML blocks, allowing you to embed countdown timers in broadcasts, autoresponders, and campaign emails.",
    steps: [
      {
        title: "Create your timer",
        detail: "Build a countdown timer in Email Timers. Style it to match your AWeber template.",
      },
      {
        title: "Copy the embed code",
        detail: "Copy the HTML embed code from your Email Timers dashboard.",
        code: '<img src="https://app.emailtimers.com/timer/YOUR_TIMER_ID.gif" alt="Countdown Timer" width="600" height="200" />',
      },
      {
        title: "Open AWeber's email editor",
        detail: "In AWeber, create a new message or edit an existing one in the drag-and-drop editor.",
      },
      {
        title: "Add a custom HTML block",
        detail: "Drag an HTML content block into your email template at the position where you want the timer.",
      },
      {
        title: "Paste the code and send",
        detail: "Paste the embed code into the HTML block. Preview the email and send or schedule when ready.",
      },
    ],
    tips: [
      "AWeber templates are typically 600px wide — size your timer accordingly",
      "Use timers in your autoresponder series for time-sensitive offers",
      "AWeber's preview tool lets you check rendering across popular email clients",
    ],
  },
  "exact-target": {
    name: "Exact Target",
    logo: "/logos/exact-target.png",
    description: "Integrate timers with Salesforce Marketing Cloud (Exact Target) emails.",
    overview: "Salesforce Marketing Cloud (formerly Exact Target) supports HTML content blocks in its email builder, making it straightforward to add countdown timers to your enterprise email campaigns.",
    steps: [
      {
        title: "Create your timer",
        detail: "Create a new countdown timer in Email Timers. For enterprise campaigns, fixed-date timers work best for coordinated launches.",
      },
      {
        title: "Copy the embed code",
        detail: "Copy the HTML embed code for your timer.",
        code: '<img src="https://app.emailtimers.com/timer/YOUR_TIMER_ID.gif" alt="Countdown Timer" width="600" height="200" />',
      },
      {
        title: "Edit your email in Marketing Cloud",
        detail: "In Salesforce Marketing Cloud, open Content Builder and navigate to your email.",
      },
      {
        title: "Insert an HTML content block",
        detail: "Add a new HTML content block to your email layout. Click to edit the block's source code.",
      },
      {
        title: "Paste and test",
        detail: "Paste the embed code, save, and use Marketing Cloud's preview and test send features to verify rendering.",
      },
    ],
    tips: [
      "Use AMPscript or dynamic content alongside timers for personalized urgency",
      "Marketing Cloud's Litmus integration lets you preview timer rendering across 90+ clients",
      "For journey builder emails, consider evergreen timers that count down per-contact",
    ],
  },
  mailshake: {
    name: "Mailshake",
    logo: "/logos/mailshake.png",
    description: "Boost cold outreach with countdown urgency in Mailshake campaigns.",
    overview: "Mailshake supports image insertion in its campaign editor. Add countdown timers to your cold outreach sequences to create urgency and improve response rates.",
    steps: [
      {
        title: "Create your timer",
        detail: "Build a countdown timer in Email Timers. Evergreen timers work best for cold outreach since each prospect gets a fresh countdown.",
      },
      {
        title: "Copy the image URL",
        detail: "Copy the direct image URL for your timer (the .gif link).",
        code: "https://app.emailtimers.com/timer/YOUR_TIMER_ID.gif",
      },
      {
        title: "Open Mailshake campaign editor",
        detail: "In Mailshake, create a new campaign or edit an existing sequence step.",
      },
      {
        title: "Insert the image",
        detail: "In the email editor, use the image insertion tool and paste your timer image URL. Adjust sizing as needed.",
      },
      {
        title: "Launch your campaign",
        detail: "Preview the email to verify the timer appears correctly. Add your prospect list and launch the campaign.",
      },
    ],
    tips: [
      "Evergreen timers are ideal for cold outreach — each prospect sees a fresh countdown",
      "Keep timer styling professional and clean for B2B outreach",
      "Pair the timer with a specific CTA like \"Book a demo before [date]\"",
      "Test the email rendering before launching to your full prospect list",
    ],
  },
  woodpecker: {
    name: "Woodpecker",
    logo: "/logos/woodpecker.png",
    description: "Add timer urgency to Woodpecker cold email and follow-up sequences.",
    overview: "Woodpecker supports HTML in its email editor, so you can embed countdown timer images into your cold email sequences and follow-ups.",
    steps: [
      {
        title: "Create your timer",
        detail: "Set up an evergreen countdown timer in Email Timers — ideal for cold email sequences where each prospect should see a fresh countdown.",
      },
      {
        title: "Copy the image tag",
        detail: "Copy the HTML image tag from your timer dashboard.",
        code: '<img src="https://app.emailtimers.com/timer/YOUR_TIMER_ID.gif" alt="Countdown Timer" width="600" height="200" />',
      },
      {
        title: "Open Woodpecker campaign",
        detail: "In Woodpecker, create a new campaign or edit an existing email step.",
      },
      {
        title: "Switch to HTML mode",
        detail: "In the email editor, switch to HTML/source mode to access the raw code.",
      },
      {
        title: "Insert the timer code",
        detail: "Paste the timer image tag at the desired position in your email HTML. Switch back to preview mode and verify the timer appears.",
      },
    ],
    tips: [
      "Use evergreen timers so each prospect gets a unique deadline based on when they open",
      "Woodpecker's follow-up sequences pair well with escalating urgency messaging",
      "Keep timer designs clean and professional for cold B2B outreach",
    ],
  },
  autopilot: {
    name: "Autopilot",
    logo: "/logos/autopilot.png",
    description: "Insert countdown timers into Autopilot journeys and email campaigns.",
    overview: "Autopilot's visual journey builder and email editor support HTML blocks, making it simple to embed countdown timers in your automated customer journeys.",
    steps: [
      {
        title: "Create your timer",
        detail: "Build a countdown timer in Email Timers. For journey-based emails, evergreen timers adapt to each contact's timeline.",
      },
      {
        title: "Copy the embed code",
        detail: "Copy the HTML embed code for your timer.",
        code: '<img src="https://app.emailtimers.com/timer/YOUR_TIMER_ID.gif" alt="Countdown Timer" width="600" height="200" />',
      },
      {
        title: "Open Autopilot journey builder",
        detail: "In Autopilot, navigate to your journey and open the email action you want to edit.",
      },
      {
        title: "Add an HTML block",
        detail: "In the email editor, add an HTML content block to your email template.",
      },
      {
        title: "Paste and publish",
        detail: "Paste the timer embed code into the HTML block. Save the email and publish your journey.",
      },
    ],
    tips: [
      "Autopilot's journey builder lets you trigger timer emails based on user actions",
      "Evergreen timers are perfect for onboarding sequences and trial expiration reminders",
      "Use Autopilot's A/B testing to measure timer impact on conversions",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = guides[params.slug]
  if (!guide) return { title: "Guide Not Found" }

  return {
    title: `${guide.name} Timer Setup Guide — Email Timers`,
    description: guide.description,
    alternates: {
      canonical: `https://www.emailtimers.com/guides/${params.slug}`,
    },
    openGraph: {
      title: `${guide.name} Countdown Timer Setup | Email Timers`,
      description: guide.description,
      url: `https://www.emailtimers.com/guides/${params.slug}`,
    },
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides[params.slug]

  if (!guide) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-2xl font-bold">Guide not found</h1>
        <Link href="/guides" className="mt-4 text-brand-primary hover:underline">
          View all guides
        </Link>
      </section>
    )
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.emailtimers.com" },
      { "@type": "ListItem", position: 2, name: "Setup Guides", item: "https://www.emailtimers.com/guides" },
      { "@type": "ListItem", position: 3, name: guide.name, item: `https://www.emailtimers.com/guides/${params.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="container">
          <Link
            href="/guides"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All Setup Guides
          </Link>

          <div className="flex items-center gap-5 mb-6">
            <div className="flex h-16 w-auto items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2">
              <Image
                src={guide.logo}
                alt={`${guide.name} logo`}
                width={197}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                {guide.name} Setup Guide
              </h1>
              <p className="mt-1 text-lg text-gray-600">{guide.description}</p>
            </div>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* Overview */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{guide.overview}</p>
            </div>

            {/* Steps */}
            <div className="mt-8 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Step-by-step instructions</h2>
              {guide.steps.map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-gray-600 leading-relaxed">{step.detail}</p>
                      {step.code && (
                        <div className="mt-4 rounded-lg bg-gray-900 p-4 overflow-x-auto">
                          <code className="text-sm text-gray-300 whitespace-pre">{step.code}</code>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips */}
            <div className="mt-8 rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Tips for {guide.name}</h2>
              <ul className="space-y-3">
                {guide.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">Ready to add a countdown timer to your {guide.name} emails?</p>
              <Button asChild size="xl">
                <a href="https://app.emailtimers.com/users/sign-up">Create Your Timer — Free</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
