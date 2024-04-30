import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/main.css";

export const metadata = {
  title: "Framer Motion",
  description: "Using Framer Motion with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
