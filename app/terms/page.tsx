import type { Metadata } from "next"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

export const metadata: Metadata = { title: "Terms of Service", description: "AURA Audio terms of service." }

const sections = [
  { heading: "Acceptance", body: "By using this website or purchasing AURA products, you agree to these terms. If you do not agree, do not use the site." },
  { heading: "Products and pricing", body: "All prices are in USD and exclude applicable taxes. We reserve the right to change prices at any time. Product images are representative and colours may vary from screen to screen." },
  { heading: "Orders", body: "An order confirmation email does not constitute acceptance. We reserve the right to cancel any order and provide a full refund if a product is out of stock, incorrectly priced, or unavailable." },
  { heading: "Intellectual property", body: "All content on this site, including copy, photography, and product designs, is owned by AURA Audio ApS and protected by copyright and trademark law. You may not reproduce it without written permission." },
  { heading: "Limitation of liability", body: "AURA Audio is not liable for indirect, incidental, or consequential damages arising from product use or inability to use products beyond the replacement cost of the item purchased." },
  { heading: "Governing law", body: "These terms are governed by Danish law. Any disputes will be resolved in the courts of Copenhagen, Denmark." },
]

export default function TermsPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 border-b border-stone-200">
        <RevealOnScroll>
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">Legal</p>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-tight text-stone-900">Terms of Service</h1>
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