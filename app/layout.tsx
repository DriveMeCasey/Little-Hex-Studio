import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Amatic_SC, Poppins } from "next/font/google"

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${amatic.variable} ${poppins.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
