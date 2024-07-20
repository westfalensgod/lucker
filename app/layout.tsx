import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import { AmplitudeProvider } from "@/app/providers"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"


export const metadata: Metadata = {
  title: 'yanisneverlies',
  description: 'I like it when it\'s green in PageSpeed Insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
    <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            type="image/png"
            sizes="any"
        />
        <link
            rel="icon"
            href="/favicon-16x16.png"
            type="image/png"
            sizes="16x16"
        />
        <link
            rel="icon"
            href="/favicon-32x32.png"
            type="image/png"
            sizes="32x32"
        />
        <link
            rel="icon"
            href="/android-chrome-192x192.png"
            type="image/png"
            sizes="192x192"
        />
        <link
            rel="icon"
            href="/android-chrome-512x512.png"
            type="image/png"
            sizes="512x512"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
    </head>
      <AmplitudeProvider>
        <body>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        <Analytics />
        </body>
      </AmplitudeProvider>
    </html>
  )
}
