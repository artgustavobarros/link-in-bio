import type { Metadata } from 'next'
import { DM_Sans as DMSans } from 'next/font/google'
import './globals.css'

const dmSans = DMSans({ subsets: ['latin'], variable: '--font-dmsans' })

export const metadata: Metadata = {
  title: '@OxenteSoltaOsCachos',
  description: 'Link-in-bio to hair influencer',
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body className="flex h-screen items-start justify-center bg-sky-200 font-semibold text-zinc-900 antialiased dark:bg-sky-200">
        {children}
      </body>
    </html>
  )
}
