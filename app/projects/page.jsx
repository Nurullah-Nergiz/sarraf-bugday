import { ProjectGalleryItem } from "@/components/widgets/projects";
import { getProjects } from "@/services/emegen";

export default async function Projects() {
   const projectsList = await getProjects();

   console.clear();

   return (
      <section className="container mx-auto p-6 max-w-5xl">
         <h1 className="text-4xl font-extrabold mb-6">Projelerimiz</h1>
         <h2 className="text-lg text-gray-700 mb-8">
            Devam eden ve tamamlanan çalışmalarımızdan bir seçki. Detaylı bilgi
            için lütfen bizimle iletişime geçin.
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectsList.data.length > 0 ? (
               projectsList.data.map((p, i) => {
                  //  console.log(p.files);

                  const imgUrl = p.files.find((f) =>
                     f.type.startsWith("image")
                  )?.name;

                  return (
                     <div
                        key={p._id + i}
                        className="w-full sm:w-72 border rounded-lg shadow-md transition hover:shadow-lg overflow-hidden">
                        <ProjectGalleryItem project={p} />
                     </div>
                  );
               })
            ) : (
               <p>Proje bulunamadı.</p>
            )}
         </div>
      </section>
   );
}

export const metadata = {
   metadataBase: new URL(
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
   ),
   title: "Projelerimiz",
   description: "",
   keywords: ["alpaslan buğday i̇nşaat", "alpaslan buğday i̇nşaat projeler"],
   alternate: {
      canonical: "/projects",
   },
};
