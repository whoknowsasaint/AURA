"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/types"
import { Plus, Minus } from "lucide-react"

type Props = {
  product: Product
}

const sections = [
  { key: "specs", label: "Specifications" },
  { key: "features", label: "Features" },
  { key: "delivery", label: "Delivery & returns" },
]

const deliveryContent = [
  "Free standard shipping on orders over $150.",
  "Express 2-day shipping available at checkout.",
  "60-day no-questions returns on all orders.",
  "2-year warranty on all AURA products.",
]

export function ProductSpecs({ product }: Props) {
  const [open, setOpen] = useState<string>("specs")

  const toggle = (key: string) => setOpen((prev) => (prev === key ? "" : key))

  return (
    <div className="border-t border-stone-200 mt-16">
      {sections.map((s) => (
        <div key={s.key} className="border-b border-stone-200">
          <button
            onClick={() => toggle(s.key)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span className="text-[13px] tracking-[0.1em] uppercase font-medium text-stone-700">
              {s.label}
            </span>
            {open === s.key ? (
              <Minus size={16} strokeWidth={1.5} className="text-stone-400 flex-shrink-0" />
            ) : (
              <Plus size={16} strokeWidth={1.5} className="text-stone-400 flex-shrink-0" />
            )}
          </button>

          <div
            className={cn(
              "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              open === s.key ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="pb-8">
              {s.key === "specs" && (
                <dl className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {product.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-[11px] tracking-[0.2em] uppercase text-stone-400 font-medium mb-1">
                        {spec.label}
                      </dt>
                      <dd className="text-sm text-stone-700">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {s.key === "features" && (
                <ul className="space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-stone-600">
                      <span className="w-1 h-1 rounded-full bg-stone-400 flex-shrink-0 mt-2" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              {s.key === "delivery" && (
                <ul className="space-y-3">
                  {deliveryContent.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sm text-stone-600">
                      <span className="w-1 h-1 rounded-full bg-stone-400 flex-shrink-0 mt-2" />
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}