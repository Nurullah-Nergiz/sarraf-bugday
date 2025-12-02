import { getProjects } from "@/services/emegen";

export default async function sitemap() {
   const baseUrl = "https://sarraf-bugday.vercel.app";
   const defaultSitemap = [
      {
         url: `${baseUrl}/`,
         lastModified: new Date().toISOString(),
         priority: 1.0,
      },
      {
         url: `${baseUrl}/projects`,
         lastModified: new Date().toISOString(),
         priority: 0.8,
      },
      {
         url: `${baseUrl}/about`,
         lastModified: new Date().toISOString(),
         priority: 0.8,
      },
      {
         url: `${baseUrl}/contact`,
         lastModified: new Date().toISOString(),
         priority: 0.8,
      },
   ];

   const { data: fetchedProjects, status } = await getProjects();
   if (status !== 200) {
      console.error("Error fetching projects for sitemap:", fetchedProjects);
      return defaultSitemap;
   }

   return [
      ...defaultSitemap,
      ...fetchedProjects.map((project) => ({
         url: `${baseUrl}/projects/${project._id}`,
         lastModified: project.updatedAt || project.createdAt,
         priority: 0.7,
      })),
   ];
}
