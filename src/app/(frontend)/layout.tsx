import type { Metadata } from "next";
import "../globals.css";
import { SanityLive } from '@/sanity/lib/live'
import { Header } from "@/components/Header";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "Layer Caker",
  description: "The sweetest cakes in the world are here at layer caker",
};

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-white min-h-screen">
      <Header />
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </section>
  );
}