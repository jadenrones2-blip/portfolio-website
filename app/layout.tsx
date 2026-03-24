import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Jaden Rones | Founder & Product Builder",
  description: "Founder of UniCircle, incoming Product Management Intern at LPL Financial, and hackathon-winning builder across SaaS, AI, and growth.",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning className="antialiased font-sans bg-[#060C17] text-[#F3F3F3] min-h-screen grain">
        {children}
      </body>
    </html>
  )
}
