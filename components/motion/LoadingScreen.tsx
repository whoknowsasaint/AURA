"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordmarkRef = useRef<HTMLSpanElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("aura-loaded")
    if (alreadySeen) {
      setVisible(false)
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("aura-loaded", "1")
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: "power3.inOut",
            onComplete: () => setVisible(false),
          })
        },
      })

      tl.fromTo(
        wordmarkRef.current,
        { opacity: 0, letterSpacing: "0.6em" },
        { opacity: 1, letterSpacing: "0.35em", duration: 1.1, ease: "power3.out" }
      )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power3.inOut", transformOrigin: "left center" },
          "-=0.4"
        )
        .to({}, { duration: 0.5 })
    })

    return () => ctx.revert()
  }, [])

  if (!visible) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-stone-50 flex flex-col items-center justify-center"
    >
      <span
        ref={wordmarkRef}
        className="text-[13px] tracking-[0.35em] font-medium uppercase text-stone-900 block opacity-0"
      >
        AURA
      </span>
      <div
        ref={lineRef}
        className="mt-5 h-px w-12 bg-stone-300 scale-x-0"
      />
    </div>
  )
}