import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://iriesessions.com"),
  title: {
    default: "Irie Sessions",
    template: "%s",
  },
  description:
    "A diasporic culture studio turning local scenes into shared global memory through sound, style, image, and gathering.",
  openGraph: {
    title: "Irie Sessions",
    description:
      "A diasporic culture studio turning local scenes into shared global memory through sound, style, image, and gathering.",
    siteName: "Irie Sessions",
    images: [{ url: "/media/irie-paris.jpg", width: 1200, height: 1500 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Irie Sessions",
    description:
      "A diasporic culture studio turning local scenes into shared global memory through sound, style, image, and gathering.",
    images: ["/media/irie-paris.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
