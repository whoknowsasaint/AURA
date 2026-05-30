"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/components/layout/CartProvider"
import { formatPrice, cn } from "@/lib/utils"
import { Check, Lock } from "lucide-react"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

const inputClass = "w-full border border-stone-300 bg-transparent px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors duration-200"

const steps = ["Shipping", "Payment", "Review"]

export default function CheckoutPage() {
  const { items, total } = useCart()
  const [step, setStep] = useState(0)
  const [placed, setPlaced] = useState(false)
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", address: "", city: "", country: "", zip: "",
    cardNumber: "", expiry: "", cvv: "", nameOnCard: "",
  })

  const shipping = total > 150 ? 0 : 12
  const tax = Math.round(total * 0.08)
  const orderTotal = total + shipping + tax

  if (placed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6" style={{ paddingTop: "var(--nav-height)" }}>
        <div className="w-14 h-14 rounded-full bg-stone-900 flex items-center justify-center mx-auto mb-8">
          <Check size={24} strokeWidth={1.5} className="text-stone-50" />
        </div>
        <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-4">Order confirmed</p>
        <h1 className="text-3xl md:text-4xl font-light text-stone-900 mb-4">Thank you.</h1>
        <p className="text-sm text-stone-400 mb-10 max-w-xs leading-relaxed">
          Your order has been placed. You will receive a confirmation email shortly.
        </p>
        <Link href="/shop" className="inline-flex items-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200">
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <RevealOnScroll className="mb-12">
          <Link href="/" className="text-[13px] tracking-[0.3em] font-medium uppercase text-stone-900 block mb-10">
            AURA
          </Link>

          <div className="flex items-center gap-2">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <button
                  onClick={() => i < step && setStep(i)}
                  className={cn(
                    "flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-200",
                    i === step ? "text-stone-900" : i < step ? "text-stone-400 hover:text-stone-700" : "text-stone-300"
                  )}
                >
                  <span className={cn("w-5 h-5 rounded-full flex items-center justify-center text-[10px]", i === step ? "bg-stone-900 text-stone-50" : i < step ? "bg-stone-300 text-stone-600" : "border border-stone-200 text-stone-300")}>
                    {i < step ? <Check size={10} strokeWidth={2.5} /> : i + 1}
                  </span>
                  {s}
                </button>
                {i < steps.length - 1 && <span className="text-stone-200 mx-1">/</span>}
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            {step === 0 && (
              <div className="space-y-5">
                <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium mb-6">Shipping information</p>
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="First name" className={inputClass} value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                  <input placeholder="Last name" className={inputClass} value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                </div>
                <input type="email" placeholder="Email address" className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input placeholder="Street address" className={inputClass} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
                <div className="grid grid-cols-3 gap-4">
                  <input placeholder="City" className={inputClass} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                  <input placeholder="ZIP code" className={inputClass} value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} />
                  <select className={inputClass} value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}>
                    <option value="">Country</option>
                    {["United States", "United Kingdom", "Canada", "Germany", "France", "Australia", "Japan", "Singapore", "Nigeria", "Other"].map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <button onClick={() => setStep(1)} className="w-full bg-stone-900 text-stone-50 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200 mt-4">
                  Continue to payment
                </button>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium mb-6">Payment details</p>
                <div className="flex items-center gap-2 text-xs text-stone-400 mb-4">
                  <Lock size={12} strokeWidth={1.5} />
                  <span>Secured by 256-bit SSL encryption</span>
                </div>
                <input placeholder="Name on card" className={inputClass} value={form.nameOnCard} onChange={(e) => setForm({ ...form, nameOnCard: e.target.value })} />
                <input placeholder="Card number" maxLength={19} className={inputClass} value={form.cardNumber}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, "").slice(0, 16)
                    setForm({ ...form, cardNumber: v.replace(/(.{4})/g, "$1 ").trim() })
                  }}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="MM / YY" maxLength={5} className={inputClass} value={form.expiry}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "").slice(0, 4)
                      setForm({ ...form, expiry: v.length >= 3 ? v.slice(0, 2) + " / " + v.slice(2) : v })
                    }}
                  />
                  <input placeholder="CVV" maxLength={4} className={inputClass} value={form.cvv} onChange={(e) => setForm({ ...form, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) })} />
                </div>
                <button onClick={() => setStep(2)} className="w-full bg-stone-900 text-stone-50 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200 mt-4">
                  Review order
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium mb-6">Review your order</p>
                <div className="border border-stone-200 p-6 space-y-4">
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-stone-400 font-medium mb-2">Ships to</p>
                    <p className="text-sm text-stone-700">{form.firstName} {form.lastName}</p>
                    <p className="text-sm text-stone-500">{form.address}, {form.city} {form.zip}</p>
                    <p className="text-sm text-stone-500">{form.country}</p>
                  </div>
                  <div className="border-t border-stone-200 pt-4">
                    <p className="text-[11px] tracking-[0.2em] uppercase text-stone-400 font-medium mb-2">Payment</p>
                    <p className="text-sm text-stone-700">Card ending in {form.cardNumber.slice(-4) || "----"}</p>
                  </div>
                </div>
                <button
                  onClick={() => setPlaced(true)}
                  className="w-full bg-stone-900 text-stone-50 py-5 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200"
                >
                  Place order &mdash; {formatPrice(orderTotal)}
                </button>
                <p className="text-xs text-stone-400 text-center">By placing your order you agree to our Terms of Service.</p>
              </div>
            )}
          </div>

          <div className="md:col-span-5">
            <div className="bg-stone-50 border border-stone-200 p-6 sticky top-28">
              <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium mb-6">Order summary</p>

              {items.length === 0 ? (
                <p className="text-sm text-stone-400">Your cart is empty. <Link href="/shop" className="underline underline-offset-2">Shop now</Link></p>
              ) : (
                <>
                  <div className="space-y-5 mb-6">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex gap-4">
                        <div className="relative w-16 h-16 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="64px" />
                          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-stone-900 text-stone-50 text-[9px] rounded-full flex items-center justify-center font-medium">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-stone-900 truncate">{item.product.name}</p>
                          <p className="text-xs text-stone-400 mt-0.5">{item.selectedColor.name}</p>
                          <p className="text-sm text-stone-600 mt-1">{formatPrice(item.product.price * item.quantity)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-stone-200 pt-5 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">Subtotal</span>
                      <span className="text-stone-700">{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">Shipping</span>
                      <span className="text-stone-700">{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">Tax (est.)</span>
                      <span className="text-stone-700">{formatPrice(tax)}</span>
                    </div>
                    <div className="border-t border-stone-200 pt-3 flex justify-between">
                      <span className="text-sm font-medium text-stone-900">Total</span>
                      <span className="text-sm font-medium text-stone-900">{formatPrice(orderTotal)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}