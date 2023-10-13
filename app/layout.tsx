import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecocare - Your Healthcare Companion',
  description: 'EcoCare ist umfassend bei der Bekämpfung der COVID-19-Pandemie aktiv. Dies beinhaltet auch den Aufbau und Betrieb von zertifizierten Test- und Impfzentren',
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
