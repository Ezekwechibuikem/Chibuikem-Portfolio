"use client"
import Image from "next/image";
import bg from "../../../../public/background/about-background.png"

import RenderModel from "@/components/RenderModel";
import HatModel from '@/components/models/HatModel';
import HomeBtn from "@/components/HomeBtn";
import AboutDetails from "@/components/about";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <Image 
        src={bg} 
        alt="background-image"
        priority sizes="100vw" 
        className="fixed top-0 left-0 w-screen h-screen object-cover object-center opacity-25 -z-50"
      />

      <div className="w-full h-[35vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      
      <div className="w-full flex flex-col items-center justify-center -mt-8 sm:-mt-16 md:-mt-20 py-2 px-4">
        <div className="w-full max-w-4xl text-center px-4 sm:px-6 md:px-8 my-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-accent">
            WHO AM I
          </h1>
          <p className="font-light text-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            "I'm Ezekwe Chibuikem Bonaventure, the full-stack magician who can make your app disappear from production...
            only to reappear better than ever! With a wave of my keyboard, I conjure up robust and scalable solutions that leave users saying, 'How did they do that?
          </p>
        </div>
      </div>
      <HomeBtn />
      
      {/* AboutDetails - Always at the bottom */}
      <div className="w-full mt-10 py-24">
        <AboutDetails />
      </div>
    </div>
  );
}


// "use client"
// import Image from "next/image";
// import bg from "../../../../public/background/about-background.png"

// import RenderModel from "@/components/RenderModel";
// import HatModel from '@/components/models/HatModel';
// import HomeBtn from "@/components/HomeBtn";
// import AboutDetails from "@/components/about";


// export default function Home() {
//   return (
//     <>
//       <Image src={bg} alt="background-image" className="fixed top-0 left-0 w-screen h-screen object-cover object-center opacity-25 -z-50"/>

//         <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-o">
//         <RenderModel>
//           <HatModel />
//         </RenderModel>
//         </div>

//         <div className="relative w-full h-3/5 xs:h-3/4 sm:h-screen flex flex-col items-center justify-center py-10">
//           <div className="absolute flex flex-col items-center bottom-5 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center sm:top-[60] w-full max-w-3xl px-4">
//             <h1 className="text-6xl font-bold mb-4 text-accent">WHO AM I</h1>
//             <p className="font-light text-foreground text-2xl leading-relaxed">
//             "I'm Ezekwe Chibuikem Bonaventure, the full-stack magician who can make your app disappear from production... 
//                 only to reappear better than ever! With a wave of my keyboard, I conjure up robust and scalable solutions that leave users saying, 'How did they do that?
//             </p>
//           </div>
//         </div>
//         <HomeBtn />
        
//         <AboutDetails />
        
//     </>
//   );
// }
