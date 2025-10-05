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
   title: "Sarraf Buğday İnşaat ",
   description:
      "Sarraf Buğday İnşaat - Kaliteli ve Güvenilir İnşaat Hizmetleri",
   icons: {
      icon: "/favicon.ico",
   },
};

export default function RootLayout({ children }) {
   console.clear();

   return (
      <html lang="tr">
         <body className={`${geistSans.variable} ${geistMono.variable}  `}>
            <section className="h-full flex flex-col">
               <Header />
               <main className="flex-1 p-4">{children}</main>
               <Footer />
            </section>
         </body>
      </html>
   );
}
