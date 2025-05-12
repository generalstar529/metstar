'use client'

import './css/style.css'

import { Inter, Oswald } from 'next/font/google'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import '@/assets/scss/index.scss'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
