"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useCart } from "./CartProvider"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  ["Shop", "/shop"],
  ["Collections", "/shop"],
  ["About", "/about"],
  ["Reviews", "/reviews"],
]

export function Navbar() {
  const ref = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openCart, count } = useCart()
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      )

      ScrollTrigger.create({
        start: "top -80",
        onEnter: () => setScrolled(true),
        onLeaveBack: () => setScrolled(false),
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "bg-stone-50/92 backdrop-blur-md border-b border-stone-200/80" : "bg-transparent"
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <nav className="max-w-[1440px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          <Link href="/" className="text-[13px] tracking-[0.3em] font-medium uppercase text-stone-900 relative z-10">
            AURA
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={cn(
                  "text-[13px] tracking-wide transition-colors duration-200 relative group",
                  pathname === href ? "text-stone-900" : "text-stone-500 hover:text-stone-900"
                )}
              >
                {label}
                <span className={cn(
                  "absolute -bottom-0.5 left-0 h-px bg-stone-900 transition-all duration-300",
                  pathname === href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/login"
              className="hidden md:block text-[13px] tracking-wide text-stone-500 hover:text-stone-900 transition-colors duration-200"
            >
              Sign in
            </Link>

            <button
              onClick={openCart}
              className="relative text-[13px] tracking-wide text-stone-500 hover:text-stone-900 transition-colors duration-200"
              aria-label="Open cart"
            >
              Cart
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-3.5 w-4 h-4 bg-stone-900 text-stone-50 text-[9px] rounded-full flex items-center justify-center font-medium"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              className="md:hidden text-[13px] tracking-wide text-stone-900 relative z-10 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={cn("block w-5 h-px bg-stone-900 transition-all duration-300 origin-center", menuOpen && "rotate-45 translate-y-[3.5px]")} />
              <span className={cn("block w-5 h-px bg-stone-900 transition-all duration-300", menuOpen && "-rotate-45 -translate-y-[3.5px]")} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-stone-50 flex flex-col justify-center items-center gap-0 md:hidden"
          >
            {[...navLinks, ["Sign in", "/login"], ["Reviews", "/reviews"]].map(([label, href], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[2.2rem] font-light text-stone-900 tracking-tight py-3 text-center hover:text-stone-400 transition-colors duration-200"
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10"
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-stone-300 font-medium">AURA Audio</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}