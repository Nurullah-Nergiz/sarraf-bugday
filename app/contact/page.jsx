export default function Contact() {
   const list = [
      {
         fullName: "John Doe",
         phone: "+1 234 567 890",
         instagram: "@johndoe",
         twitter: "@johndoe",
         linkedin: "linkedin.com/in/johndoe",
      },
   ];

   return (
      <>
         <section className="h-full flex-col justify-center items-center p-4 text-center">
            <h1 className="text-4xl font-bold mb-8">
               Ekibimiz İle iletişime Geçin
            </h1>
            <div className="inline-flex flex-col lg:flex-row justify-center gap-4">
               {[...list, ...list, ...list].map((person, index) => (
                  <div
                     key={index}
                     className="min-w-3xs p-4 bg-white flex flex-col gap-2 rounded-lg shadow-md">
                     <h2 className="text-2xl font-bold mb-2">
                        {person.fullName}
                     </h2>
                     <p className="mb-1">Telefon: {person.phone}</p>
                     <p className="mb-1">Instagram: {person.instagram}</p>
                     <p className="mb-1">Twitter: {person.twitter}</p>
                     <p className="mb-1">LinkedIn: {person.linkedin}</p>
                     <a href="tel:+" className="px-3 py-2 bg-primary">Ara</a>
                  </div>
               ))}
            </div>
         </section>
      </>
   );
}
