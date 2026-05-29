import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          <div className="col-span-2 md:col-span-1">
            <span className="text-[13px] tracking-[0.3em] font-medium uppercase block mb-4">AURA</span>
            <p className="text-sm text-stone-400 leading-relaxed max-w-[200px]">
              Audio instruments for those who hear the difference.
            </p>
          </div>
          {[
            {
              heading: "Products",
              links: [["Over-Ear", "/shop"], ["In-Ear", "/shop"], ["Earbuds", "/shop"], ["Accessories", "/shop"]],
            },
            {
              heading: "Company",
              links: [["About", "/about"], ["Craftsmanship", "/about"], ["Careers", "/about"], ["Press", "/about"]],
            },
            {
              heading: "Support",
              links: [["FAQ", "/"], ["Warranty", "/"], ["Returns", "/"], ["Contact", "/"]],
            },
          ].map((col) => (
            <div key={col.heading}>
              <span className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium block mb-4">
                {col.heading}
              </span>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} AURA Audio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <Link key={l} href="/" className="text-xs text-stone-400 hover:text-stone-700 transition-colors duration-200">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}