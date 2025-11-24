import Image from "next/image";
import Link from "next/link";

export default function ProjectGallery({ initialData = [] }) {
   return (
      <>
         <div className="">
            <h4 className="text-3xl font-bold mb-4">Projeler</h4>
            <ul className="w-full flex flex-col sm:flex-row gap-4 overflow-x-auto ">
               {initialData.map((project, i) => (
                  <li
                     className="group min-w-80 sm:w-80 flex flex-col gap-2 "
                     key={`project-${i}`}>
                     <ProjectGalleryItem project={project} />
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
}

export const ProjectGalleryItem = ({ project = {} }) => (
   <Link
      href={`/projects/${project._id}`}
      className="flex flex-col gap-2 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer">
      <div className="overflow-hidden rounded-lg">
         <Image
            src={`http://cdn.emegen.com.tr/${project.files[0].name}`}
            alt="Alpaslan Buğday İnşaat Logo"
            className="!w-80 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            // fill
            width={320}
            height={192}
         />
      </div>
      <div className="px-4 pb-4 flex flex-col gap-2">
         <b className="text-xl font-semibold whitespace-nowrap text-ellipsis group-hover:text-blue-600 transition-colors">
            {project.title}
         </b>
         <p className="text-xs text-gray-700 h-20 overflow-hidden text-ellipsis">
            {project.description}
         </p>
      </div>
   </Link>
);
