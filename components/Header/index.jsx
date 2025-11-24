import Link from "next/link";
import Nav from "../Nav";

export default function Header() {
   return (
      <header className="border-b border-current">
         <section className="container mx-auto p-4 flex items-center justify-between">
            <Link href="/"
               className="flex items-center gap-3"
            >
               <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
               <p
                  className="text-sm font-semibold text-gray-600"
               >Alpaslan Buğday İnşaat</p>
            </Link>
            <Nav />
         </section>
      </header>
   );
}
