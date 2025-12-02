import TextType from "@/components/animations/text-type";
import ProjectGallery from "@/components/widgets/projects";
import ServiceList from "@/components/widgets/services";
import { getProjects, getServices } from "@/services/emegen";

export default async function Home() {
   const [
      servicesResponse,
      projectsResponse,
   ] = await Promise.all([
      getServices(),
      getProjects(),
   ]);
   
   

   return (
      <section className="container mx-auto sm:p-4 flex flex-col gap-4">
         {/* Hero section with a background image */}
         <div className="mins-h-[30rem] h-96 relative overflow-hidden group rounded-lg shadow-md">
            <img
               src={
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBSnPdWS5_zNixyucU8jBAWhpDE39D6armVzF1-FDSDup8jgBzeVd1bIevNzsPuca_IDOBGXXFyAwvZ2uNxho4aUVFo02FkwKxC0ReOOOxaZUJF_Z-eccYfXYcF0DlMq8oXKUzy4cNSXCLcTVTNeZpc9BLQsOBWDdEjj6mv22XyzYUOGcxbWfAzoFaWIX78sJaygHXCFc63_m-oW1DtFpQbBtjppWa80x7gf0oUhsjPFuJUNPQwsJApcNZbCg59RUXwPPAglHsqCq8"
               }
               alt="Alpaslan Buğday İnşaat Banner"
               className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
               loading="eager"
            />
            <div className="flex flex-col items-center justify-center gap-4 text-white absolute top-0 right-0 bottom-0 left-0 z-10 bg-black/30 group-hover:bg-black/20 transition-colors duration-500">
               <h1 className="w-full text-center text-3xl md:text-5xl font-extrabold whitespace-nowrap drop-shadow-lg">
                  Geleceği İnşa Ediyoruz
               </h1>
               <div className="w-3/4 text-lg md:text-xl text-center max-w-2xl mx-auto ">
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
            <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
               Alpaslan Buğday İnşaat, inşaat sektöründe yenilikçi ve kaliteli
               projeler geliştiren lider bir firmadır. Müşteri memnuniyetini ön
               planda tutarak, modern yaşam alanları yaratmayı hedefliyoruz.
            </p>
         </div>
         <ServiceList initialData={servicesResponse.data} />
         <ProjectGallery
            initialData={projectsResponse.data}
         />

      </section>
   );
}

export const metadata = {
   title: "Ana Sayfa",
   description:
      "Alpaslan Buğday İnşaat, modern mimari ve yüksek yaşam standartlarına sahip lüks konut projeleri geliştiren lider bir inşaat firmasıdır.",
   keywords: [
      "Alpaslan Buğday İnşaat",
      "inşaat",
      "lüks yaşam alanları",
      "konut projeleri",
      "inşa",
   ],
   alternate: {
      canonical: "/",
   },
};