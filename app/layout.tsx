import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Green Way Safaris — Rwanda",
  description: "A Rwanda travel company created by photographers who grew up in its forests and hills.",
  icons: {
    icon: "/logoforfavicon.png",
    shortcut: "/logoforfavicon.png",
    apple: "/logoforfavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
