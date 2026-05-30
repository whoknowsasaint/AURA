"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: number
  as?: keyof JSX.IntrinsicElements
}

export function TextReveal({ children, className, delay = 0, stagger = 0.08, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const lines = el.querySelectorAll(".reveal-line")
    if (!lines.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { y: "105%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.9,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [delay, stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export function RevealLine({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="overflow-hidden">
      <div className={cn("reveal-line", className)}>{children}</div>
    </div>
  )
}