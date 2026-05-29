"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { ArrowDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger, SplitText)

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(imageRef.current, { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" })
        .fromTo(headlineRef.current, { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
        .fromTo(subRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .fromTo(ctaRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.5")
        .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.2")

      gsap.to(imageRef.current, {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: true },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-stone-50"
    >
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1800&q=90"
          alt="AURA One headphones"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/10 via-stone-50/20 to-stone-50" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pb-20 md:pb-28 w-full">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-500 font-medium mb-6">
            Introducing AURA One
          </p>
          <h1
            ref={headlineRef}
            className="text-[clamp(3rem,8vw,6.5rem)] font-light leading-[1.0] tracking-tight text-stone-900 text-balance mb-6"
          >
            Silence is<br />
            <em className="font-light-italic">a feature.</em>
          </h1>
          <p
            ref={subRef}
            className="text-base md:text-lg text-stone-500 font-light leading-relaxed mb-10 max-w-sm"
          >
            Adaptive noise cancellation that thinks at 50,000 samples per second. Forty hours of sound that stays yours.
          </p>
          <div ref={ctaRef} className="flex items-center gap-6">
            <Link
              href="/product/aura-one"
              className="inline-flex items-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200"
            >
              Shop now
            </Link>
            <Link
              href="/shop"
              className="text-[13px] tracking-wide text-stone-500 hover:text-stone-900 underline underline-offset-4 transition-colors duration-200"
            >
              View all
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 rotate-90 translate-y-6">
          Scroll
        </span>
        <ArrowDown size={14} strokeWidth={1.5} className="text-stone-400 animate-bounce" />
      </div>
    </section>
  )
}