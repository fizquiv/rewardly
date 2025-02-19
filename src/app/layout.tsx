import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rewardly',
  description: 'Track your habits and earn rewards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex items-center justify-center`}>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  )
}