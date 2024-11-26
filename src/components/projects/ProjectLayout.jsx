import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y:100 },
  show: { opacity: 1, y:0 }
}

const NavLink = motion(Link);

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <NavLink
      variants={item} 
      href={demoLink}
      className="group block w-full max-w-[95vw] md:max-w-[85vw] lg:max-w-[75vw] xl:max-w-[65vw] 
        rounded-lg p-4 sm:p-6 custom-bg 
        hover:shadow-lg transition-all duration-300 
        border border-muted/20 hover:border-muted/40"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 w-full">
        <div className="flex-grow space-y-2 min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground truncate">
              {name}
            </h2>
            <ArrowUpRight 
              className="w-4 h-4 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 text-muted-foreground flex-shrink-0" 
            />
          </div>
          <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 pr-4">
            {description}
          </p>
        </div>

        <div className="hidden sm:block h-12 w-px bg-muted/30 flex-shrink-0" />
        
        <div className="text-sm sm:text-base text-muted-foreground whitespace-nowrap flex-shrink-0 min-w-[120px]">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </div>
      </div>
    </NavLink>
  );
};

export default ProjectLayout;


// // import { Link } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// const ProjectLayout = ({name, description, date, demoLink}) => {
//     return (
//         <Link 
//             href={demoLink}
//             className="text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 
//             custom-bg"
//             target="_blank" 
//             rel="noopener noreferrer" 
//             >
            
//             <div className="flex items-center justify-center space-x-2">
//                 <h2 className="text-foreground">{name}</h2>
//                 <p className="text-muted">{description}</p>
//             </div>
//             <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" /> 
//             <p className="text-muted sm:text-foreground">{new Date(date).toDateString()}</p>
//         </Link>
//     )
// }

// export default ProjectLayout