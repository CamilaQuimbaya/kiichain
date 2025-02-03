import { Montserrat } from "next/font/google";
import "./globals.css";
import TransitionProvider from "../components/transitionProvider";
import { ReactNode } from "react";
import React from "react";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "web3",
  description: "project",
};

// Definir el tipo de las props del Layout
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
