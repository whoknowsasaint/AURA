import { Hero } from "@/components/home/Hero"
import { Marquee } from "@/components/home/Marquee"
import { FeaturedProduct } from "@/components/home/FeaturedProduct"
import { Editorial } from "@/components/home/Editorial"
import { VideoSection } from "@/components/home/VideoSection"
import { HorizontalScroll } from "@/components/motion/HorizontalScroll"
import { Testimonials } from "@/components/home/Testimonials"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedProduct />
      <Editorial />
      <VideoSection />
      <HorizontalScroll />
      <Testimonials />
    </>
  )
}