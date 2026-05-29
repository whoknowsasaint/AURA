import Link from "next/link"
import type { Metadata } from "next"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

export const metadata: Metadata = { title: "Press", description: "AURA Audio press and media resources." }

const coverage = [
  { outlet: "The Verge", headline: "AURA One is the headphone that makes you forget every other headphone exists.", date: "March 2024" },
  { outlet: "Wirecutter", headline: "Best noise-cancelling headphones: AURA One takes the top spot.", date: "January 2024" },
  { outlet: "Pitchfork", headline: "The headphone your favourite mastering engineer uses on their days off.", date: "November 2023" },
  { outlet: "Financial Times", headline: "Copenhagen's quiet obsession with perfect sound.", date: "September 2023" },
]

export default function PressPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-stone-200">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">Press</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.05] tracking-tight text-stone-900">
            What they&apos;re<br /><em className="font-light-italic">saying.</em>
          </h1>
        </RevealOnScroll>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="divide-y divide-stone-200">
          {coverage.map((c, i) => (
            <RevealOnScroll key={c.outlet} delay={i * 0.06}>
              <div className="py-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] tracking-[0.25em] uppercase font-medium text-stone-400">{c.outlet}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-300" />
                  <span className="text-[11px] text-stone-300">{c.date}</span>
                </div>
                <p className="text-lg md:text-xl font-light text-stone-700 leading-snug max-w-2xl">&ldquo;{c.headline}&rdquo;</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 py-16 max-w-[1440px] mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-4">Press enquiries</p>
          <p className="text-sm text-stone-500 mb-6">For interviews, product loans, and press assets, contact our communications team.</p>
          <Link href="/contact" className="text-[13px] tracking-wide text-stone-700 underline underline-offset-4 hover:text-stone-900 transition-colors">
            press@aura-audio.com
          </Link>
        </RevealOnScroll>
      </section>
    </div>
  )
}