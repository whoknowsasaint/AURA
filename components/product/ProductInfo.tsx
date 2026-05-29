"use client"
import { useState } from "react"
import { useCart } from "@/components/layout/CartProvider"
import type { Product } from "@/lib/types"
import { formatPrice, cn } from "@/lib/utils"
import { ShoppingBag, Check } from "lucide-react"

type Props = {
  product: Product
}

export function ProductInfo({ product }: Props) {
  const { addItem } = useCart()
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product, selectedColor)
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          {(product.badge || product.new) && (
            <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium bg-stone-900 text-stone-50 px-3 py-1 mb-4">
              {product.badge ?? "New"}
            </span>
          )}
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-light leading-[1.05] tracking-tight text-stone-900">
            {product.name}
          </h1>
        </div>
        <div className="text-right flex-shrink-0 pt-1">
          <span className="text-2xl font-light text-stone-900 block">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-stone-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>

      <p className="text-base font-light-italic text-stone-500 mb-6">
        &ldquo;{product.tagline}&rdquo;
      </p>

      <p className="text-sm text-stone-500 leading-relaxed mb-10 max-w-[440px]">
        {product.longDescription}
      </p>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium">
            Colour
          </span>
          <span className="text-sm text-stone-600">{selectedColor.name}</span>
        </div>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color.slug}
              onClick={() => setSelectedColor(color)}
              aria-label={color.name}
              className={cn(
                "w-8 h-8 rounded-full transition-all duration-200 ring-offset-2 ring-offset-stone-50",
                selectedColor.slug === color.slug
                  ? "ring-2 ring-stone-900 scale-110"
                  : "ring-1 ring-stone-300 hover:ring-stone-500"
              )}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleAdd}
        className={cn(
          "w-full flex items-center justify-center gap-3 py-4 text-[13px] tracking-[0.15em] uppercase font-medium transition-all duration-300",
          added
            ? "bg-stone-700 text-stone-50"
            : "bg-stone-900 text-stone-50 hover:bg-stone-800"
        )}
      >
        {added ? (
          <>
            <Check size={15} strokeWidth={2} />
            Added to cart
          </>
        ) : (
          <>
            <ShoppingBag size={15} strokeWidth={1.5} />
            Add to cart
          </>
        )}
      </button>

      <div className="mt-6 flex items-center justify-center gap-6 text-xs text-stone-400">
        <span>Free shipping over $150</span>
        <span className="w-1 h-1 rounded-full bg-stone-300" />
        <span>2-year warranty</span>
        <span className="w-1 h-1 rounded-full bg-stone-300" />
        <span>60-day returns</span>
      </div>
    </div>
  )
}