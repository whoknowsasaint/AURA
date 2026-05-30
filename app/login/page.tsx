"use client"
import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

const inputClass = "w-full border border-stone-300 bg-transparent px-4 py-3.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors duration-200"

export default function LoginPage() {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1200)
  }

  return (
    <div className="min-h-screen flex" style={{ paddingTop: "var(--nav-height)" }}>
      <div className="hidden md:block flex-1 relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-top"
        >
          <source src="/videos/lifestyle.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-stone-900/30" />
        <div className="absolute bottom-12 left-12">
          <p className="text-stone-50 text-2xl font-light leading-snug max-w-xs">
            &ldquo;Silence is not the absence of sound. It is the presence of everything you choose.&rdquo;
          </p>
          <p className="text-stone-300 text-xs tracking-[0.2em] uppercase mt-4 font-medium">AURA Audio</p>
        </div>
      </div>

      <div className="w-full md:w-[480px] flex-shrink-0 flex flex-col justify-center px-8 md:px-16 py-16">
        <div className="max-w-sm mx-auto w-full">
          <Link href="/" className="text-[13px] tracking-[0.3em] font-medium uppercase text-stone-900 block mb-14">
            AURA
          </Link>

          {done ? (
            <div className="text-center">
              <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-4">Welcome back</p>
              <p className="text-2xl font-light text-stone-900 mb-8">You are signed in.</p>
              <Link href="/shop" className="inline-flex items-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200">
                Shop now
              </Link>
            </div>
          ) : (
            <>
              <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 font-medium mb-3">Sign in</p>
              <h1 className="text-3xl font-light text-stone-900 mb-10">Welcome back.</h1>

              <div className="space-y-4">
                <input type="email" placeholder="Email address" className={inputClass} />
                <div className="relative">
                  <input type={show ? "text" : "password"} placeholder="Password" className={cn(inputClass, "pr-12")} />
                  <button onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 transition-colors">
                    {show ? <EyeOff size={16} strokeWidth={1.5} /> : <Eye size={16} strokeWidth={1.5} />}
                  </button>
                </div>

                <div className="flex justify-end">
                  <button className="text-xs text-stone-400 hover:text-stone-700 transition-colors underline underline-offset-2">
                    Forgot password?
                  </button>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-stone-900 text-stone-50 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-stone-800 transition-colors duration-200 disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>

              <p className="text-sm text-stone-400 text-center mt-8">
                No account?{" "}
                <Link href="/signup" className="text-stone-700 underline underline-offset-2 hover:text-stone-900 transition-colors">
                  Create one
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}