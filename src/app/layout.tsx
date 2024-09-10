import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: '@OxenteSoltaOsCachos',
  description: 'Link-in-bio to hair influencer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body className="flex h-screen items-start justify-center bg-black font-semibold text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  )
}
