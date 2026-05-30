"use client"
import { useEffect, useRef, useState } from "react"
import { ArrowUp } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function BackToTop() {
  const ref = useRef<HTMLButtonElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    ScrollTrigger.create({
      start: "top -40%",
      onEnter: () => setVisible(true),
      onLeaveBack: () => setVisible(false),
    })
  }, [])

  useEffect(() => {
    if (!ref.current) return
    gsap.to(ref.current, {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 12,
      duration: 0.4,
      ease: "power2.out",
      pointerEvents: visible ? "auto" : "none",
    })
  }, [visible])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      ref={ref}
      onClick={scrollTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-6 md:right-10 z-40 w-10 h-10 bg-stone-900 text-stone-50 flex items-center justify-center opacity-0 hover:bg-stone-700 transition-colors duration-200"
      style={{ willChange: "transform, opacity" }}
    >
      <ArrowUp size={16} strokeWidth={1.5} />
    </button>
  )
}