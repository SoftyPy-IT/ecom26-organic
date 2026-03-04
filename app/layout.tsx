import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import './globals.css';
import Navbar from './components/header/Navbar';
import StoreProvider from './components/provider/StoreProvider';
import Footer from './components/footer/Footer';
import { ToastProvider } from './components/provider/ToastProvider';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-rajdhani',
  weight: ['400', '500', '600', '700'],
});


export const metadata: Metadata = {
  title: 'Organic Fresh',
  description: 'An e-commerce website for organic food products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rajdhani.className} antialiased`}>
        <StoreProvider>
          <Navbar />
          <main className="min-h-screen flex-1">
            <ToastProvider>
              {children}
            </ToastProvider>
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
