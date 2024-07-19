import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.sass";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce default",
  description: "E-commerce padrão para facilitar criação de lojas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
