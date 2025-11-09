
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || "https://localhost:3000"),
  title: "RE/MAX Vantagem - Casa Nova, Segurança Total",
  description: "Queres uma casa nova mas ainda tens que vender a atual? Recebe a segurança e transparência que procuras com a RE/MAX Vantagem.",
  keywords: "remax, vantagem, casa nova, vender casa, comprar casa, imobiliário, portugal, AMI 7771",
  authors: [{ name: "RE/MAX Vantagem" }],
  openGraph: {
    title: "RE/MAX Vantagem - Casa Nova, Segurança Total",
    description: "Queres uma casa nova mas ainda tens que vender a atual? Recebe a segurança e transparência que procuras.",
    url: "/",
    siteName: "RE/MAX Vantagem",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RE/MAX Vantagem - Casa Nova, Segurança Total",
    description: "Queres uma casa nova mas ainda tens que vender a atual? Recebe a segurança e transparência que procuras.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
