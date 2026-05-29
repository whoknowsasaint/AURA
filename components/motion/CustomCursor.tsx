"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const moveDot = (e: MouseEvent) => {
        gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0, ease: "none" })
        gsap.to(ring.current, { x: e.clientX, y: e.clientY, duration: 0.18, ease: "power2.out" })
      }

      const onEnter = () => {
        gsap.to(ring.current, { scale: 2.4, opacity: 0.4, duration: 0.3, ease: "power2.out" })
        gsap.to(dot.current, { scale: 0, duration: 0.2 })
      }

      const onLeave = () => {
        gsap.to(ring.current, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" })
        gsap.to(dot.current, { scale: 1, duration: 0.2 })
      }

      window.addEventListener("mousemove", moveDot)
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter)
        el.addEventListener("mouseleave", onLeave)
      })

      return () => {
        window.removeEventListener("mousemove", moveDot)
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-stone-900 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ring}
        className="fixed top-0 left-0 w-8 h-8 border border-stone-900 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      />
    </>
  )
}