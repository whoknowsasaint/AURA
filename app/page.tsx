import { Hero } from "@/components/home/Hero"
import { Marquee } from "@/components/home/Marquee"
import { FeaturedProduct } from "@/components/home/FeaturedProduct"
import { Editorial } from "@/components/home/Editorial"
import { Testimonials } from "@/components/home/Testimonials"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedProduct />
      <Editorial />
      <Testimonials />
    </>
  )
}