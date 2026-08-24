import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSS Shakha Overview",
  description: "Bhagwa-themed directory and map view for shakha locations across India."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
