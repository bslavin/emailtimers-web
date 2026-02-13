import Link from "next/link"
import Image from "next/image"

const integrations = [
  { name: "MailChimp", logo: "/logos/mailchimp.png", slug: "mailchimp" },
  { name: "HubSpot", logo: "/logos/hubspot.png", slug: "hubspot" },
  { name: "Gmail", logo: "/logos/gmail.png", slug: "gmail" },
  { name: "Constant Contact", logo: "/logos/constant-contact.png", slug: "constant-contact" },
  { name: "ConvertKit", logo: "/logos/convertkit.png", slug: "convertkit" },
  { name: "Drip", logo: "/logos/drip.png", slug: "drip" },
  { name: "Infusionsoft", logo: "/logos/infusionsoft.png", slug: "infusionsoft" },
  { name: "AWeber", logo: "/logos/aweber.png", slug: "aweber" },
  { name: "Exact Target", logo: "/logos/exact-target.png", slug: "exact-target" },
  { name: "Mailshake", logo: "/logos/mailshake.png", slug: "mailshake" },
  { name: "Woodpecker", logo: "/logos/woodpecker.png", slug: "woodpecker" },
  { name: "Autopilot", logo: "/logos/autopilot.png", slug: "autopilot" },
]

export default function IntegrationLogos() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Works with your email platform
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Just paste your timer&apos;s embed code — it works everywhere. We have{" "}
            <Link href="/guides" className="text-brand-primary hover:underline font-medium">
              setup guides
            </Link>{" "}
            for every platform.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 items-center justify-items-center">
          {integrations.map((integration) => (
            <Link
              key={integration.name}
              href={`/guides#${integration.slug}`}
              className="group flex items-center justify-center rounded-xl border border-gray-100 bg-white px-6 py-5 transition-all hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-lg"
            >
              <Image
                src={integration.logo}
                alt={`${integration.name} logo`}
                width={197}
                height={48}
                className="h-12 w-auto opacity-80 transition-opacity group-hover:opacity-100"
              />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/integrations"
            className="text-sm font-medium text-brand-primary hover:underline"
          >
            View all integrations &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
