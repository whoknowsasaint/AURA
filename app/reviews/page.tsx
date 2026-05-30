"use client"
import { useState } from "react"
import { reviews as initialReviews } from "@/lib/reviews"
import { StarRating } from "@/components/ui/StarRating"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"
import { products } from "@/lib/data"
import { cn } from "@/lib/utils"
import type { Review } from "@/lib/types"

const inputClass = "w-full border border-stone-300 bg-transparent px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors duration-200"

export default function ReviewsPage() {
  const [allReviews, setAllReviews] = useState<Review[]>(initialReviews)
  const [filterProduct, setFilterProduct] = useState("all")
  const [filterRating, setFilterRating] = useState(0)
  const [formOpen, setFormOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [hoverRating, setHoverRating] = useState(0)
  const [form, setForm] = useState({ author: "", location: "", product: "", rating: 0, title: "", body: "" })

  const filtered = allReviews
    .filter((r) => filterProduct === "all" || r.product === filterProduct)
    .filter((r) => filterRating === 0 || r.rating === filterRating)

  const avgRating = allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length
  const distribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: allReviews.filter((r) => r.rating === star).length,
    pct: Math.round((allReviews.filter((r) => r.rating === star).length / allReviews.length) * 100),
  }))

  const handleSubmit = () => {
    if (!form.author || !form.product || !form.rating || !form.body) return
    const newReview: Review = {
      id: String(Date.now()),
      author: form.author,
      location: form.location || "Verified buyer",
      rating: form.rating,
      title: form.title || "Customer review",
      body: form.body,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      product: form.product,
      verified: false,
    }
    setAllReviews((prev) => [newReview, ...prev])
    setSubmitted(true)
    setFormOpen(false)
    setForm({ author: "", location: "", product: "", rating: 0, title: "", body: "" })
  }

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 border-b border-stone-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">Customer reviews</p>
            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.05] tracking-tight text-stone-900">
              What they<br /><em className="font-light-italic">hear.</em>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-end gap-4">
              <span className="text-[3.5rem] font-light leading-none text-stone-900">{avgRating.toFixed(1)}</span>
              <div className="pb-2">
                <StarRating rating={avgRating} size="lg" showCount={false} />
                <p className="text-xs text-stone-400 mt-1">{allReviews.length} reviews</p>
              </div>
            </div>
            <div className="space-y-1.5 w-48">
              {distribution.map((d) => (
                <button
                  key={d.star}
                  onClick={() => setFilterRating(filterRating === d.star ? 0 : d.star)}
                  className={cn("flex items-center gap-2 w-full group", filterRating === d.star && "opacity-100")}
                >
                  <span className="text-[11px] text-stone-400 w-3 flex-shrink-0">{d.star}</span>
                  <div className="flex-1 h-1.5 bg-stone-200 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full transition-all duration-300", filterRating === d.star ? "bg-stone-900" : "bg-stone-400")} style={{ width: `${d.pct}%` }} />
                  </div>
                  <span className="text-[11px] text-stone-400 w-6 text-right">{d.count}</span>
                </button>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[11px] tracking-[0.2em] uppercase text-stone-400 font-medium">Filter by</span>
            <button onClick={() => setFilterProduct("all")} className={cn("text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 border transition-colors duration-200", filterProduct === "all" ? "bg-stone-900 text-stone-50 border-stone-900" : "text-stone-500 border-stone-300 hover:border-stone-600")}>
              All products
            </button>
            {Array.from(new Set(allReviews.map((r) => r.product))).map((p) => (
              <button key={p} onClick={() => setFilterProduct(filterProduct === p ? "all" : p)} className={cn("text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 border transition-colors duration-200", filterProduct === p ? "bg-stone-900 text-stone-50 border-stone-900" : "text-stone-500 border-stone-300 hover:border-stone-600")}>
                {p}
              </button>
            ))}
          </div>
          <button
            onClick={() => { setFormOpen(!formOpen); setSubmitted(false) }}
            className="bg-stone-900 text-stone-50 px-6 py-3 text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200 flex-shrink-0"
          >
            Write a review
          </button>
        </div>

        {submitted && (
          <div className="mb-8 py-4 px-6 bg-stone-100 border border-stone-200 text-sm text-stone-600">
            Your review has been submitted. Thank you.
          </div>
        )}

        {formOpen && (
          <div className="mb-12 border border-stone-200 p-8">
            <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">Write a review</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <input type="text" placeholder="Your name" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className={inputClass} />
              <input type="text" placeholder="Location (optional)" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={inputClass} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <select value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className={inputClass}>
                <option value="">Select product</option>
                {products.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
              </select>
              <div className="flex items-center gap-3 border border-stone-300 px-4 py-3">
                <span className="text-sm text-stone-400">Rating</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      onMouseEnter={() => setHoverRating(s)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setForm({ ...form, rating: s })}
                      className="w-5 h-5"
                    >
                      <svg viewBox="0 0 20 20" fill={(hoverRating || form.rating) >= s ? "#1c1917" : "#e7e5e4"} className="w-full h-full">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <input type="text" placeholder="Review title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={cn(inputClass, "mb-5")} />
            <textarea placeholder="Tell us about your experience..." rows={5} value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} className={cn(inputClass, "resize-none mb-5")} />
            <div className="flex gap-4">
              <button onClick={handleSubmit} className="bg-stone-900 text-stone-50 px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200">
                Submit review
              </button>
              <button onClick={() => setFormOpen(false)} className="text-[13px] tracking-wide text-stone-400 hover:text-stone-700 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="text-sm text-stone-400 py-16 text-center">No reviews match your filter.</p>
        ) : (
          <div className="divide-y divide-stone-200">
            {filtered.map((review, i) => (
              <RevealOnScroll key={review.id} delay={Math.min(i * 0.04, 0.2)}>
                <div className="py-10">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <StarRating rating={review.rating} size="sm" showCount={false} className="mb-2" />
                      <p className="text-base font-medium text-stone-900">{review.title}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs text-stone-400">{review.date}</p>
                      <p className="text-xs text-stone-400 mt-0.5">{review.product}</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4 max-w-2xl">{review.body}</p>
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-medium text-stone-700">{review.author}</p>
                    <span className="w-1 h-1 rounded-full bg-stone-300" />
                    <p className="text-xs text-stone-400">{review.location}</p>
                    {review.verified && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-stone-300" />
                        <p className="text-[10px] tracking-[0.15em] uppercase text-stone-400 font-medium">Verified purchase</p>
                      </>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}