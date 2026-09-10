import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://qr.vlopcas.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Redirecionando | Victor Castro",
  description: "Atalho oficial para os links de Victor Castro.",
  alternates: { canonical: "https://links.vlopcas.dev" },
  robots: { index: false, follow: false },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080b0e" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

