import TextType from "@/components/animations/text-type";
import Image from "next/image";

export default function Home() {
   return (
      <section className="container mx-auto sm:p-4 flex flex-col gap-4">
         {/* Hero section with a background image */}
         {/* <div className="relative rounded-lg overflow-hidden my-8 bg-[url('/bg.png')] bg-cover bg-center h-96 flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 text-center p-4">
               <h1 className="text-5xl font-extrabold mb-4">
                  Alpaslan Buğday İnşaat
               </h1>
               <p className="text-xl">Hayallerinizi İnşa Ediyoruz</p>
            </div>
         </div> */}
         <div className="mins-h-[30rem] h-96 relative overflow-hidden">
            <img
               src={
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBSnPdWS5_zNixyucU8jBAWhpDE39D6armVzF1-FDSDup8jgBzeVd1bIevNzsPuca_IDOBGXXFyAwvZ2uNxho4aUVFo02FkwKxC0ReOOOxaZUJF_Z-eccYfXYcF0DlMq8oXKUzy4cNSXCLcTVTNeZpc9BLQsOBWDdEjj6mv22XyzYUOGcxbWfAzoFaWIX78sJaygHXCFc63_m-oW1DtFpQbBtjppWa80x7gf0oUhsjPFuJUNPQwsJApcNZbCg59RUXwPPAglHsqCq8"
               }
               alt="Alpaslan Buğday İnşaat Banner"
               className="w-full h-96 rounded-lg shadow-md"
               loading="eager"
            />
            <div className="flex flex-col items-center justify-center gap-4 text-white absolute top-0 right-0 bottom-0 left-0 z-10">
               <h1 className="w-full text-center text-3xl md:text-5xl font-extrabold whitespace-nowrap">
               Geleceği İnşa Ediyoruz
                  {/* <TextType
                     text={[
                        "Geleceği İnşa Ediyoruz",
                        "Hayallerinizi Gerçekleştiriyoruz",
                        "Kalite ve Güvenin Adı",
                     ]}
                     typingSpeed={75}
                     pauseDuration={1500}
                     showCursor={true}
                     cursorCharacter="|"
                  /> */}
               </h1>
               <div className="w-3/4 text-lg md:text-xl text-center max-w-2xl mx-auto ">
                  {/* Yüksek kaliteli ve yenilikçi projelerle geleceğin yaşam
                  alanlarını bugünden tasarlıyoruz. */}
                  <TextType
                     text={[
                        "Yüksek kaliteli ve yenilikçi projelerle geleceğin yaşam alanlarını bugünden tasarlıyoruz.",
                        "Müşteri memnuniyetini ön planda tutarak, her projede mükemmelliği hedefliyoruz.",
                        "Sürdürülebilir ve çevre dostu çözümlerle, yaşanabilir şehirler inşa ediyoruz.",
                     ]}
                     typingSpeed={50}
                     pauseDuration={2000}
                     showCursor={false}
                     cursorCharacter="|"
                  />
               </div>
            </div>
         </div>
         <div className="my-8 flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
               Alpaslan Buğday İnşaat
            </h2>
            <p class="text-lg font-normal text-gray-700 dark:text-gray-400">
               Alpaslan Buğday İnşaat, inşaat sektöründe yenilikçi ve kaliteli
               projeler geliştiren lider bir firmadır. Müşteri memnuniyetini ön
               planda tutarak, modern yaşam alanları yaratmayı hedefliyoruz.
            </p>
         </div>
         <div className="">
            <h3 className="text-3xl font-bold mb-4">Projeler</h3>
            <ul className="w-full flex flex-col sm:flex-row gap-4 overflow-x-auto py-4">
               {[1, 2, 3, 4, 5].map((_, i) => (
                  <li
                     className="min-w-80 sm:w-80 p-4 flex flex-col gap-2 bg-accent rounded-lg shadow-lg"
                     key={`project-${i}`}>
                     <Image
                        src={`https://lipsum.app/random/1600x900?random=${i}`}
                        alt="Alpaslan Buğday İnşaat Logo"
                        className="!w-80 object-cover rounded"
                        loading="lazy"
                        // fill
                        width={320}
                        height={192}
                     />
                     <b className="text-xl font-semibold whitespace-nowrap">
                        Örnek Proje
                     </b>
                     <p className="text-xs text-gray-700">
                        Modern mimari ve yüksek kalite standartlarıyla
                        geliştirilen konut projesi.
                     </p>
                  </li>
               ))}
            </ul>
         </div>

         {/* Other content for the home page */}
         {/* <div className="text-center my-16">
            <h2 className="text-3xl font-bold mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
               Modern mimari, kaliteli malzemeler ve uzman işçilik ile anahtar
               teslim projeler sunuyoruz.
            </p>
         </div> */}
      </section>
   );
}
