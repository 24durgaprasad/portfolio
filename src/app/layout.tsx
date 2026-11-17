import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});
const hand = Caveat({ variable: "--font-hand", subsets: ["latin"], weight: ["500", "700"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: "Durga Prasad Vulla — Full-Stack Developer",
  description:
    "Full-stack developer from Visakhapatnam building MERN, Next.js, .NET and Python apps for real businesses.",
  openGraph: {
    title: "Durga Prasad Vulla — Full-Stack Developer",
    description: "I build websites that make your competitors' developers nervous.",
    images: ["/me/durga.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@buildwithvdp" },
};

export const viewport: Viewport = { themeColor: "#fdfdfb" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${hand.variable} ${mono.variable}`}
    >
      <body className="ca-grain min-h-screen antialiased">{children}</body>
    </html>
  );
}
