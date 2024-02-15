import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import { Modal } from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';

const inter = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Airbnb App',
  description: 'Developed by Gokberk AY',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <RegisterModal/>
        {/* <Modal actionLabel='Submit' title="Hello World" isOpen /> */}
        {children}
      </body>
    </html>
  );
}
