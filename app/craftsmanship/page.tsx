import Link from "next/link"
import type { Metadata } from "next"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

export const metadata: Metadata = { title: "Craftsmanship", description: "How AURA products are made." }

const pillars = [
  { label: "Acoustic engineering", body: "Every driver is designed in-house. We do not adapt off-the-shelf transducers. We build from the coil up, measure, revise, and repeat until the curve matches the reference." },
  { label: "Material selection", body: "We test every material against three criteria: tactile quality, acoustic performance, and longevity over a decade of daily use. If it fails any one of them, it does not ship." },
  { label: "Assembly", body: "All final assembly happens in our Copenhagen facility. Each unit is signed by the technician who built it and measured against the production reference before it leaves the bench." },
  { label: "Quality control", body: "A 48-point checklist. Frequency response matched within 0.5dB between channels. Every headband tension, every hinge torque, every cable termination tested by hand." },
]

export default function CraftsmanshipPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <RevealOnScroll className="max-w-3xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">Craftsmanship</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.05] tracking-tight text-stone-900 text-balance">
            Everything by hand.<br /><em className="font-light-italic">Nothing by accident.</em>
          </h1>
        </RevealOnScroll>
      </section>

      <section className="relative h-[55vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1800&q=90" alt="AURA craftsmanship" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-50/50" />
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
          {pillars.map((p, i) => (
            <RevealOnScroll key={p.label} delay={i * 0.08}>
              <p className="text-base font-medium text-stone-900 mb-3">{p.label}</p>
              <p className="text-sm text-stone-500 leading-relaxed">{p.body}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 py-16 md:py-20 text-center">
        <RevealOnScroll>
          <Link href="/shop" className="inline-flex items-center gap-3 bg-stone-900 text-stone-50 px-10 py-5 text-[13px] tracking-[0.18em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200">
            See the products
          </Link>
        </RevealOnScroll>
      </section>
    </div>
  )
}