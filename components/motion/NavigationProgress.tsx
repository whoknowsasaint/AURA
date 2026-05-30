"use client"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"

export function NavigationProgress() {
  const barRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)
  const pathname = usePathname()
  const prevPathname = useRef(pathname)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!barRef.current) return
    if (prevPathname.current === pathname) return

    prevPathname.current = pathname

    tweenRef.current?.kill()

    setActive(true)
    gsap.set(barRef.current, { scaleX: 0, opacity: 1 })

    tweenRef.current = gsap.to(barRef.current, {
      scaleX: 1,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(barRef.current, {
          opacity: 0,
          duration: 0.3,
          delay: 0.1,
          onComplete: () => setActive(false),
        })
      },
    })
  }, [pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a")
      if (!anchor) return
      const href = anchor.getAttribute("href")
      if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto")) return
      if (href === pathname) return

      if (!barRef.current) return
      tweenRef.current?.kill()

      setActive(true)
      gsap.set(barRef.current, { scaleX: 0, opacity: 1 })
      tweenRef.current = gsap.to(barRef.current, {
        scaleX: 0.7,
        duration: 0.8,
        ease: "power1.out",
      })
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [pathname])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9998] h-[2px] pointer-events-none"
      style={{ display: active ? "block" : "none" }}
    >
      <div
        ref={barRef}
        className="h-full bg-stone-900 origin-left"
        style={{ opacity: 0, willChange: "transform, opacity" }}
      />
    </div>
  )
}