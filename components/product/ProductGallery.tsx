import Image from "next/image"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

type Props = {
  images: string[]
  name: string
}

export function ProductGallery({ images, name }: Props) {
  if (images.length < 2) return null

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <RevealOnScroll className="mb-12">
        <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium">
          Gallery
        </p>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <RevealOnScroll className="md:col-span-7 relative aspect-[4/3] bg-stone-100 overflow-hidden rounded-xl">
          <Image
            src={images[1] ?? images[0]}
            alt={`${name} detail`}
            fill
            className="object-cover hover:scale-[1.02] transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </RevealOnScroll>

        <div className="md:col-span-5 flex flex-col gap-4">
          {images.slice(0, 2).map((img, i) => (
            <RevealOnScroll
              key={i}
              delay={i * 0.1}
              className="relative aspect-[4/3] bg-stone-100 overflow-hidden rounded-xl flex-1"
            >
              <Image
                src={img}
                alt={`${name} view ${i + 2}`}
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}