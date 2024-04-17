import type { Metadata, Viewport } from "next";
import "./globals.css";
import Swap from "@/components/Swap";

export const metadata: Metadata = {
  title: "Memeitizer PRO",
  description: "Chat with Memeitizer Pro AI",
  manifest: "/manifest.json",
  metadataBase: new URL("https://geminix-pro.vercel.app/"),
  openGraph: {
    type: "website",
    url: "https://geminix-pro.vercel.app/",
    title: "Memeitizer PRO Chat AI",

    description: "Chat with Memeitizer Pro AI",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Memeitizer PRO Chat AI",
      },
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Memeitizer PRO Chat AI",
      },
    ],
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};
export const viewport: Viewport = {
  themeColor: "#5261ea",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Swap />
        {children}
      </body>
    </html>
  );
}
