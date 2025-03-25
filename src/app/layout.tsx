import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Layer Caker",
  description: "The sweetest cakes in the world are here at layer caker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
