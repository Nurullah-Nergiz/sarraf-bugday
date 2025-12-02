export default function Contact() {
   return (
      <section className="py-12">
         <div className="mx-auto max-w-6xl px-4">
            <header className="mb-10 text-center">
               <h1 className="text-4xl font-bold tracking-tight">
                  Ekibimizle İletişime Geçin
               </h1>
               <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                  Sorularınız için bize ulaşın, sosyal medya hesaplarımızı takip
                  edin veya konumumuzu haritada görüntüleyin.
               </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-2">
               <div className="space-y-6">
                   {/* İletişim Bilgileri  */}
                  <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                     <h2 className="mb-4 text-lg font-semibold">
                        İletişim Bilgileri
                     </h2>
                     <div className="space-y-3 text-sm">
                        <a
                           href="tel:+905555555555"
                           className="group flex items-center gap-3 rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-neutral-200 hover:bg-neutral-50 dark:hover:border-neutral-800 dark:hover:bg-neutral-800"
                           aria-label="Telefon ile ara">
                           <i
                              className="bx bx-phone h-5 w-5 text-blue-600"
                              aria-hidden="true"></i>
                           <span className="text-neutral-800 dark:text-neutral-200">
                              +90 555 555 55 55
                           </span>
                        </a>
                        <a
                           href="mailto:info@ornek.com"
                           className="group flex items-center gap-3 rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-neutral-200 hover:bg-neutral-50 dark:hover:border-neutral-800 dark:hover:bg-neutral-800"
                           aria-label="E-posta gönder">
                           <i
                              className="bx bx-envelope h-5 w-5 text-rose-600"
                              aria-hidden="true"></i>
                           <span className="text-neutral-800 dark:text-neutral-200">
                              info@ornek.com
                           </span>
                        </a>
                     </div>
                  </div>
               </div>

               <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                  {/* Konum */}
                  <div className="space-y-3">
                     <h2 className="text-lg font-semibold">Konum</h2>
                     {/* <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Koordinatlar: 37.569912, 32.778212
                     </p> */}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                     <a
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                        href="https://www.google.com/maps/dir/?api=1&destination=37.569912,32.778212"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Google Haritalar üzerinden yol tarifi al">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5"
                           viewBox="0 0 24 24"
                           fill="currentColor">
                           <path d="M12 2l3 7h7l-5.5 4.1L18 21l-6-4-6 4 1.5-7.9L2 9h7z" />
                        </svg>
                        Yol Tarifi Al
                     </a>
                     <a
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-neutral-800 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800"
                        href="https://www.google.com/maps?q=37.569912,32.778212"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Konumu Google Haritalar'da aç">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5"
                           viewBox="0 0 24 24"
                           fill="currentColor">
                           <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
                        </svg>
                        Haritada Aç
                     </a>
                  </div>
                  <iframe
                     title="Konum Haritası"
                     src="https://www.google.com/maps?q=37.569912,32.778212&z=14&output=embed"
                     className="h-[380px] w-full md:h-[460px]"
                     loading="lazy"
                     allowFullScreen
                     referrerPolicy="no-referrer-when-downgrade"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export const metadata = {
   title: "İletişim",
   description: "Bizimle iletişime geçin",
};
