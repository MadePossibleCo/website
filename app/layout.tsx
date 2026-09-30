import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const description =
  "MadePossible is a technology company that turns hard ideas into working products. Get in touch at contact@madepossible.ca.";

export const metadata: Metadata = {
  title: "MadePossible",
  description,
  openGraph: {
    title: "MadePossible",
    description,
    siteName: "MadePossible",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MadePossible",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#2b34ff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
