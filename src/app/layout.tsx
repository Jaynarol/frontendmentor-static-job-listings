import './globals.css'

import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'

const font = League_Spartan({ subsets: ['latin'], weight: ['500', '700'] })

export const metadata: Metadata = {
  title: 'Frontend Mentor - Job listings with filtering',
  description:
    'the Job listings with filtering coding challenge from Frontend Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-accent`}>{children}</body>
    </html>
  )
}
