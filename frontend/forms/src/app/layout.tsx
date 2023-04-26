import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quarks App',
  description: 'Challenge by Tomás Falchini',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav>
          <NavBar />
        </nav>
        {children}
      </body>
    </html>
  )
}
