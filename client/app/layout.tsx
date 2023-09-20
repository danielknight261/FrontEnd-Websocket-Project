import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './GlobalRedux/provider';
import RandomNumberGenerator from './Components/RandomNumberGenerator';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quadra Coin',
  description: 'A Quarda Test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#1f1e25] flex flex-col items-center justify-center min-h-screen">
        {/* Set the background color and center content */}
        <h1 className="text-2xl font-bold mb-4 text-white">Quadra Coin</h1>
        <Providers>
          {children}
          <RandomNumberGenerator />
        </Providers>
      </body>
    </html>
  );
}
