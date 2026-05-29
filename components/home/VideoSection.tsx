"use client"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { scale: 1.08 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        )
      }

      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[80vh] md:h-screen overflow-hidden bg-stone-900">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        //poster="https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=1800&q=85"
      >
        <source src="/videos/lifestyle.mp4" type="video/mp4" />
      </video>

      <img
        //src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=1800&q=85"
        alt="Person wearing AURA headphones"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-55"
        style={{ zIndex: 0 }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/10 via-transparent to-stone-900/70" style={{ zIndex: 1 }} />

      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 px-6 text-center" style={{ zIndex: 2 }}>
        <p className="text-[11px] tracking-[0.4em] uppercase text-stone-300 font-medium mb-5">
          Made for real life
        </p>
        <h2 className="text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.0] tracking-tight text-stone-50 mb-8 text-balance max-w-2xl">
          Wear it everywhere.<br />
          <em className="font-light-italic">Hear it differently.</em>
        </h2>
        <Link
          href="/shop"
          className="inline-flex items-center gap-3 border border-stone-50/50 text-stone-50 px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-50 hover:text-stone-900 transition-all duration-300"
        >
          Explore the collection
        </Link>
      </div>
    </section>
  )
}