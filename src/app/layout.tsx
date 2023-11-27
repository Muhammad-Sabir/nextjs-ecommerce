import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopCart",
  description: "E-commerce site created in nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`bg-bgWhite ${inter.className} overflow-x-hidden text-blackishBlue`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
