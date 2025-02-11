import type { Metadata } from "next";
import "./globals.css";
import "../../components/Services/services.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbox";

export const metadata: Metadata = {
  title: "Magical Continent Ltd",
  description: "Want to find your dreamy holidays? You are in the right place!",
  icons: {
    icon: "/7favicon.png", // Path to the favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="overflow-x-hidden">
      <head>
        {/* Manually add the favicon link */}
        <link rel="icon" href="/7favicon.png" />
      </head>
      <body>
        <div className="flexCenter flex-col">
          <Navbar />
          <main className="relative overflow-x-hidden w-[100vw] lg:w-full">
            {children}
          </main>
          <Chatbot/>
          <Footer />
        </div>
      </body>
    </html>
  );
}