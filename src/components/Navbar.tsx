"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/integrations", label: "Integrations" },
  { href: "/guides", label: "Setup Guides" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-gray-300 shadow-md"
          : "bg-gray-300"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Mail className="h-6 w-6 text-brand-primary" />
          <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-fuchsia bg-clip-text text-transparent">
            Email Timers
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <a href="https://app.emailtimers.com/users/sign-up">Start Free</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-4/5 max-w-sm bg-white shadow-xl lg:hidden">
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t">
                <Button asChild className="w-full" size="lg">
                  <a href="https://app.emailtimers.com/users/sign-up">Start Free</a>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
