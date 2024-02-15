import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divyesh Nandanwar",
  description: `I'm a web developer who aims to combine the beauty of design with the logical perfection of coding. Training myself every day and pushing my own limits to discover new ways of creating a great experience.`,
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
