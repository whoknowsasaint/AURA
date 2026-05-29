import { RevealOnScroll } from "@/components/motion/RevealOnScroll"

const quotes = [
  {
    text: "I have been reviewing audio gear for eleven years. AURA One is the first consumer headphone that made me forget I was wearing a consumer headphone.",
    author: "Marcus T.",
    title: "The Audiophile Review",
  },
  {
    text: "The build quality is unlike anything at this price point. Two years in and they look better than the day I opened the box.",
    author: "Priya S.",
    title: "Verified buyer",
  },
  {
    text: "I travelled 140 days last year. AURA One came every single time. The noise cancellation on long-haul flights is genuinely life-changing.",
    author: "James K.",
    title: "Verified buyer",
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-stone-200 py-24 md:py-32 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <RevealOnScroll className="mb-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium">
            What people say
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {quotes.map((q, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <blockquote className="flex flex-col h-full">
                <p className="text-[1.05rem] font-light leading-relaxed text-stone-700 flex-1 mb-8">
                  &ldquo;{q.text}&rdquo;
                </p>
                <footer>
                  <p className="text-sm font-medium text-stone-900">{q.author}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{q.title}</p>
                </footer>
              </blockquote>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}