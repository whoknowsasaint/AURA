"use client"
import { useState } from "react"
import { notFound } from "next/navigation"
import { getProductBySlug, getRelatedProducts } from "@/lib/data"
import { ProductTilt } from "@/components/product/ProductTilt"
import { ProductInfo } from "@/components/product/ProductInfo"
import { ProductSpecs } from "@/components/product/ProductSpecs"
import { ProductGallery } from "@/components/product/ProductGallery"
import { ProductVideo } from "@/components/product/ProductVideo"
import { RelatedProducts } from "@/components/product/RelatedProducts"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"
import type { ProductColor } from "@/lib/types"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = getRelatedProducts(product, 3)
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0])

  return (
    <>
      <div style={{ paddingTop: "var(--nav-height)" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-start">
            <div className="md:col-span-7 md:sticky md:top-24">
              <RevealOnScroll>
                <ProductTilt
                  images={product.images}
                  name={product.name}
                  selectedColor={selectedColor}
                />
              </RevealOnScroll>
            </div>

            <div className="md:col-span-5">
              <RevealOnScroll delay={0.1}>
                <ProductInfo product={product} onColorChange={setSelectedColor} />
                <ProductSpecs product={product} />
              </RevealOnScroll>
            </div>
          </div>
        </div>

        <ProductVideo product={product} />
        <ProductGallery images={product.images} name={product.name} />
        <RelatedProducts products={related} />
      </div>
    </>
  )
}