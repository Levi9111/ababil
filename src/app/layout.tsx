import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Inter, Luxurious_Roman } from 'next/font/google';
import { cn } from '@/lib/utils';

const interFont = Inter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ababil Crafts',
  description:
    'Discover unique and artistic bottle designs at Ababil Crafts. Perfect for home decor, gifts, and collections.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'font-interFont antialiased relative',
          interFont.variable,
          interFont.style,
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
