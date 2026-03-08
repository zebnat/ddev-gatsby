import './globals.css'

export const metadata = {
  title: 'Danieldev',
  description: 'Next.js migration baseline',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
