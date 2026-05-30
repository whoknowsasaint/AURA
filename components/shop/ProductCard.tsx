"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/components/layout/CartProvider"
import type { Product } from "@/lib/types"
import { formatPrice, cn } from "@/lib/utils"
import { ShoppingBag, Check } from "lucide-react"
import { StarRating } from "@/components/ui/StarRating"

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.colors[0])
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  const image1 = product.images[0]
  const image2 = product.images[1] ?? product.images[0]

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative bg-stone-100 overflow-hidden rounded-xl mb-4 aspect-square">
        <Image
          src={image1}
          alt={product.name}
          fill
          className={cn("object-cover transition-all duration-700", hovered ? "opacity-0 scale-[1.03]" : "opacity-100 scale-100")}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Image
          src={image2}
          alt={`${product.name} alternate view`}
          fill
          className={cn("object-cover transition-all duration-700", hovered ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]")}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="bg-stone-900 text-stone-50 text-[10px] tracking-[0.22em] uppercase px-2.5 py-1 font-medium">
              {product.badge}
            </span>
          )}
          {product.new && !product.badge && (
            <span className="bg-stone-50 text-stone-900 text-[10px] tracking-[0.22em] uppercase px-2.5 py-1 font-medium">
              New
            </span>
          )}
          {product.bestseller && (
            <span className="bg-stone-100/80 backdrop-blur-sm text-stone-600 text-[10px] tracking-[0.22em] uppercase px-2.5 py-1 font-medium">
              Bestseller
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10">
          <button
            onClick={handleAdd}
            className={cn(
              "w-full flex items-center justify-center gap-2 py-3 text-[12px] tracking-[0.15em] uppercase font-medium transition-all duration-200 backdrop-blur-sm",
              added ? "bg-stone-700/95 text-stone-50" : "bg-stone-900/95 text-stone-50 hover:bg-stone-900"
            )}
          >
            {added ? <><Check size={13} strokeWidth={2} /> Added</> : <><ShoppingBag size={13} strokeWidth={1.5} /> Add to cart</>}
          </button>
        </div>
      </div>

      <div className="flex items-start justify-between gap-3 px-0.5">
        <div className="min-w-0">
          <p className="text-sm font-medium text-stone-900 group-hover:text-stone-500 transition-colors duration-200 truncate">
            {product.name}
          </p>
          <p className="text-xs text-stone-400 mt-0.5 capitalize">
            {product.category.replace("-", " ")}
          </p>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" className="mt-1.5" />
        </div>
        <div className="flex-shrink-0 text-right">
          <p className="text-sm text-stone-700">{formatPrice(product.price)}</p>
          {product.originalPrice && (
            <p className="text-xs text-stone-400 line-through">{formatPrice(product.originalPrice)}</p>
          )}
        </div>
      </div>

      <div className="flex gap-1.5 mt-2.5 px-0.5">
        {product.colors.map((color) => (
          <span
            key={color.slug}
            title={color.name}
            className="w-3 h-3 rounded-full border border-stone-200 flex-shrink-0"
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </Link>
  )
}