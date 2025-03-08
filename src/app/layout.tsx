import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import MainLayout from "@/components/MainLayout";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devstack Blogs",
  description: "A blog about web development",
  icons: "/icon.png",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${workSans.variable}`}>
        <MainLayout>{children}</MainLayout>
        <SanityLive />
        {(await draftMode()).isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
