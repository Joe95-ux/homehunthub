import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

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
      <ClientOnly>
        <ToasterProvider/>
        <RegisterModal />
        <Navbar/>
      </ClientOnly>
      <body className={font.className}>{children}</body>
    </html>
  )
}
