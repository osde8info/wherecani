import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Where Can I - Top Days Out in Surrey",
  description: "Discover the top 10 days out in Surrey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
