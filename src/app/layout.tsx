import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "St Georges TTC",
  description: "St Georges Table Tennis Club - A local table tennis club based in Cambridge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-grey"}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
