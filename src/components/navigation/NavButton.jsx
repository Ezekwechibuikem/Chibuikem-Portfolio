import { Home, X, User, Palette, Phone, Github, Linkedin, Twitter, NotebookText } from 'lucide-react';
import Link from 'next/link';
import React from "react";
import { motion } from "framer-motion";

const getIcon = (icon) => {
    switch (icon) {
        case "home":
            return <Home size={24} strokeWidth={1.5} />
        case "about":
            return <User size={24} strokeWidth={1.5} />
        case "projects":
            return <Palette size={24} strokeWidth={1.5} />
        case "contact":
            return <Phone size={24} strokeWidth={1.5} />
        case "github":
            return <Github size={24} strokeWidth={1.5} />
        case "linkedin":
            return <Linkedin size={24} strokeWidth={1.5} /> 
        case "twitter":
            return <Twitter size={24} strokeWidth={1.5} />
        case "resume":
            return <NotebookText size={24} strokeWidth={1.5} />   

        default:
            return <Home size={24} strokeWidth={1.5} />
    }
}

const item = {
    hidden: { scale: 0 },
    show: { scale: 1 }
}

const NavLink = motion(Link);

const NavButton = ({x, y, label, link, icon, newTab}) => {
    return (
        <div className="absolute cursor-pointer z-50" 
            style={{transform: `translate(${x}px, ${y}px)`}}
        >
            <NavLink 
                variants={item}
                href={link} 
                target={newTab ? '_blank' : '_self'}  
                className="w-12 h-12 text-foreground rounded-full flex items-center justify-center
                custom-bg"

                aria-label={label} 
                name={label}
            >
                <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:paused group-hover:text-accent">
                    {getIcon(icon)}
                <span className='peer bg-transparent absolute top-0 left-0 w-full h-full'></span>
                <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 
                    bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>
                {label}
                </span>
               
                </span>
                
            
            </NavLink>
        </div>
    )
}

export default NavButton