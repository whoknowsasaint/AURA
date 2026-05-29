import Link from "next/link"

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-6">
        404
      </p>
      <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.0] tracking-tight text-stone-900 mb-6">
        Nothing here<br />
        <em className="font-light-italic">but silence.</em>
      </h1>
      <p className="text-sm text-stone-400 mb-10 max-w-xs leading-relaxed">
        The page you are looking for has moved, or never existed.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200"
      >
        Go home
      </Link>
    </div>
  )
}