import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Dr. Serena Blake - Licensed Clinical Psychologist | Assignment By Uday",
  description:
    "Transform your mental health journey with Dr. Serena Blake, Licensed Clinical Psychologist in Los Angeles. 8+ years experience in anxiety, relationships, and trauma recovery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
