import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnowEventDecor - Wedding, Parties, Floral Decor in California",
  description: "SnowEventDecor provides exceptional wedding, parties, and floral decor services in California, including Sacramento, San Jose, Napa, and Lake Tahoe. Make your events unforgettable with our professional decor services.",
  keywords: "SnowEventDecor, wedding decor, party decor, floral decor, California, Sacramento, San Jose, Napa, Lake Tahoe, event decor",
  viewport: "width=device-width, initial-scale=1.0",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen">
        {children}
      </body>
    </html>
  );
}
