// src/app/layout.tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: '--font-cormorant'
});

const notoSansEthiopic = Noto_Sans_Ethiopic({ 
  subsets: ["ethiopic"],
  weight: ["300", "400", "600", "700"],
  variable: '--font-ethiopic'
});

export const metadata: Metadata = {
  title: "Guta & Bontu | Wedding Invitation",
  description: "Join us in celebrating the marriage of Guta and Bontu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${notoSansEthiopic.variable} bg-[#FDFBF7] text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
