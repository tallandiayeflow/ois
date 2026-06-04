import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'OIS - Optimum International Services | Solutions Industrielles au Sénégal',
  description: 'Votre partenaire de confiance pour les filtres industriels, les pièces d\'origine, l\'aménagement de conteneurs et les travaux de second œuvre au Sénégal.',
  keywords: ['filtres industriels', 'aménagement conteneurs', 'travaux BA13', 'second œuvre', 'Sénégal', 'Dakar', 'OIS'],
  authors: [{ name: 'OIS - Optimum International Services' }],
  openGraph: {
    title: 'OIS - Optimum International Services',
    description: 'Solutions industrielles et aménagement professionnel au Sénégal',
    locale: 'fr_SN',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5A623',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
