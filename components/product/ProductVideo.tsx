"use client"
import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { Product } from "@/lib/types"

gsap.registerPlugin(ScrollTrigger)

type Props = {
  product: Product
}

export function ProductVideo({ product }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      )

      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { scale: 1.06 },
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-stone-900">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        poster={product.images[1] ?? product.images[0]}
      >
        <source src="/videos/product-hero.mp4" type="video/mp4" />
      </video>

      <Image
        src={product.images[1] ?? product.images[0]}
        alt={product.name}
        fill
        className="object-cover opacity-50"
        style={{ zIndex: videoRef.current?.readyState ?? 0 > 2 ? -1 : 0 }}
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />

      <div ref={textRef} className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 max-w-xl">
        <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-4">
          {product.name}
        </p>
        <p className="text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.1] tracking-tight text-stone-50">
          &ldquo;{product.tagline}&rdquo;
        </p>
      </div>
    </section>
  )
}