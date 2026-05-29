"use client"
import { useMemo } from "react"
import { ProductCard } from "./ProductCard"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"
import type { Product } from "@/lib/types"

type Props = {
  products: Product[]
}

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="py-32 flex flex-col items-center justify-center text-center">
        <p className="text-stone-400 text-sm mb-2">No products found.</p>
        <p className="text-stone-300 text-xs">Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 py-10">
      {products.map((product, i) => (
        <RevealOnScroll key={product.id} delay={Math.min(i * 0.06, 0.3)}>
          <ProductCard product={product} index={i} />
        </RevealOnScroll>
      ))}
    </div>
  )
}