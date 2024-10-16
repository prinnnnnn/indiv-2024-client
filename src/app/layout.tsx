
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrinHub",
  description: "Indiv 2024",
};

const sfDisplayReg = localFont({
  src: "./fonts/SF-Pro-Display-Regular.woff",
  variable: "--font-sf-display-regular",
  weight: "400",
});

const sfDisplayBold = localFont({
  src: "./fonts/SF-Pro-Display-Bold.woff",
  variable: "--font-sf-display-bold",
  weight: "700",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfDisplayReg.variable} ${sfDisplayBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
