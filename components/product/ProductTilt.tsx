"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = {
  images: string[]
  name: string
}

export function ProductTilt({ images, name }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -8, y: dx * 8 })
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={containerRef}
        className="relative aspect-square bg-stone-100 overflow-hidden rounded-2xl"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovering(false) }}
        style={{
          transform: hovering
            ? `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.015, 1.015, 1.015)`
            : "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
          transition: hovering ? "transform 0.08s ease-out" : "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
        }}
      >
        <Image
          src={images[activeIndex]}
          alt={name}
          fill
          priority
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 55vw"
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: hovering
              ? `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 + tilt.x * 3}%, rgba(255,255,255,0.12) 0%, transparent 60%)`
              : "none",
            transition: "background 0.1s ease-out",
          }}
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative w-20 h-20 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0 ring-offset-2 transition-all duration-200",
                activeIndex === i ? "ring-1 ring-stone-900" : "ring-1 ring-transparent hover:ring-stone-300"
              )}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${name} view ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}