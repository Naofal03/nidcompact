import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nidcompact.fr'),
  title: {
    default: 'NidCompact – Rangement & Organisation Petits Espaces',
    template: '%s | NidCompact',
  },
  description:
    'Guides, inspirations et sélections produits pour optimiser votre petit espace. Astuces rangement, organisation studio, solutions gain de place.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'NidCompact',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="font-sans min-h-full flex flex-col bg-navy-950 text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
