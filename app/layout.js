import localFont from "next/font/local";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';
import Backlinks from '@/components/Backlinks';
import Script from 'next/script';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nervous Marlin | Blue Marlin Fishing Lodge in Brazil",
  description: "Experience world-class Blue Marlin fishing in Bahia, Brazil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />

      <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_ID');
          `}
        </Script>
      
      <Head>       
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Backlinks />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
