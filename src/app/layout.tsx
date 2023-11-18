import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/index";

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
    <html lang="en">
      <body
        className={`bg-bgWhite ${inter.className} mx-auto px-4 md:px-12 lg:w-[1200px]`}
      >
        <header>
          <Navbar />
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
