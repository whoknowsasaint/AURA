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
  y?: number
}

export function RevealOnScroll({ children, className, delay = 0, y = 32 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [delay, y])

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  )
}