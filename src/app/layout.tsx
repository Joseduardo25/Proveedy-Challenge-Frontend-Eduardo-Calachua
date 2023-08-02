import './globals.css'
import './style.css'
import type { Metadata } from 'next'
import { Inter, Roboto, Roboto_Serif } from 'next/font/google'

const inter = Roboto({weight: ['400', '500', '700'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'PROVEDDY',
  description: 'Optimiza tus clases con la poderosa plataforma Proveedy: crea contenido educativo con la ayuda de inteligencia artificial. ¡Mejora el aprendizaje y destaca!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
