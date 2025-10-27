import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
// import ClientLayout from "@/components/client-provider";
import { siteConfig } from "@/config/site";
import ClientLayout from "@/components/layouts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ToastContainer } from "react-toastify";
// import { FacebookPixel } from "@/components/facebook-pixel";
// import GoogleAnalytics from "@/components/gtag";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  // metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    // images: [siteConfig.ogImage],
  },
};

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} overflow-x-hidden`}
      >
        <ClientLayout>{children}</ClientLayout>
        <ToastContainer />
        {/* <GoogleAnalytics /> */}
        {/* <FacebookPixel /> */}
      </body>
    </html>
  );
}
