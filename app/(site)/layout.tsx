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
        <meta name="description" content="شركة WEBLED هي شركة برمجيات متخصصة في تطوير الحلول البرمجية وتصميم المواقع في الوطن العربي. نقدم حلولًا فعّالة ومبتكرة لعملائنا لتحقيق أهدافهم الرقمية." />
        <meta name="keywords" content="شركة WEBLED, برمجيات, تطوير, تصميم مواقع, الوطن العربي" />
        <title>شركة WEBLED - حلول برمجية وتصميم مواقع في الوطن العربي</title>
        <meta name="language" content="العربية" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index,follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Language" content="ar" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="canonical" href="https://www.webled.org/" />
        <meta name="publisher" content="شركة WEBLED" />
        <meta name="copyright" content="Copyright © 2024 شركة WEBLED" />
        <meta property="og:title" content="شركة WEBLED - حلول برمجية وتصميم مواقع في الوطن العربي" />
        <meta property="og:description" content="شركة WEBLED هي شركة برمجيات متخصصة في تطوير الحلول البرمجية وتصميم المواقع في الوطن العربي. نقدم حلولًا فعّالة ومبتكرة لعملائنا لتحقيق أهدافهم الرقمية." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webled.org/" />
        <meta property="og:image" content="https://www.webled.com/images/favicon.png" />
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
