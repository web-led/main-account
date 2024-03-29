"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" suppressHydrationWarning >
      <head>
      <title> WEBLED | شريكك للتحول الرقمي</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Built with Next.js and TypeScript" />
      <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={`dark:bg-[#010016] `}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
