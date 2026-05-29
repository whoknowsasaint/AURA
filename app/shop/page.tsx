"use client"
import { useState, useMemo } from "react"
import { products } from "@/lib/data"
import { FilterBar } from "@/components/shop/FilterBar"
import { ProductGrid } from "@/components/shop/ProductGrid"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"
import type { Product } from "@/lib/types"

export default function ShopPage() {
  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const filtered = useMemo(() => {
    let list: Product[] = [...products]

    if (category !== "all") {
      list = list.filter((p) => p.category === category)
    }

    switch (sortBy) {
      case "price-asc":
        list = list.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        list = list.sort((a, b) => b.price - a.price)
        break
      case "newest":
        list = list.filter((p) => p.new).concat(list.filter((p) => !p.new))
        break
      default:
        list = list.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0))
    }

    return list
  }, [category, sortBy])

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="py-16 md:py-20 border-b border-stone-200">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-4">
              Collection
            </p>
            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.0] tracking-tight text-stone-900">
              Every instrument,<br />
              <em className="font-light-italic">one purpose.</em>
            </h1>
          </RevealOnScroll>
        </div>

        <FilterBar
          active={category}
          onChange={setCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          total={filtered.length}
        />

        <ProductGrid products={filtered} />
      </div>
    </div>
  )
}