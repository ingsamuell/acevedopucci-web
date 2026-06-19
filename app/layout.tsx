import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; // Importamos el componente
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Acevedo Pucci & Associates LLC | Miami Tax Services",
  description: "Premium professional tax preparation, bookkeeping, and payroll services in Miami, Florida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-background text-text-main font-body antialiased">
        <Navbar /> {/* Renderizado global */}
        {children}
      </body>
    </html>
  );
}