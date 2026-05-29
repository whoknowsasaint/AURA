import Link from "next/link"
import type { Metadata } from "next"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

export const metadata: Metadata = { title: "Warranty", description: "AURA 2-year warranty information." }

const covered = ["Driver failures", "Electronic component defects", "Hinge and mechanical failures", "Charging port defects", "Battery degradation below 80% capacity within 2 years"]
const notCovered = ["Physical damage from drops or impacts", "Liquid damage", "Earcup leather wear", "Cable wear", "Damage from unauthorised modifications"]

export default function WarrantyPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-stone-200">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">Warranty</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.05] tracking-tight text-stone-900">
            2 years.<br /><em className="font-light-italic">No questions.</em>
          </h1>
          <p className="text-sm text-stone-500 leading-relaxed mt-8 max-w-md">Every AURA product is covered by a 2-year limited warranty from the date of purchase. We stand behind our engineering.</p>
        </RevealOnScroll>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium mb-6">What is covered</p>
            <ul className="space-y-4">
              {covered.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-stone-600">
                  <span className="w-1 h-1 rounded-full bg-stone-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium mb-6">What is not covered</p>
            <ul className="space-y-4">
              {notCovered.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-stone-500">
                  <span className="w-1 h-1 rounded-full bg-stone-300 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="mt-16 pt-12 border-t border-stone-200">
          <p className="text-sm text-stone-500 mb-6">To make a warranty claim, contact our support team with your order number and a description of the issue. We will respond within one business day.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200">
            Start a claim
          </Link>
        </RevealOnScroll>
      </section>
    </div>
  )
}