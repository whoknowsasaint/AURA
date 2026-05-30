"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown } from "lucide-react"
import { MagneticButton } from "@/components/motion/MagneticButton"

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(imageRef.current, { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.6, ease: "power2.out" })

      const lines = contentRef.current?.querySelectorAll(".hero-line")
      if (lines?.length) {
        tl.fromTo(lines, { y: "105%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1, stagger: 0.12 }, "-=1")
      }

      tl.fromTo(scrollRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")

      gsap.to(imageRef.current, {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-stone-50"
    >
      <div ref={imageRef} className="absolute inset-0" style={{ willChange: "transform" }}>
        <Image
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1800&q=90"
          alt="AURA One headphones"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/5 via-stone-50/15 to-stone-50" />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pb-20 md:pb-28 w-full">
        <div className="max-w-2xl">
          <div className="overflow-hidden mb-6">
            <p className="hero-line text-[11px] tracking-[0.35em] uppercase text-stone-500 font-medium">
              Introducing AURA One
            </p>
          </div>

          <div className="overflow-hidden mb-2">
            <h1 className="hero-line text-[clamp(3rem,8vw,6.5rem)] font-light leading-[1.0] tracking-tight text-stone-900">
              Silence is
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h1 className="hero-line text-[clamp(3rem,8vw,6.5rem)] font-light leading-[1.0] tracking-tight text-stone-900 italic">
              a feature.
            </h1>
          </div>

          <div className="overflow-hidden mb-10">
            <p className="hero-line text-base md:text-lg text-stone-500 font-light leading-relaxed max-w-sm">
              Adaptive noise cancellation at 50,000 samples per second. Forty hours of sound that stays yours.
            </p>
          </div>

          <div className="hero-line flex items-center gap-6">
            <MagneticButton>
              <Link
                href="/product/aura-one"
                className="inline-flex items-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200"
                data-cursor="Explore"
              >
                Shop now
              </Link>
            </MagneticButton>
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
        className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-3 z-10 opacity-0"
      >
        <span
          className="text-[9px] tracking-[0.35em] uppercase text-stone-400 writing-mode-vertical"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.3em" }}
        >
          Scroll
        </span>
        <ArrowDown size={12} strokeWidth={1.5} className="text-stone-400 animate-bounce" />
      </div>
    </section>
  )
}