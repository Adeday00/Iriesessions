import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import { BasketProvider } from "@/components/commerce/BasketProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Irie Sessions",
    template: "%s | Irie Sessions",
  },
  description:
    "A diasporic culture studio turning local scenes into shared global memory through sound, style, image, and gathering.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Irie Sessions",
    description:
      "A diasporic culture studio turning local scenes into shared global memory through sound, style, image, and gathering.",
    siteName: "Irie Sessions",
    images: [{ url: "/media/irie-paris.jpg", width: 1280, height: 1600 }],
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="motion-safe min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <SmoothScroll />
        <BasketProvider>{children}</BasketProvider>
      </body>
    </html>
  );
}
