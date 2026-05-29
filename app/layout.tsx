import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "@/components/layout/CartProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { CartDrawer } from "@/components/layout/CartDrawer"
import { CustomCursor } from "@/components/motion/CustomCursor"
import { SmoothScroll } from "@/components/motion/SmoothScroll"
import { PageTransition } from "@/components/motion/PageTransition"

export const metadata: Metadata = {
  title: { default: "AURA Audio", template: "%s | AURA Audio" },
  description: "Premium wireless headphones engineered for those who hear the difference.",
  keywords: ["headphones", "premium audio", "wireless", "AURA"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aura-audio.vercel.app",
    siteName: "AURA Audio",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CartProvider>
          <CustomCursor />
          <SmoothScroll>
            <Navbar />
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
            <Footer />
          </SmoothScroll>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}