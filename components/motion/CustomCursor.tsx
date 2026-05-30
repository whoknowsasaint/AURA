"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

type CursorState = "default" | "hover" | "text" | "drag"

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)
  const [state, setState] = useState<CursorState>("default")

  useEffect(() => {
    const ctx = gsap.context(() => {
      const move = (e: MouseEvent) => {
        gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0, ease: "none" })
        gsap.to(ring.current, { x: e.clientX, y: e.clientY, duration: 0.18, ease: "power2.out" })
      }

      const onLinkEnter = (e: Event) => {
        const el = e.currentTarget as HTMLElement
        const cursorLabel = el.dataset.cursor
        setState(cursorLabel ? "text" : "hover")
        if (label.current && cursorLabel) label.current.textContent = cursorLabel
        gsap.to(ring.current, { scale: cursorLabel ? 3 : 2.4, opacity: 0.5, duration: 0.35, ease: "power2.out" })
        gsap.to(dot.current, { scale: 0, duration: 0.2 })
      }

      const onLinkLeave = () => {
        setState("default")
        if (label.current) label.current.textContent = ""
        gsap.to(ring.current, { scale: 1, opacity: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" })
        gsap.to(dot.current, { scale: 1, duration: 0.3 })
      }

      const onDragEnter = () => {
        setState("drag")
        gsap.to(ring.current, { scale: 2, opacity: 0.3, duration: 0.3, ease: "power2.out" })
      }

      window.addEventListener("mousemove", move)

      const interactables = document.querySelectorAll("a, button, [data-cursor]")
      const draggables = document.querySelectorAll("[data-cursor='drag']")

      interactables.forEach((el) => {
        el.addEventListener("mouseenter", onLinkEnter)
        el.addEventListener("mouseleave", onLinkLeave)
      })

      draggables.forEach((el) => {
        el.addEventListener("mouseenter", onDragEnter)
        el.addEventListener("mouseleave", onLinkLeave)
      })

      return () => {
        window.removeEventListener("mousemove", move)
        interactables.forEach((el) => {
          el.removeEventListener("mouseenter", onLinkEnter)
          el.removeEventListener("mouseleave", onLinkLeave)
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-stone-900 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ring}
        className="fixed top-0 left-0 w-8 h-8 border border-stone-900 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{ willChange: "transform" }}
      >
        <span
          ref={label}
          className="text-[8px] tracking-[0.15em] uppercase font-medium text-stone-900 pointer-events-none leading-none"
        />
      </div>
    </>
  )
}