"use client"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin()

const items = [
  "40-hour battery",
  "Adaptive ANC",
  "Planar magnetic drivers",
  "Lossless audio",
  "Aerospace aluminium",
  "Vegetable-tanned leather",
  "Spatial audio",
  "Crafted to last",
]

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const track = trackRef.current
    if (!track) return
    const totalWidth = track.scrollWidth / 2

    gsap.to(track, {
      x: -totalWidth,
      duration: 28,
      ease: "none",
      repeat: -1,
    })
  }, [])

  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-stone-200 bg-stone-50 py-5 select-none">
      <div ref={trackRef} className="flex items-center gap-0 whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-[11px] tracking-[0.3em] uppercase text-stone-400 font-medium px-10">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}