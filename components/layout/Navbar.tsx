"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useCart } from "./CartProvider"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

export function Navbar() {
  const ref = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openCart, count } = useCart()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
      )

      ScrollTrigger.create({
        start: "top -80",
        onEnter: () => setScrolled(true),
        onLeaveBack: () => setScrolled(false),
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <header
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-600",
          scrolled ? "bg-stone-50/90 backdrop-blur-md border-b border-stone-200" : "bg-transparent"
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <nav className="max-w-[1440px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          <Link
            href="/"
            className="text-[13px] tracking-[0.3em] font-medium uppercase text-stone-900"
          >
            AURA
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {[["Shop", "/shop"], ["Collections", "/shop"], ["About", "/about"]].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-[13px] tracking-wide text-stone-500 hover:text-stone-900 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={openCart}
              className="relative text-[13px] tracking-wide text-stone-500 hover:text-stone-900 transition-colors duration-200"
              aria-label="Open cart"
            >
              Cart
              {count > 0 && (
                <span className="absolute -top-1 -right-3 w-4 h-4 bg-stone-900 text-stone-50 text-[10px] rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            <button
              className="md:hidden text-stone-900"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="text-[13px] tracking-wide">{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-stone-50 flex flex-col justify-center items-center gap-10 md:hidden">
          {[["Shop", "/shop"], ["Collections", "/shop"], ["About", "/about"]].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-light text-stone-900 tracking-tight"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}