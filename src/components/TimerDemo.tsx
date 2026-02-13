import Image from "next/image"

export default function TimerDemo() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            See it in action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our timers are animated GIFs that update in real-time every time your email
            is opened — no JavaScript needed, compatible with every email client.
          </p>
        </div>

        {/* Dashboard overview */}
        <div className="mx-auto mt-14 max-w-4xl">
          <h3 className="text-center text-xl font-bold text-gray-900 mb-6">
            Create timers in minutes
          </h3>
          <Image
            src="/screenshots/app-in-action.jpg"
            alt="Full Email Timers application dashboard showing the timer creation workflow with customization panel"
            width={1200}
            height={700}
            className="w-full rounded-xl border border-gray-200 shadow-xl"
          />
        </div>

        {/* Expired timer demo */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Customizable expired states
          </h3>
          <p className="text-gray-600 mb-6">
            When the countdown ends, show a custom message instead of zeros.
          </p>
          <Image
            src="/screenshots/expired-timer.gif"
            alt="Timer showing a custom 'Deal Expired' message after the countdown reaches zero"
            width={600}
            height={200}
            className="mx-auto w-full max-w-lg rounded-xl border border-gray-200"
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}
