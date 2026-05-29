import Link from "next/link"
import type { Metadata } from "next"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

export const metadata: Metadata = { title: "Careers", description: "Join the AURA team." }

const roles = [
  { title: "Senior Acoustic Engineer", location: "Copenhagen, Denmark", type: "Full-time" },
  { title: "Industrial Designer", location: "Copenhagen, Denmark", type: "Full-time" },
  { title: "iOS Engineer", location: "Remote (EU)", type: "Full-time" },
  { title: "Supply Chain Manager", location: "Copenhagen, Denmark", type: "Full-time" },
]

export default function CareersPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-stone-200">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">Careers</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.05] tracking-tight text-stone-900 text-balance">
            We are small.<br /><em className="font-light-italic">On purpose.</em>
          </h1>
          <p className="text-sm text-stone-500 leading-relaxed mt-8 max-w-md">
            48 people make every AURA product. We are not hiring to grow headcount. We are hiring to find the one person who can make something better than it currently is.
          </p>
        </RevealOnScroll>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <RevealOnScroll className="mb-10">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium">Open roles</p>
        </RevealOnScroll>
        <div className="divide-y divide-stone-200">
          {roles.map((r, i) => (
            <RevealOnScroll key={r.title} delay={i * 0.06}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-7 gap-4 group">
                <div>
                  <p className="text-base font-medium text-stone-900 group-hover:text-stone-500 transition-colors duration-200">{r.title}</p>
                  <p className="text-sm text-stone-400 mt-1">{r.location} &middot; {r.type}</p>
                </div>
                <Link href="/contact" className="text-[12px] tracking-[0.15em] uppercase font-medium text-stone-500 hover:text-stone-900 transition-colors duration-200 flex-shrink-0">
                  Apply &rarr;
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  )
}