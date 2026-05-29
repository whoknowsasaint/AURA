import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes } from "react"

type Variant = "primary" | "secondary" | "ghost" | "outline"
type Size = "sm" | "md" | "lg"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

const variants: Record<Variant, string> = {
  primary: "bg-stone-900 text-stone-50 hover:bg-stone-800",
  secondary: "bg-stone-100 text-stone-900 hover:bg-stone-200",
  ghost: "bg-transparent text-stone-600 hover:text-stone-900",
  outline: "border border-stone-300 text-stone-700 hover:border-stone-900 hover:text-stone-900 bg-transparent",
}

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[12px] tracking-[0.12em]",
  md: "px-8 py-4 text-[13px] tracking-[0.15em]",
  lg: "px-10 py-5 text-[13px] tracking-[0.18em]",
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 uppercase font-medium transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}