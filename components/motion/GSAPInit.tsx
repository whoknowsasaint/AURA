"use client"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

export function GSAPInit() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    })

    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener("load", onLoad)

    return () => {
      window.removeEventListener("load", onLoad)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}