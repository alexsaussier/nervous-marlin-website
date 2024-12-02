import localFont from "next/font/local";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';
import Backlinks from '@/components/Backlinks';
import Script from 'next/script';
//import GoogleAnalytics from '@next/third-parties/google';

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
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

      <Analytics />
      <script defer src="https://cloud.umami.is/script.js" data-website-id="026be66d-e0f5-4859-a4b1-38e5e3f193d2"></script>

      

      <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LL1PKNBEDL"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LL1PKNBEDL');
          `}
        </Script>
      
      <Head>       
        <link rel="icon" type="image/png" href="/app/public/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/app/public/favicon.svg" />
        <link rel="shortcut icon" href="/app/public/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/app/public/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Nervous Marlin" />
        <link rel="manifest" href="/app/public/site.webmanifest" />
      </Head>
      <Backlinks />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <GoogleAnalytics gaId="G-2SVN8M4HP1" /> */}
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
