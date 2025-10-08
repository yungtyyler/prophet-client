import React from "react";
import { Sidebar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Prophet",
  description: "Sports predictions dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
