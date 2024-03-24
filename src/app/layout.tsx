import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScreenModeProvider } from "./Context/screenModeContext";

// Initialize Inter font with subsets
const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScreenModeProvider>{children}</ScreenModeProvider>
      </body>
    </html>
  );
};

// Metadata for the project
export const metadata: Metadata = {
  title: "HexLeap Assignment",
  description: "This project is created by Syed Uvais for HexLeap Company as an assignment",
};

export default RootLayout;
