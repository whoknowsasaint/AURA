"use client"
import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Minus } from "lucide-react"
import { useCart } from "./CartProvider"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, total } = useCart()
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-stone-950/30 z-[60] backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-stone-50 z-[70] flex flex-col"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-stone-200">
              <span className="text-[13px] tracking-[0.2em] uppercase font-medium">
                Cart {items.length > 0 && `(${items.length})`}
              </span>
              <button onClick={closeCart} aria-label="Close cart">
                <X size={20} strokeWidth={1.5} className="text-stone-600 hover:text-stone-900 transition-colors" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
                  <p className="text-stone-400 text-sm">Your cart is empty.</p>
                  <button onClick={closeCart} className="text-[13px] tracking-wide underline underline-offset-4 text-stone-600">
                    Continue shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="relative w-20 h-20 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-stone-900 truncate">{item.product.name}</p>
                      <p className="text-xs text-stone-400 mt-0.5">{item.selectedColor.name}</p>
                      <p className="text-sm text-stone-600 mt-1">{formatPrice(item.product.price)}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-stone-300 rounded hover:border-stone-600 transition-colors"
                        >
                          <Minus size={10} strokeWidth={2} />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-stone-300 rounded hover:border-stone-600 transition-colors"
                        >
                          <Plus size={10} strokeWidth={2} />
                        </button>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="ml-auto text-xs text-stone-400 hover:text-stone-700 underline underline-offset-2 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="px-8 py-6 border-t border-stone-200 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-stone-500">Subtotal</span>
                  <span className="text-sm font-medium">{formatPrice(total)}</span>
                </div>
                <p className="text-xs text-stone-400">Shipping calculated at checkout.</p>
                <Link
                href="/checkout"
                onClick={closeCart}
                className="w-full block text-center bg-stone-900 text-stone-50 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200"
                >
                Checkout
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}