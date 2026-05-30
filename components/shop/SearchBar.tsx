"use client"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  value: string
  onChange: (val: string) => void
  className?: string
}

export function SearchBar({ value, onChange, className }: Props) {
  return (
    <div className={cn("relative", className)}>
      <Search
        size={15}
        strokeWidth={1.5}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-10 pr-10 py-3 bg-transparent border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-500 transition-colors duration-200"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 transition-colors"
          aria-label="Clear search"
        >
          <X size={14} strokeWidth={1.5} />
        </button>
      )}
    </div>
  )
}