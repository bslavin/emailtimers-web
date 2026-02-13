exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" }
  }

  const { email, token } = JSON.parse(event.body || "{}")

  if (!email || !token) {
    return { statusCode: 400, body: JSON.stringify({ error: "Email and captcha token required" }) }
  }

  // Verify Turnstile token
  const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY || "",
      response: token,
      remoteip: event.headers["x-forwarded-for"] || "",
    }),
  })

  const verifyData = await verifyRes.json()

  if (!verifyData.success) {
    return { statusCode: 403, body: JSON.stringify({ error: "Captcha verification failed" }) }
  }

  // Call the Email Timers API
  const apiRes = await fetch(
    `https://api.emailtimers.com/v1/api/timers/email_timer?email=${encodeURIComponent(email)}`
  )

  if (!apiRes.ok) {
    return { statusCode: 502, body: JSON.stringify({ error: "Failed to send preview email" }) }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  }
}
