"use client"
import { motion } from "framer-motion";
import { Home as HomeIcon } from "lucide-react";
import Link from "next/link";
// import Home from "@/app/page";
import React from "react";


const NavLink = motion(Link)

const HomeBtn = ({ className }) => {
    return (
        <NavLink
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{delay:2}}
            

            href="/"
            target='_self'  
            
            // className="w-12 h-12 text-foreground rounded-full flex items-center justify-center
            // custom-bg fixed top-4 left-4 w-fit self-start" 

            className={`
                fixed top-4 left-4 
                w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                text-foreground rounded-full 
                flex items-center justify-center 
                custom-bg self-start 
                ${className}
            `}

            aria-label="Home"
            name="Home"
        >
            <span className="relative w-full h-full p-2 hover:text-accent flex items-center justify-center">
                <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" strokeWidth={1.5}  />
                    
            <span className='peer bg-transparent absolute top-0 left-0 w-full h-full'></span>
            <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 
                bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>
                Home
            </span>
            </span>
        </NavLink>
    )
}

export default HomeBtn;