"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const inputClass =
  "w-full border border-stone-300 bg-transparent px-4 py-3.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors duration-200"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=90",
    quote: "Join 40,000 listeners who chose not to settle.",
  },
  {
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=90",
    quote: "Sound engineered for those who hear the difference.",
  },
  {
    image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=1200&q=90",
    quote: "Forty hours of silence. On your terms.",
  },
  {
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&q=90",
    quote: "Built for year one. Designed for year ten.",
  },
]

export default function SignupPage() {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(slideIndex)
      setSlideIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slideIndex])

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDone(true)
    }, 1400)
  }

  const goToSlide = (i: number) => {
    if (i === slideIndex) return
    setPrevIndex(slideIndex)
    setSlideIndex(i)
  }

  return (
    <div className="min-h-screen flex" style={{ paddingTop: "var(--nav-height)" }}>
      <div className="hidden md:block flex-1 relative overflow-hidden bg-stone-200">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: i === slideIndex ? 1 : 0,
              scale: i === slideIndex ? 1 : 1.03,
            }}
            transition={{
              opacity: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
            }}
            style={{ zIndex: i === slideIndex ? 1 : 0 }}
          >
            <img
              src={slide.image}
              alt="AURA Audio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/35" />
          </motion.div>
        ))}

        <div className="absolute bottom-12 left-12 right-12 z-10">
          <motion.p
            key={slideIndex}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-stone-50 text-xl font-light leading-snug max-w-xs mb-6"
          >
            {slides[slideIndex].quote}
          </motion.p>

          <div className="flex gap-2 mb-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={cn(
                  "h-px transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  i === slideIndex
                    ? "w-8 bg-stone-50"
                    : "w-4 bg-stone-50/40 hover:bg-stone-50/70"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <p className="text-stone-300 text-[10px] tracking-[0.25em] uppercase font-medium">
            AURA Audio
          </p>
        </div>
      </div>

      <div className="w-full md:w-[480px] flex-shrink-0 flex flex-col justify-center px-8 md:px-16 py-16 bg-stone-50">
        <div className="max-w-sm mx-auto w-full">
          <Link
            href="/"
            className="text-[13px] tracking-[0.3em] font-medium uppercase text-stone-900 block mb-14"
          >
            AURA
          </Link>

          {done ? (
            <div className="text-center">
              <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-4">
                Welcome
              </p>
              <p className="text-2xl font-light text-stone-900 mb-4">Account created.</p>
              <p className="text-sm text-stone-400 mb-8">Your ears deserve this.</p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200"
              >
                Start shopping
              </Link>
            </div>
          ) : (
            <>
              <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-3">
                Create account
              </p>
              <h1 className="text-3xl font-light text-stone-900 mb-10">Join AURA.</h1>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First name" className={inputClass} />
                  <input type="text" placeholder="Last name" className={inputClass} />
                </div>
                <input type="email" placeholder="Email address" className={inputClass} />
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    className={cn(inputClass, "pr-12")}
                  />
                  <button
                    onClick={() => setShow(!show)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 transition-colors"
                  >
                    {show
                      ? <EyeOff size={16} strokeWidth={1.5} />
                      : <Eye size={16} strokeWidth={1.5} />
                    }
                  </button>
                </div>

                <label className="flex items-start gap-3 text-xs text-stone-500 leading-relaxed">
                  <input type="checkbox" className="mt-0.5 accent-stone-900 flex-shrink-0" />
                  <span>
                    I agree to the{" "}
                    <Link href="/terms" className="underline underline-offset-2 hover:text-stone-900 transition-colors">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link href="/privacy" className="underline underline-offset-2 hover:text-stone-900 transition-colors">
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-stone-900 text-stone-50 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200 disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create account"}
                </button>
              </div>

              <p className="text-sm text-stone-400 text-center mt-8">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-stone-700 underline underline-offset-2 hover:text-stone-900 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}