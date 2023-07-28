import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lyperio',
  description: 'AI Automation Agency for Short-Term Rental Companies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:image' content='https://lyperio.com/og-image.svg' />
        <meta property='og:image:secure_url' content='https://lyperio.com/og-image.svg' />
      </head>
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
