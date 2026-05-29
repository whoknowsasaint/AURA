"use client"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"
import { cn } from "@/lib/utils"

const faqs = [
  { q: "What is the battery life of AURA One?", a: "AURA One delivers 40 hours of playback with ANC on. With ANC off, you can expect up to 52 hours. A 15-minute quick charge gives you 4 hours of playback." },
  { q: "Are AURA headphones compatible with all devices?", a: "Yes. All AURA wireless products support Bluetooth 5.2 or 5.3 and connect to any Bluetooth-enabled device. USB-C wired audio is available on AURA One and AURA Arc." },
  { q: "How do I pair my AURA headphones with two devices at once?", a: "Multipoint pairing is supported on AURA One, AURA Form, AURA Drift, and AURA Stem. Hold the power button for 4 seconds while already connected to activate pairing mode for a second device." },
  { q: "Are the earcups replaceable?", a: "Yes. Replacement earcups for every AURA model are available through our website. They are designed to be replaced without tools in under two minutes." },
  { q: "What does the warranty cover?", a: "Our 2-year warranty covers all manufacturing defects and component failures under normal use. It does not cover physical damage, liquid damage, or wear items like earcup leather. See our warranty page for full details." },
  { q: "How do I initiate a return?", a: "Contact us within 60 days of delivery. We will send a prepaid return label. Refunds are processed within 5 business days of receiving the return. Original condition is not required." },
  { q: "Does AURA have a companion app?", a: "Yes. The AURA app is available for iOS and Android. It provides EQ presets, ANC intensity control, firmware updates, and spatial audio configuration where supported." },
  { q: "Can I use AURA headphones while exercising?", a: "AURA Drift (IPX5) and AURA Stem (IP67) are rated for sweat and rain. AURA One, Arc, Form, and Void are not rated for water resistance and should be kept away from moisture." },
]

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-stone-200">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">FAQ</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.05] tracking-tight text-stone-900">
            Common<br /><em className="font-light-italic">questions.</em>
          </h1>
        </RevealOnScroll>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20 max-w-3xl">
        <div className="divide-y divide-stone-200">
          {faqs.map((faq, i) => (
            <RevealOnScroll key={i} delay={Math.min(i * 0.04, 0.2)}>
              <div>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between py-6 text-left gap-6"
                >
                  <span className="text-sm font-medium text-stone-900">{faq.q}</span>
                  {open === i
                    ? <Minus size={16} strokeWidth={1.5} className="text-stone-400 flex-shrink-0 mt-0.5" />
                    : <Plus size={16} strokeWidth={1.5} className="text-stone-400 flex-shrink-0 mt-0.5" />
                  }
                </button>
                <div className={cn("overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]", open === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0")}>
                  <p className="text-sm text-stone-500 leading-relaxed pb-6">{faq.a}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  )
}