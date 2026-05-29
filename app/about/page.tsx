import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

export const metadata: Metadata = {
  title: "About",
  description: "The story and philosophy behind AURA Audio.",
}

const values = [
  {
    number: "01",
    label: "Obsession over optimisation",
    body: "We never tune a product to hit a price point. We tune it until it is right, then we find the price.",
  },
  {
    number: "02",
    label: "Materials that age well",
    body: "Aluminium, leather, and glass. Nothing that yellows, cracks, or peels. Every product should look better at year five.",
  },
  {
    number: "03",
    label: "Silence as a luxury",
    body: "The most premium thing we can give you is the ability to hear only what you choose. Noise cancellation is not a feature. It is the product.",
  },
  {
    number: "04",
    label: "Repairability by design",
    body: "Every cable is replaceable. Every earcup is user-serviceable. We design for the decade, not the warranty period.",
  },
]

const stats = [
  { value: "2017", label: "Founded" },
  { value: "48", label: "Engineers" },
  { value: "1,200h", label: "Listening tests per product" },
  { value: "6", label: "Products. Ever." },
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <RevealOnScroll className="max-w-3xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">
            About AURA
          </p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.05] tracking-tight text-stone-900 text-balance">
            We make fewer things,<br />
            <em className="font-light-italic">better.</em>
          </h1>
        </RevealOnScroll>
      </section>

      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=1800&q=90"
          alt="AURA studio"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stone-900/20" />
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <RevealOnScroll className="md:col-span-5">
            <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">
              Our story
            </p>
            <h2 className="text-3xl md:text-4xl font-light leading-[1.1] tracking-tight text-stone-900 mb-6">
              Started in a signal-processing lab. Still obsessed with the same problem.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15} className="md:col-span-7 flex flex-col justify-center gap-5">
            <p className="text-sm text-stone-500 leading-relaxed">
              AURA started in 2017 when two acoustic engineers left their jobs at a professional monitor company with one question: why does every consumer headphone sound like a consumer headphone? The answer was always the same. Compromises made early in the process, driven by cost targets, never revisited.
            </p>
            <p className="text-sm text-stone-500 leading-relaxed">
              We built our first prototype in a rented studio in Copenhagen. We have been in the same building ever since. Every product we have ever shipped was designed, tuned, and tested there. We have never outsourced acoustic engineering. We never will.
            </p>
            <p className="text-sm text-stone-500 leading-relaxed">
              Six products in seven years is not a slow pace. It is the only pace that lets us say every single one is exactly what we intended.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-t border-stone-200 py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 0.08}>
                <p className="text-[clamp(2rem,4vw,3rem)] font-light text-stone-900 tracking-tight leading-none mb-2">
                  {s.value}
                </p>
                <p className="text-xs tracking-[0.2em] uppercase text-stone-400 font-medium">
                  {s.label}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <RevealOnScroll className="mb-14">
            <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium">
              What we believe
            </p>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {values.map((v, i) => (
              <RevealOnScroll key={v.number} delay={i * 0.08}>
                <div className="flex gap-8">
                  <span className="text-[11px] tracking-[0.2em] text-stone-300 font-medium pt-1 flex-shrink-0">
                    {v.number}
                  </span>
                  <div>
                    <p className="text-base font-medium text-stone-900 mb-3">{v.label}</p>
                    <p className="text-sm text-stone-500 leading-relaxed">{v.body}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
        <RevealOnScroll className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light leading-[1.1] tracking-tight text-stone-900 mb-8 text-balance">
            Hear the difference for yourself.
          </h2>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-stone-900 text-stone-50 px-10 py-5 text-[13px] tracking-[0.18em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200"
          >
            Shop the collection
          </Link>
        </RevealOnScroll>
      </section>
    </div>
  )
}