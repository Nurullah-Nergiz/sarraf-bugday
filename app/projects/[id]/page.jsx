import { getProjectById } from "@/services/emegen";


export default async function IdPage({ params }) {
   const { id } = await params;
   const project = await getProjectById(id);

   if (!project || project.status === 404) {
      return (
         <div className="container mx-auto px-4 py-8">Project not found</div>
      );
   }

   const images = project.files?.filter((f) => f.type === "image") || [];

   return (
       <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                <p className="mb-6">{project.description}</p>
    
                {images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image) => (
                        <div key={image.id} className="overflow-hidden rounded-lg">
                            <img
                            src={image.url}
                            alt={project.title}
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
                )}
            </div>
       </>
         );
}
