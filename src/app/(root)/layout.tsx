import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import ToastProvider from "@/lib/providers/toastProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastProvider />
      <header className="mx-auto px-4 md:px-12 lg:w-[1300px]">
        <Navbar />
      </header>
      {children}
      <Footer />
    </>
  );
}
