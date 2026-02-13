import Link from "next/link"
import { Mail } from "lucide-react"

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/integrations", label: "Integrations" },
    { href: "/guides", label: "Setup Guides" },
  ],
  Support: [
    { href: "https://emailtimers.freshdesk.com/support/home", label: "Knowledge Base", external: true },
    { href: "/contact", label: "Contact Us" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookie-notice", label: "Cookie Notice" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-fuchsia" />
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold">
              <Mail className="h-6 w-6 text-brand-primary-light" />
              <span className="bg-gradient-to-r from-brand-primary-light via-brand-accent to-brand-fuchsia bg-clip-text text-transparent">
                Email Timers
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Create animated countdown timers for your email marketing campaigns. Drive urgency, boost engagement, and increase conversions.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Email Timers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
