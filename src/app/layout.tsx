import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import StarsCanvas from "@/modals/Background";
import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divyesh Nandanwar",
  description: "Divyesh Nandanwar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}w-full relative scroll-smooth `}>
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
