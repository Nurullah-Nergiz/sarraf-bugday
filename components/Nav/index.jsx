import Link from "next/link";

export default function Nav() {
   return (
      <nav className="p-4 sm:px-8  border-t fixed right-0 bottom-0 left-0 z-50 sm:sticky sm:top-0">
         <div className="max-w-4xl mx-auto">
            <ul className="flex justify-evenly sm:justify-center items-center gap-8 text-sm font-medium text-gray-600">
               <li>
                  <Link className="hover:text-black transition-colors py-2" href="/">
                     Ana Sayfa
                  </Link>
               </li>
               <li>
                  <Link className="hover:text-black transition-colors py-2" href="/projects">
                     Projeler
                  </Link>
               </li>
               <li>
                  <Link className="hover:text-black transition-colors py-2" href="/about">
                     Hakkımızda
                  </Link>
               </li>
               <li>
                  <Link className="hover:text-black transition-colors py-2" href="/contact">
                     İletişim
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}
