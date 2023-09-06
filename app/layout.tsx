import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Home Hunt Hub',
  description: 'Find rooms to rent around you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar/>
      <body className={font.className}>{children}</body>
    </html>
  )
}
