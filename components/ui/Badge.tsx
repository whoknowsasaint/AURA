import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  variant?: "dark" | "light" | "outline"
  className?: string
}

const variants = {
  dark: "bg-stone-900 text-stone-50",
  light: "bg-stone-100 text-stone-600",
  outline: "border border-stone-300 text-stone-600 bg-transparent",
}

export function Badge({ children, variant = "dark", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[10px] tracking-[0.22em] uppercase font-medium px-2.5 py-1",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}