import type { Metadata } from 'next'
import { DM_Sans as DMSans } from 'next/font/google'
import './globals.css'

const dmSams = DMSans({ subsets: ['latin'], variable: '--font-dmsans' })

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
    <html lang="en" className={`${dmSams.className}`}>
      <body className="flex h-screen items-start justify-center bg-app-background text-center font-semibold text-app-text antialiased outline-none">
        {children}
      </body>
    </html>
  )
}
