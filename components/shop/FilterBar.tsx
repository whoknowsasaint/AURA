"use client"
import { Tag } from "@/components/ui/Tag"

type FilterBarProps = {
  active: string
  onChange: (value: string) => void
  sortBy: string
  onSortChange: (value: string) => void
  total: number
}

const categories = [
  { label: "All", value: "all" },
  { label: "Over-ear", value: "over-ear" },
  { label: "In-ear", value: "in-ear" },
  { label: "Earbuds", value: "earbuds" },
]

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Top rated", value: "rating" },
  { label: "Price: low to high", value: "price-asc" },
  { label: "Price: high to low", value: "price-desc" },
  { label: "Newest", value: "newest" },
]

export function FilterBar({ active, onChange, sortBy, onSortChange, total }: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-stone-200">
      <div className="flex items-center gap-2 flex-wrap">
        {categories.map((c) => (
          <Tag
            key={c.value}
            active={active === c.value}
            onClick={() => onChange(c.value)}
          >
            {c.label}
          </Tag>
        ))}
        <span className="text-xs text-stone-400 ml-2">
          {total} {total === 1 ? "product" : "products"}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-[11px] tracking-[0.2em] uppercase text-stone-400 font-medium flex-shrink-0">
          Sort
        </span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="text-sm text-stone-600 bg-transparent border border-stone-200 px-3 py-2 focus:outline-none focus:border-stone-600 transition-colors duration-200 appearance-none pr-8"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2378716c' stroke-width='1.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center" }}
        >
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}