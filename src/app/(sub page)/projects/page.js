"use client"
import Image from "next/image";
import bg from "../../../../public/background/New-projects-bg.png"
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from '@/components/models/Staff';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <Image 
        src="/background/New-projects-bg.png"
        alt="background-image"
        className="fixed top-0 left-0 w-full h-full object-cover object-center opacity-25 -z-50"
        width={1920}
        height={1080}
        priority
      />
      
      {/* Main Content */}
      <div className="relative z-10">
        <ProjectList projects={projectsData} />
      </div>

      {/* 3D Model */}
      <div className="hidden lg:block fixed top-20 -left-20 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </div>
  );
};

export default Home;


// export default function Home() {
//   return (
//     <>
//       <Image src={bg} alt="background-image" className="fixed top-0 left-0 w-screen h-screen object-cover object-center opacity-25 -z-50"/>
      
//         <ProjectList projects={projectsData} />

//         <div className="flex items-center justify-center fixed top-20 -left-20 h-screen">
//         <RenderModel>
//           <Staff />
//         </RenderModel>
//         </div>
        
//     </>
//   );
// }
