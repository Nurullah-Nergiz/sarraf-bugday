import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: {
      default: "Alpaslan Buğday İnşaat",
      template: "%s | Alpaslan Buğday İnşaat",
   },
   description: {
      default:
         "Alpaslan Buğday İnşaat, modern mimari ve yüksek yaşam standartlarına sahip lüks konut projeleri geliştiren lider bir inşaat firmasıdır.",
   },
   keywords: [
      "Alpaslan Buğday İnşaat",
      "inşaat",
      "lüks yaşam alanları",
      "konut projeleri",
      "inşa",
   ],

   openGraph: {
      title: "Alpaslan Buğday İnşaat | Lüks Yaşam Alanları",
      description:
         "Modern mimari ve yüksek yaşam standartlarına sahip lüks konut projeleri.",
      url: "https://sarraf-bugday.vercel.app",
      siteName: "Alpaslan Buğday İnşaat",
      locale: "tr_TR",
      type: "website",
      images: [
         {
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Alpaslan Buğday İnşaat",
         },
      ],
   },

   robots: {
      index: true,
      follow: true,
   },

   icons: {
      icon: "/favicon.ico",
   },
};

export default function RootLayout({ children }) {
   console.clear();

   return (
      <html lang="tr">
         <body
            className={`${geistSans.variable} ${geistMono.variable} h-full flex flex-col `}>
            <Header />
            <section className="flex-1 p-4">{children}</section>
            <Footer />

            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                     "@context": "https://schema.org",
                     "@type": "ConstructionCompany",
                     name: "Alpaslan Buğday İnşaat",
                     description:
                        "Modern mimari ile lüks yaşam alanları inşa eden öncü inşaat firması.",
                     url: "https://sarraf-bugday.vercel.app",
                     logo: "https://sarraf-bugday.vercel.app/logo.png",
                  }),
               }}
            />
         </body>
      </html>
   );
}
