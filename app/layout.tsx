import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/Modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
