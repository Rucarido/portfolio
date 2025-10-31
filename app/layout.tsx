import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aakash Hariram | Portfolio",
  description:
    "Portfolio of Aakash Hariram - Electronics and Computer Engineering Student, Passionate Coder & Problem Solver",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`font-sans antialiased relative`}>
        <div className="animated-bg"></div>
        <div className="content-above-bg">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
