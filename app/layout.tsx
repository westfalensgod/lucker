import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AmplitudeProvider } from "@/app/providers"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <AmplitudeProvider>
        <body className={inter.className}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <Header />
                {children}
            </ThemeProvider>
        <Analytics />
        </body>
      </AmplitudeProvider>
    </html>
  )
}
