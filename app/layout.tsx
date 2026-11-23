import './globals.css'
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
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
    <html lang="ko">
      <body>
        <AppRouterCacheProvider>
          <Header />
          <Nav />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
