import Link from "next/link";

export default function Nav() {
   return (
      <nav className="p-4 bg-gray-200  fixed right-0 bottom-0 left-0 z-50 sm:relative">
         <ul className="flex justify-evenly items-center gap-4">
            <li>
               <Link className="text-black" href="/">
                  Ana Sayfa
               </Link>
            </li>
            <li>
               <Link className="text-black" href="/projects">
                  Projeler
               </Link>
            </li>
            <li>
               <Link className="text-black" href="/about">
                  Hakkımızda
               </Link>
            </li>
            <li>
               <Link className="text-black" href="/contact">
                  İletişim
               </Link>
            </li>
         </ul>
      </nav>
   );
}
