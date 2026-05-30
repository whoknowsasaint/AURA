"use client"
import { useState } from "react"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"
import { cn } from "@/lib/utils"

const inputClass = "w-full border border-stone-300 bg-transparent px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors duration-200"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-stone-200">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">Contact</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.05] tracking-tight text-stone-900">
            Real people.<br /><em className="font-light-italic">Real answers.</em>
          </h1>
        </RevealOnScroll>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          <RevealOnScroll className="md:col-span-4">
            <div className="space-y-10">
              {[
                { label: "General", value: "hello@aura-audio.com" },
                { label: "Support", value: "support@aura-audio.com" },
                { label: "Press", value: "press@aura-audio.com" },
                { label: "Returns", value: "returns@aura-audio.com" },
              ].map((c) => (
                <div key={c.label}>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium mb-1">{c.label}</p>
                  <p className="text-sm text-stone-600">{c.value}</p>
                </div>
              ))}
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium mb-1">Response time</p>
                <p className="text-sm text-stone-600">Within one business day, always.</p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="md:col-span-8">
            {submitted ? (
              <div className="py-16 text-center">
                <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-4">Sent</p>
                <p className="text-2xl font-light text-stone-900">We will be in touch soon.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="First name" className={inputClass} />
                  <input type="text" placeholder="Last name" className={inputClass} />
                </div>
                <input type="email" placeholder="Email address" className={inputClass} />
                <select className={cn(inputClass, "appearance-none")}>
                  <option value="">Subject</option>
                  <option>Order support</option>
                  <option>Product question</option>
                  <option>Warranty claim</option>
                  <option>Return request</option>
                  <option>Press enquiry</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Your message" rows={6} className={cn(inputClass, "resize-none")} />
                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full bg-stone-900 text-stone-50 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200"
                >
                  Send message
                </button>
              </div>
            )}
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}