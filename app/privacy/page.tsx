import type { Metadata } from "next"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

export const metadata: Metadata = { title: "Privacy Policy", description: "AURA Audio privacy policy." }

const sections = [
  { heading: "What we collect", body: "We collect information you provide directly: name, email, shipping address, and payment method when you place an order. We also collect anonymised usage data from the AURA app to improve product performance. We do not sell data. We do not share data with advertisers." },
  { heading: "How we use it", body: "Order fulfilment, shipping notifications, warranty processing, and product support. With your consent, we may send product updates and announcements. You can unsubscribe at any time." },
  { heading: "Cookies", body: "We use strictly necessary cookies to operate the site and optional analytics cookies to understand how visitors use it. See our Cookie Policy for details and opt-out options." },
  { heading: "Data retention", body: "Order data is retained for 7 years for legal and accounting purposes. App usage data is anonymised and retained for 2 years. You may request deletion of personal data at any time." },
  { heading: "Your rights", body: "You have the right to access, correct, or delete your personal data. To exercise any of these rights, contact privacy@aura-audio.com. We will respond within 30 days." },
  { heading: "Contact", body: "AURA Audio ApS, Njalsgade 76, 2300 Copenhagen, Denmark. privacy@aura-audio.com" },
]

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 border-b border-stone-200">
        <RevealOnScroll>
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">Legal</p>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-tight text-stone-900">Privacy Policy</h1>
          <p className="text-xs text-stone-400 mt-4">Last updated: January 2024</p>
        </RevealOnScroll>
      </section>
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-14 space-y-12">
        {sections.map((s, i) => (
          <RevealOnScroll key={s.heading} delay={i * 0.05}>
            <h2 className="text-base font-medium text-stone-900 mb-3">{s.heading}</h2>
            <p className="text-sm text-stone-500 leading-relaxed">{s.body}</p>
          </RevealOnScroll>
        ))}
      </section>
    </div>
  )
}