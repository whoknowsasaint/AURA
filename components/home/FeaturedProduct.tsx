"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

export function FeaturedProduct() {
  const product = products[0]
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -10, y: dx * 10 })
  }

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 })
    setHovering(false)
  }

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div
          ref={cardRef}
          className="relative aspect-square bg-stone-100 rounded-2xl overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={resetTilt}
          style={{
            transform: hovering
              ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
              : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
            transition: hovering ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
          }}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {product.badge && (
            <div className="absolute top-6 left-6 bg-stone-900 text-stone-50 text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 font-medium">
              {product.badge}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-4">
              Featured
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] tracking-tight text-stone-900 mb-4">
              {product.name}
            </h2>
            <p className="text-lg font-light-italic text-stone-500 mb-6">
              &ldquo;{product.tagline}&rdquo;
            </p>
            <p className="text-sm text-stone-500 leading-relaxed mb-8 max-w-sm">
              {product.longDescription}
            </p>
            <ul className="space-y-2.5 mb-10">
              {product.features.slice(0, 3).map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-stone-600">
                  <span className="w-1 h-1 rounded-full bg-stone-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-8">
              <span className="text-2xl font-light text-stone-900">{formatPrice(product.price)}</span>
              <Link
                href={`/product/${product.slug}`}
                className="inline-flex items-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200"
              >
                Explore
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}