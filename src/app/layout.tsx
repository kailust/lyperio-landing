import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Providers } from './providers'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lyperio | AI Automation',
  description: 'AI Automation Agency for Short-Term Rental Companies',
  openGraph: {
    type: "website",
    images: [
      'https://lyperio.com/og-image.svg'
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
      </body>
    </html>
  )
}
