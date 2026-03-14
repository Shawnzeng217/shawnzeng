import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Shawn Zeng",
  description: "Writer, Curator, Curator of Ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans text-gray-900 bg-gray-50`}>
        <div className="max-w-7xl mx-auto bg-white min-h-screen shadow-xl">
          <Header />
          <div className="flex flex-col md:flex-row px-4 md:px-12 py-8 gap-12">
            <main className="w-full md:w-2/3">{children}</main>
            <Sidebar />
          </div>
          <footer className="border-t py-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Shawn Zeng. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
