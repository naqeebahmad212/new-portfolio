import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import HeaderMain from "@/components/HeaderMain";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#041130]">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <HeaderMain />
        {children}
      </body>
    </html>
  );
}
