import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Unbreakable Path - A Guide to Discipline and Success",
  description: "Master discipline, focus, and the fundamental rules that lead to extraordinary success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
