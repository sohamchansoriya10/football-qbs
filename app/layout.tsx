import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "QB Compass | 2026 NFL Starter Comparison",
  description:
    "A Shadcn-styled NFL quarterback comparison lab using a Supabase-ready 2026 Week 1 starter dataset."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
