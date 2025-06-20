import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "A simple image gallery page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
