import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'DevLearn | student friendly',
  description: 'A place to learn development related stuff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black min-h-screen'>{children}</body>
    </html>
  )
}
