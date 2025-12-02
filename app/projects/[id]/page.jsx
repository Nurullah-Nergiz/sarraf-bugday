import { getProjectById } from "@/services/emegen";
import Image from "next/image";
import ProjectSlider from "@/components/ProjectSlider";

export default async function IdPage({ params }) {
   const { id } = await params;
   const { data: project, status } = await getProjectById(id);

   if (!project || status === 404) {
      return (
         <div className="container mx-auto px-4 py-8">Project not found</div>
      );
   }

   const images = project.files?.filter((f) => f.type === "image") || [];
   const author = project.author[0];

   return (
      <section className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
         <main className="w-full lg:w-2/3">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
               {project.title}
            </h1>

            {images.length > 0 && <ProjectSlider images={images} />}

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
               <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Proje Açıklaması
               </h2>
               <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {project.description}
               </p>
            </div>
         </main>

         <aside className="w-full lg:w-1/3 space-y-6">
            {/* Action Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
               </svg>
               Teklif Ver
            </button>

            {/* Project Details Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-800">
                  Proje Detayları
               </h2>
               <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between items-center">
                     <span className="font-medium text-gray-900">Durum</span>
                     <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                           project.status === "open"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                        }`}>
                        {project.status === "open"
                           ? "Devam Ediyor"
                           : "Tamamlandı"}
                     </span>
                  </li>
                  <li className="flex justify-between items-center">
                     <span className="font-medium text-gray-900">
                        Oluşturulma Tarihi
                     </span>
                     <span>
                        {new Date(project.createdAt).toLocaleDateString(
                           "tr-TR"
                        )}
                     </span>
                  </li>
                  <li className="flex justify-between items-center">
                     <span className="font-medium text-gray-900">
                        Başlangıç Tarihi
                     </span>
                     <span>
                        {new Date(project.startDate).toLocaleDateString(
                           "tr-TR"
                        )}
                     </span>
                  </li>
                  {project.endDate && (
                     <li className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">
                           Bitiş Tarihi
                        </span>
                        <span>
                           {new Date(project.endDate).toLocaleDateString(
                              "tr-TR"
                           )}
                        </span>
                     </li>
                  )}
               </ul>
            </div>

            {/* Author / Contractor Card */}
            {author && (
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-800">
                     Yüklenici Firma
                  </h2>

                  <div className="flex items-center gap-4 mb-4">
                     <div className="relative w-16 h-16 flex-shrink-0">
                        {author.profilePicture ? (
                           <Image
                              src={`http://cdn.emegen.com.tr/${author.profilePicture}`}
                              alt={author.name}
                              fill
                              className="rounded-full object-cover border border-gray-200"
                           />
                        ) : (
                           <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-xl font-bold">
                              {author.name?.charAt(0)}
                           </div>
                        )}
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900 leading-tight">
                           {author.name}
                        </h3>
                        {author.isVerified && (
                           <span className="inline-flex items-center gap-1 text-xs text-blue-600 mt-1">
                              <svg
                                 className="w-3 h-3"
                                 fill="currentColor"
                                 viewBox="0 0 20 20">
                                 <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                 />
                              </svg>
                              Onaylı Hesap
                           </span>
                        )}
                     </div>
                  </div>

                  {author.bio && (
                     <p className="text-sm text-gray-600 mb-4 italic border-l-2 border-gray-200 pl-3">
                        "{author.bio}"
                     </p>
                  )}

                  <div className="space-y-2 text-sm text-gray-600 pt-2">
                     {author.address && (
                        <div className="flex items-start gap-2">
                           <svg
                              className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                           </svg>
                           <span>
                              {author.address.district &&
                                 `${author.address.district}, `}
                              {author.address.city}
                           </span>
                        </div>
                     )}
                     {author.email && (
                        <div className="flex items-center gap-2">
                           <svg
                              className="w-4 h-4 text-gray-400 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                           </svg>
                           <a
                              href={`mailto:${author.email}`}
                              className="hover:text-blue-600 transition-colors truncate">
                              {author.email}
                           </a>
                        </div>
                     )}
                  </div>
               </div>
            )}
         </aside>
      </section>
   );
}

export async function generateMetadata({ params }) {
   const { id } = await params;

   return {
      metadataBase: new URL(
         process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      ),
      title: `Proje Detayları - ${id}`,
      description: `Detaylı bilgi için lütfen bizimle iletişime geçin.`,
      keywords: [
         "alpaslan buğday i̇nşaat",
         "alpaslan buğday i̇nşaat projeler",
         `proje ${id}`,
      ],
      alternate: {
         canonical: `/projects/${id}`,
      },
   };
}
