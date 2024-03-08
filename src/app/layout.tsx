import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KidX AI | Education Solutions',
  description: 'Empowering Education with AI Solutions for Kids',
  openGraph: {
    type: "website",
    images: [
      'https://kidxai.com/og-image.svg'
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
