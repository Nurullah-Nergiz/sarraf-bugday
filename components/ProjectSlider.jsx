"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProjectSlider({ images }) {
   const [currentIndex, setCurrentIndex] = useState(0);

   const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   };

   const nextSlide = () => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   };

   if (!images?.length) return null;

   return (
      <div className="relative w-full h-[400px] md:h-[600px] group rounded-xl overflow-hidden mb-8 bg-gray-100">
         <div 
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
         >
            {images.map((image, index) => (
               <div key={index} className="relative w-full h-full flex-shrink-0">
                  <Image
                     src={`http://cdn.emegen.com.tr/${image.name}`}
                     alt={`Project Image ${index + 1}`}
                     fill
                     className="object-cover"
                     priority={index === 0}
                  />
               </div>
            ))}
         </div>
         
         {/* Left Arrow */}
         <button 
            onClick={prevSlide}
            className="hidden group-hover:block absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
         >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
         </button>

         {/* Right Arrow */}
         <button 
            onClick={nextSlide}
            className="hidden group-hover:block absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
         >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
         </button>

         {/* Dots */}
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
               <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                     currentIndex === index ? "bg-white w-6" : "bg-white/50"
                  }`}
               />
            ))}
         </div>
      </div>
   );
}
