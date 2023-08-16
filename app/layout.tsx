import './globals.css'
import type { Metadata } from 'next'
import Header from './header'
import Nav from './nav'
import Footer from './footer'

export const metadata: Metadata = {
  title: 'loa',
  description: 'loa description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
