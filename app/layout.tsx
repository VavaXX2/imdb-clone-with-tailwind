// Metadata
import type { Metadata } from "next";

// Styles
// These styles apply to every route in the application
import "./globals.css";

// Components
import Header from "@/app/components/server/header";

export const metadata: Metadata = {
  title: "IMDb Clone",
  description: "Tvoje mama voe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Navbar */}
        {/* SearchBox */}
        {children}
      </body>
    </html>
  );
}
