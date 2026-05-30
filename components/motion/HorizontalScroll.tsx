"use client"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/data"
import { formatPrice } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

export function HorizontalScroll() {
  const outerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outer = outerRef.current
    const sticky = stickyRef.current
    const track = trackRef.current
    if (!outer || !sticky || !track) return

    let ctx: gsap.Context

    const init = () => {
      ctx?.revert()

      const trackW = track.scrollWidth
      const viewW = window.innerWidth
      const distance = trackW - viewW

      if (distance <= 0) return

      outer.style.height = `${sticky.offsetHeight + distance}px`

      ctx = gsap.context(() => {
        gsap.fromTo(
          track,
          { x: 0 },
          {
            x: -distance,
            ease: "none",
            scrollTrigger: {
              trigger: outer,
              start: "top top",
              end: () => `+=${distance}`,
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          }
        )
      })
    }

    const timeout = setTimeout(init, 200)

    const onResize = () => {
      clearTimeout(timeout)
      setTimeout(init, 200)
    }

    window.addEventListener("resize", onResize)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("resize", onResize)
      ctx?.revert()
    }
  }, [])

  const showcase = products
    .filter((p) => p.bestseller || p.badge)
    .slice(0, 6)

  return (
    <div ref={outerRef} className="relative bg-stone-50">
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden flex items-center"
      >
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
          style={{ width: `calc(340px + ${showcase.length * 38}vw + 120px)` }}
        >
          <div className="flex-shrink-0 flex items-center pl-12 md:pl-20 pr-16"
            style={{ width: "min(380px, 90vw)" }}>
            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-4">
                Best of AURA
              </p>
              <p className="text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.1] tracking-tight text-stone-900">
                Scroll to explore<br />the collection
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-px bg-stone-300" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-stone-400">
                  {showcase.length} products
                </span>
              </div>
            </div>
          </div>

          {showcase.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="flex-shrink-0 pr-5 group"
              style={{ width: "38vw", minWidth: "280px" }}
              data-cursor="View"
            >
              <div className="relative bg-stone-100 overflow-hidden rounded-2xl"
                style={{ height: "65vh" }}>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  sizes="38vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

                {product.badge && (
                  <div className="absolute top-6 left-6">
                    <span className="bg-stone-50/90 backdrop-blur-sm text-stone-900 text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 font-medium">
                      {product.badge}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <p className="text-stone-50 text-lg font-medium leading-tight">
                    {product.name}
                  </p>
                  <p className="text-stone-300 text-sm mt-1.5">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-stone-400 text-xs mt-1 font-light italic">
                    {product.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}

          <div className="flex-shrink-0 w-24" />
        </div>
      </div>
    </div>
  )
}