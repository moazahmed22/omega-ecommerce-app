import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CategoryFilterProvider } from "./CategoryFilter-provider";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import { CartProvider } from "./context/CartContext/CartContext";
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from "./context/WishlistContext/WishlistContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omega Shop",
  description:
    "Omega Shop is a e-commerce website created by me. using Next.js and TailwindCSS",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <Toaster position="top-right" reverseOrder={false} />
              <Navbar />
              <CategoryFilterProvider>{children}</CategoryFilterProvider>
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
