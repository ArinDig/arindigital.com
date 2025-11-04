import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arin Digital Innovations | AI & Digital Marketing in Austin, TX',
  description: 'Austin-based AI and digital marketing consultancy specializing in website development, digital marketing, AI consulting, and information security. Helping businesses leverage AI responsibly to maximize growth.',
  keywords: 'AI consulting, digital marketing, website development, information security, Austin TX, artificial intelligence, business growth',
  authors: [{ name: 'Arin Digital Innovations, LLC' }],
  creator: 'Arin Digital Innovations, LLC',
  publisher: 'Arin Digital Innovations, LLC',
  metadataBase: new URL('https://arindigital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Arin Digital Innovations | AI & Digital Marketing in Austin, TX',
    description: 'Austin-based AI and digital marketing consultancy specializing in helping businesses leverage AI responsibly to maximize growth.',
    url: 'https://arindigital.com',
    siteName: 'Arin Digital Innovations',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arin Digital Innovations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arin Digital Innovations | AI & Digital Marketing in Austin, TX',
    description: 'Austin-based AI and digital marketing consultancy specializing in helping businesses leverage AI responsibly.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

