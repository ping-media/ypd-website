import type { Metadata } from "next";
import { Lato, Poppins, Red_Rose } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/other/navbar/Navbar";
import Footer from "@/components/other/footer/Footer";
import CookieConsent from "@/components/other/CookieConsent";
import ContactFloating from "@/components/other/ContactFloating";
import PinGate from "@/components/PinGate";

// Custom fonts
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const redRose = Red_Rose({
  variable: "--font-rose",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "YPD",
  description: "An AI Edtech Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${lato.variable} ${poppins.variable} ${redRose.variable} antialiased`}
      >
        <PinGate>
          <Navbar />
          {children}

          <Footer />
          {/* <CookieConsent /> */}

          <ContactFloating />
        </PinGate>
      </body>
    </html>
  );
}
