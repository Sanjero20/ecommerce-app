import type { Metadata } from "next";
import { integral, satoshi } from "./fonts";
import "./globals.css";

import Header from "@/components/Header";
import NewsLetter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SHOP.CO",
  description:
    "Shop online for a wide variety of products at SHOP.CO. Find the perfect items for your needs with ease and convenience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${integral.variable} ${satoshi.variable} bg-white`}>
        <Header />
        <main className="font-satoshi-bold">{children}</main>
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}
