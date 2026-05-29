"use client"
import { useState } from "react"
import { RevealOnScroll } from "@/components/motion/RevealOnScroll"
import { cn } from "@/lib/utils"

const cookieTypes = [
  { id: "necessary", label: "Strictly necessary", description: "Required for the site to function. Cannot be disabled.", locked: true, defaultOn: true },
  { id: "analytics", label: "Analytics", description: "Help us understand how visitors interact with the site. All data is anonymised.", locked: false, defaultOn: false },
  { id: "preferences", label: "Preferences", description: "Remember settings like your country and currency.", locked: false, defaultOn: false },
]

export default function CookiesPage() {
  const [prefs, setPrefs] = useState<Record<string, boolean>>({
    necessary: true, analytics: false, preferences: false,
  })
  const [saved, setSaved] = useState(false)

  const toggle = (id: string) => {
    setPrefs((prev) => ({ ...prev, [id]: !prev[id] }))
    setSaved(false)
  }

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 border-b border-stone-200">
        <RevealOnScroll>
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">Legal</p>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-tight text-stone-900">Cookie Policy</h1>
        </RevealOnScroll>
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-12 py-14">
        <RevealOnScroll>
          <p className="text-sm text-stone-500 leading-relaxed mb-12">We use cookies to operate this website and, with your consent, to understand how it is used. You can manage your preferences below at any time.</p>
        </RevealOnScroll>

        <div className="space-y-4 mb-10">
          {cookieTypes.map((c, i) => (
            <RevealOnScroll key={c.id} delay={i * 0.06}>
              <div className="flex items-start justify-between gap-8 py-6 border-b border-stone-200">
                <div>
                  <p className="text-sm font-medium text-stone-900 mb-1">{c.label}</p>
                  <p className="text-xs text-stone-400 leading-relaxed max-w-sm">{c.description}</p>
                </div>
                <button
                  onClick={() => !c.locked && toggle(c.id)}
                  disabled={c.locked}
                  aria-checked={prefs[c.id]}
                  role="switch"
                  className={cn(
                    "relative flex-shrink-0 w-10 h-5 rounded-full transition-colors duration-200",
                    prefs[c.id] ? "bg-stone-900" : "bg-stone-300",
                    c.locked && "opacity-40"
                  )}
                >
                  <span className={cn("absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200", prefs[c.id] ? "translate-x-5" : "translate-x-0.5")} />
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <button
          onClick={() => setSaved(true)}
          className="bg-stone-900 text-stone-50 px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200"
        >
          {saved ? "Preferences saved" : "Save preferences"}
        </button>
      </section>
    </div>
  )
}