import './globals.css'

import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
})

export const metadata = {
  title: 'Danieldev',
  description: 'Next.js migration baseline',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${displayFont.variable} ${monoFont.variable}`}>
        {children}
      </body>
    </html>
  )
}
