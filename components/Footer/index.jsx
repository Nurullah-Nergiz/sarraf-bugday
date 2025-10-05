export default function Footer() {
   return (
      <footer className="container mx-auto p-4 pb-16 sm:pb-4 flex items-center justify-between text-sm">
         <div>
            &copy; {new Date().getFullYear()} Sarraf Buğday İnşaat. Tüm hakları
            saklıdır.
         </div>
         <div>{/* Sosyal Medya İkonları */}</div>
      </footer>
   );
}
