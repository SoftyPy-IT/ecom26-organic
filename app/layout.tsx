import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import './globals.css';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-rajdhani',
  weight: ['400', '500', '600', '700'],
});


export const metadata: Metadata = {
  title: 'Organic Food',
  description: 'An e-commerce website for organic food products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rajdhani.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
