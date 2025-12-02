import type { Metadata } from 'next'
import { Cinzel, Lato } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '700'],
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Golf Resort Rome - Your Golf & Luxury Retreat in the Heart of Rome',
  description: 'Exclusive 2025 packages: top-class golf, relaxation and refined hospitality. Book now and lock in your guaranteed price until December 31, 2025.',
  keywords: 'golf resort rome, golf club rome, golf packages, golf course rome, luxury golf italy',
  openGraph: {
    title: 'Golf Resort Rome - Your Golf & Luxury Retreat',
    description: 'Exclusive 2025 packages: top-class golf, relaxation and refined hospitality.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${cinzel.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}

