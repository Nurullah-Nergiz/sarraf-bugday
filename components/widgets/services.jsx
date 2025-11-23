export default function ServiceList({ children, initialData = [] }) {
   const services = initialData;
   // console.log(services);
   

   return (
      <>
         <div className="widgets">
            <h3 className="text-2xl font-bold mb-6">Hizmetler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
               {services.map((service) => (
                  <div
                     key={service._id}
                     className="group bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out flex items-start gap-4 cursor-pointer"
                  >
                     <div className=" flex-shrink-0 p-3 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <i className={`w-8 h-8 bx ${service.icon.url} text-2xl`}></i>
                     </div>
                     <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                           {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                           {service.description}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}
