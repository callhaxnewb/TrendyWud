import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "TRENDY WUDPLAST - Premium WPC Doors & Frames",
  description:
    "Leading manufacturer of premium WPC doors, frames, and boards committed to quality and sustainability. Eco-friendly wood plastic composite solutions.",
  generator: "v0.app",
  keywords: "WPC doors, wood plastic composite, door frames, sustainable materials, eco-friendly doors",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${dmSans.style.fontFamily};
  --font-serif: ${spaceGrotesk.style.fontFamily};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
