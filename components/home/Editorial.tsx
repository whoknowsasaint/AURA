import Link from "next/link"
import Image from "next/image"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"
import { ParallaxImage } from "@/components/motion/ParallaxImage"
import { MagneticButton } from "@/components/motion/MagneticButton"

const sections = [
  {
    label: "Engineering",
    headline: "Every detail\nis a decision.",
    body: "We do not use off-the-shelf drivers. Every transducer in an AURA product is designed from a blank page, tested across 1,200 hours of listening, and adjusted until the curve matches what the mastering engineer heard in the studio.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=90",
    cta: "Our approach",
    href: "/about",
    reverse: false,
  },
  {
    label: "Materials",
    headline: "Built to outlast\nthe decade.",
    body: "Aerospace 6061 aluminium. Vegetable-tanned full-grain leather that ages beautifully. We spec materials the way a watchmaker does -- not for the unboxing, but for year three and year ten.",
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=1200&q=90",
    cta: "Shop collection",
    href: "/shop",
    reverse: true,
  },
]

export function Editorial() {
  return (
    <section className="bg-stone-50">
      {sections.map((s) => (
        <div key={s.label} className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${s.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
            <ParallaxImage className="aspect-[4/3] bg-stone-100 overflow-hidden rounded-2xl" speed={12}>
              <Image
                src={s.image}
                alt={s.headline}
                fill
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-[filter] duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </ParallaxImage>

            <RevealOnScroll delay={0.1} className="flex flex-col justify-center">
              <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-5">
                {s.label}
              </p>
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.1] tracking-tight text-stone-900 mb-6 whitespace-pre-line">
                {s.headline}
              </h2>
              <p className="text-sm text-stone-500 leading-relaxed mb-8 max-w-sm">
                {s.body}
              </p>
              <MagneticButton className="self-start">
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-[13px] tracking-wide text-stone-700 hover:text-stone-900 underline underline-offset-4 transition-colors duration-200"
                >
                  {s.cta} &rarr;
                </Link>
              </MagneticButton>
            </RevealOnScroll>
          </div>
        </div>
      ))}
    </section>
  )
}