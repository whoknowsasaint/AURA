import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
}

export function Tag({ children, active = false, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center px-4 py-2 text-[11px] tracking-[0.18em] uppercase font-medium border transition-all duration-200",
        active
          ? "bg-stone-900 text-stone-50 border-stone-900"
          : "bg-transparent text-stone-500 border-stone-300 hover:border-stone-600 hover:text-stone-800",
        className
      )}
    >
      {children}
    </button>
  )
}