import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProductBySlug, getRelatedProducts, products } from "@/lib/data"
import { ProductTilt } from "@/components/product/ProductTilt"
import { ProductInfo } from "@/components/product/ProductInfo"
import { ProductSpecs } from "@/components/product/ProductSpecs"
import { ProductGallery } from "@/components/product/ProductGallery"
import { RelatedProducts } from "@/components/product/RelatedProducts"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: "Not found" }
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [{ url: product.images[0], width: 1200, height: 630 }],
    },
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = getRelatedProducts(product, 3)

  return (
    <>
      <div style={{ paddingTop: "var(--nav-height)" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-start">
            <div className="md:col-span-7 md:sticky md:top-24">
              <RevealOnScroll>
                <ProductTilt images={product.images} name={product.name} />
              </RevealOnScroll>
            </div>

            <div className="md:col-span-5">
              <RevealOnScroll delay={0.1}>
                <ProductInfo product={product} />
                <ProductSpecs product={product} />
              </RevealOnScroll>
            </div>
          </div>
        </div>

        <ProductGallery images={product.images} name={product.name} />
        <RelatedProducts products={related} />
      </div>
    </>
  )
}