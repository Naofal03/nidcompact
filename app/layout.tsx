import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NID Compact",
  description: "Daily AI-powered insights on artificial intelligence and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
