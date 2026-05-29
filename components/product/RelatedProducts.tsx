import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"
import { formatPrice } from "@/lib/utils"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

type Props = {
  products: Product[]
}

export function RelatedProducts({ products }: Props) {
  if (products.length === 0) return null

  return (
    <section className="border-t border-stone-200 py-20 md:py-28 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <RevealOnScroll className="mb-12">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium">
            You may also like
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <RevealOnScroll key={product.id} delay={i * 0.08}>
              <Link href={`/product/${product.slug}`} className="group block">
                <div className="relative aspect-square bg-stone-100 overflow-hidden rounded-xl mb-4">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-stone-900 text-stone-50 text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 font-medium">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-stone-900 group-hover:text-stone-600 transition-colors duration-200">
                      {product.name}
                    </p>
                    <p className="text-xs text-stone-400 mt-0.5 capitalize">
                      {product.category.replace("-", " ")}
                    </p>
                  </div>
                  <span className="text-sm text-stone-700 flex-shrink-0">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}