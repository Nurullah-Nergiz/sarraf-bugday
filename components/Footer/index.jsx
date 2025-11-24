import Link from "next/link";

export default function Footer() {
   return (
      <footer className="bg-gray-900 text-white py-12 mt-12">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="mb-4 md:mb-0 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">
                     Alpaslan Buğday İnşaat
                  </h3>
                  <p className="text-gray-400 text-sm">
                     Kaliteli yapılar, güvenli yarınlar.
                  </p>
               </div>

               <div className="flex space-x-6">
                  <a
                     href="https://emegen.com.tr/@alpaslan-bugday-insaat"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-400 hover:text-white transition-colors duration-300">
                     Emegen
                  </a>
                  <a
                     href="https://www.instagram.com/alpsayapi/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                     Instagram
                  </a>
               </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
               &copy; {new Date().getFullYear()} Alpaslan Buğday İnşaat. Tüm
               hakları saklıdır.
            </div>
         </div>
      </footer>
   );
}
