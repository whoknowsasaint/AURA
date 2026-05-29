import Link from "next/link"
import type { Metadata } from "next"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

export const metadata: Metadata = { title: "Returns", description: "AURA 60-day return policy." }

const steps = [
  { number: "01", label: "Contact us", body: "Email returns@aura-audio.com or use the contact form within 60 days of delivery. Include your order number." },
  { number: "02", label: "Receive your label", body: "We will email a prepaid return label within one business day. No box required -- any suitable packaging will do." },
  { number: "03", label: "Ship it back", body: "Drop it at any courier point. Once we receive it, we process your refund within 5 business days to your original payment method." },
]

export default function ReturnsPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-stone-200">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">Returns</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.05] tracking-tight text-stone-900">
            60 days.<br /><em className="font-light-italic">No conditions.</em>
          </h1>
          <p className="text-sm text-stone-500 leading-relaxed mt-8 max-w-md">If you are not completely satisfied, return it. We do not ask why. We do not require original packaging. We do not charge restocking fees.</p>
        </RevealOnScroll>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="space-y-12 max-w-2xl">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.number} delay={i * 0.08}>
              <div className="flex gap-10">
                <span className="text-[11px] tracking-[0.2em] text-stone-300 font-medium pt-1 flex-shrink-0">{s.number}</span>
                <div>
                  <p className="text-base font-medium text-stone-900 mb-2">{s.label}</p>
                  <p className="text-sm text-stone-500 leading-relaxed">{s.body}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-16 pt-12 border-t border-stone-200">
          <Link href="/contact" className="inline-flex items-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200">
            Start a return
          </Link>
        </RevealOnScroll>
      </section>
    </div>
  )
}