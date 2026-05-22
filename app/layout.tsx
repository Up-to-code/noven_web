import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navigation/navbar'
import { Breadcrumbs } from '@/components/navigation/breadcrumbs'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://noven.app'),
  title: {
    default: 'Noven — Build Better Habits with Clarity',
    template: '%s | Noven',
  },
  description: 'Noven is a calm iOS habit tracker for daily routines, clean progress analytics, and focused consistency.',
  generator: 'v0.app',
  keywords: ['Noven', 'habit tracker', 'habits', 'routine', 'productivity', 'daily planner', 'progress analytics', 'iOS app'],
  authors: [{ name: 'Ahmed Mansour', url: 'https://github.com/Up-to-code' }],
  creator: 'Ahmed Mansour',
  publisher: 'Ahmed Mansour',
  category: 'Productivity',
  classification: 'Health & Productivity',
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
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon.ico' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/favicon_io/site.webmanifest',
      },
    ],
  },
  openGraph: {
    title: 'Noven — Build Better Habits with Clarity',
    description: 'A calm iOS habit tracker for daily routines, clean progress analytics, and focused consistency.',
    url: 'https://noven.app',
    siteName: 'Noven',
    images: [
      {
        url: '/Noven/icon.png',
        width: 1200,
        height: 630,
        alt: 'Noven app icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noven — Build Better Habits with Clarity',
    description: 'A calm iOS habit tracker for daily routines, clean progress analytics, and focused consistency.',
    creator: '@uptocodejs',
    images: ['/Noven/icon.png'],
  },
  verification: {
    google: 'google-site-verification-id',
  },
  appleWebApp: {
    capable: true,
    title: 'Noven',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased relative min-h-screen">
        <Navbar />
        <Breadcrumbs />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
