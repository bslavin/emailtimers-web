"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

const TURNSTILE_SITE_KEY = "0x4AAAAAACb1yOkVjADhglVg"

export default function SendPreview() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  useEffect(() => {
    // Load Turnstile script
    if (document.getElementById("cf-turnstile-script")) return

    const script = document.createElement("script")
    script.id = "cf-turnstile-script"
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad"
    script.async = true

    ;(window as any).onTurnstileLoad = () => {
      if (turnstileRef.current && !(window as any)._turnstileRendered) {
        ;(window as any)._turnstileRendered = true
        widgetIdRef.current = (window as any).turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          appearance: "always",
          size: "normal",
          callback: (token: string) => setTurnstileToken(token),
          "expired-callback": () => setTurnstileToken(null),
          "error-callback": () => setTurnstileToken(null),
        })
      }
    }

    document.head.appendChild(script)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    if (!turnstileToken) {
      setStatus("error")
      setErrorMsg("Please complete the captcha verification.")
      return
    }

    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/.netlify/functions/send-preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token: turnstileToken }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to send preview")
      }

      setStatus("success")
      setEmail("")
      // Reset turnstile for next submission
      if (widgetIdRef.current && (window as any).turnstile) {
        ;(window as any).turnstile.reset(widgetIdRef.current)
        setTurnstileToken(null)
      }
    } catch (err: any) {
      setStatus("error")
      setErrorMsg(err.message || "Something went wrong. Please try again.")
    }
  }

  return (
    <div className="mx-auto mt-12 max-w-md">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="h-5 w-5 text-brand-primary" />
          <h3 className="text-lg font-semibold text-gray-900">See it in your inbox</h3>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Enter your email and we&apos;ll send you a live countdown timer preview.
        </p>

        {status === "success" ? (
          <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-4 text-emerald-700">
            <CheckCircle className="h-5 w-5 shrink-0" />
            <span className="text-sm font-medium">Preview sent! Check your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
            />
            <div ref={turnstileRef} />
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={status === "loading" || !turnstileToken}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send me a preview"
              )}
            </Button>
            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {errorMsg}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
