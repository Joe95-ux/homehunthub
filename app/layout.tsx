import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Home Hunt Hub',
  description: 'Find rooms to rent around you.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <ClientOnly>
        <ToasterProvider/>
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser}/>
      </ClientOnly>
      <body className={font.className}>{children}</body>
    </html>
  )
}
