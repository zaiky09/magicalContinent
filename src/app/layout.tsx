import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "boxicons/css/boxicons.min.css";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbox";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://magicalcontinent.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Magical Continent | Luxury Travel, Safaris & Holiday Packages",
    template: "%s | Magical Continent",
  },
  description:
    "Magical Continent Ltd crafts seamless, luxurious safaris, flights, and holiday packages across Africa and beyond. Find your dream getaway.",
  keywords: [
    "Magical Continent",
    "Kenya safaris",
    "travel agency Nairobi",
    "holiday packages",
    "flight ticketing",
    "Africa tours",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/7favicon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Magical Continent",
    title: "Magical Continent | Luxury Travel, Safaris & Holiday Packages",
    description:
      "Seamless, luxurious safaris, flights, and holiday packages across Africa and beyond.",
    images: [
      {
        url: "/images/MaasaiMara.jpg",
        width: 1200,
        height: 630,
        alt: "Magical Continent — safaris and holidays across Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magical Continent | Luxury Travel, Safaris & Holiday Packages",
    description:
      "Seamless, luxurious safaris, flights, and holiday packages across Africa and beyond.",
    images: ["/images/MaasaiMara.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} overflow-x-hidden`}>
      <head>
        {/* Structured Data for the organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Magical Continent",
              alternateName: ["Magical Continent Ltd", "Magical", "Magical Getaways"],
              url: SITE_URL,
              logo: `${SITE_URL}/images/7-removebg-preview.png`,
              image: `${SITE_URL}/images/MaasaiMara.jpg`,
              telephone: "+254732861973",
              email: "magicalcontinentltd@outlook.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kirichwa Gardens Road",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
            }),
          }}
        />
      </head>
      <body>
        <div className="flexCenter flex-col">
          <Navbar />
          <main className="relative overflow-x-hidden w-[100vw] lg:w-full">
            {children}
          </main>
          <Chatbot />
          <Footer />
        </div>
      </body>
    </html>
  );
}
