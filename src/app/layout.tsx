import type { Metadata } from "next";
import { integral, satoshi } from "./fonts";
import "./globals.css";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "SC | ShopCo",
  description: "E-commerce application",
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
      </body>
    </html>
  );
}
