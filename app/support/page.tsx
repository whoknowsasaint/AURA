import Link from "next/link"
import type { Metadata } from "next"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

export const metadata: Metadata = { title: "Support", description: "Get help with your AURA product." }

const topics = [
  { label: "FAQ", description: "Answers to the most common questions about setup, connectivity, and care.", href: "/faq" },
  { label: "Warranty", description: "What our 2-year warranty covers and how to make a claim.", href: "/warranty" },
  { label: "Returns", description: "60-day returns, no questions asked. Here is how.", href: "/returns" },
  { label: "Contact", description: "Speak to a real person on the AURA team.", href: "/contact" },
]

export default function SupportPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-stone-200">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">Support</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.05] tracking-tight text-stone-900">
            We stand behind<br /><em className="font-light-italic">everything we make.</em>
          </h1>
        </RevealOnScroll>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {topics.map((t, i) => (
            <RevealOnScroll key={t.label} delay={i * 0.08}>
              <Link href={t.href} className="group block border border-stone-200 p-8 hover:border-stone-400 transition-colors duration-200">
                <p className="text-base font-medium text-stone-900 mb-2 group-hover:text-stone-500 transition-colors duration-200">{t.label} &rarr;</p>
                <p className="text-sm text-stone-400 leading-relaxed">{t.description}</p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  )
}