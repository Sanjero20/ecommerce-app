import type { Metadata } from 'next';
import { integral, satoshi } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'SC | ShopCo',
  description: 'E-commerce application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${integral.variable} ${satoshi.variable} font-satoshi`}>
        {children}
      </body>
    </html>
  );
}
