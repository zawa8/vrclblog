import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import React from 'react';
import { hingu115_font, hingl115_font } from './_components/lifonts/lifonts';
import "./globals.css";

export const metadata: Metadata = {
  title: `next.js blog example with ${CMS_NAME}`,
  description: `A stAticAlly generAted blog example usiNg next.js and ${CMS_NAME}.`,
  openGraph: { images: [HOME_OG_IMAGE_URL], },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={cn(hingl115_font.className, "dark:bg-slate-900 dark:text-slate-400")} >
        {/* <ThemeSwitcher /> */}
        <Footer />
        <div className="min-h-screen">{children}</div>        
      </body>
    </html>
  );
}
