"use client"
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from './NavButton';
import useScreenSize from '../hook/useScreenSize';
import { motion } from "framer-motion";


const container = {
    hidden: {opacity:0},
    show: {
        opacity: 1,
        transition:{
            staggerChildren: 0.3,
        }
    }
}

const Navigation = () => {
    const screenSize = useScreenSize();
    const angleIncrement = 360 / BtnList.length;
    
    // Define responsive radius based on screen size
    const getRadius = () => {
        if (!screenSize) return 350; // Default fallback
        if (screenSize >= 1536) return 350; 
        if (screenSize >= 1024) return 350; 
        if (screenSize >= 768) return 250; 
        if (screenSize >= 640) return 200; 
        return 150; // Small screens
    };

    const radius = getRadius();

    return (
        <div className="w-full fixed h-screen flex items-center justify-center">
           <motion.div 
           
           variants={container}
           initial="hidden"
           animate="show"
           className="w-max flex items-center justify-center relative hover:paused animate-spin-slow group">
                {BtnList.map((btn, index) => {
                    const angleRad = (angleIncrement * index * Math.PI) / 180;
                    const x = radius * Math.cos(angleRad);
                    const y = radius * Math.sin(angleRad);

                    return (
                        <NavButton
                            key={btn.label}
                            x={x}
                            y={y}
                            {...btn}
                        />
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Navigation;





//  import { BtnList } from "@/app/data"
//  import React from "react"
//  import NavButton from './NavButton';

//  const Navigation = () => {
//     const angleIncrement = 360 / BtnList.length;
//     const radius = 350; 
//     return (
//         <div className="w-full fixed h-screen flex items-center justify-center">
//            <div className="w-max flex items-center justify-center relative hover:paused animate-spin-slow group">
//                 {BtnList.map((btn, index) => {
//                     const angleRad = (angleIncrement * index * Math.PI) / 180;
//                     const x = radius * Math.cos(angleRad);
//                     const y = radius * Math.sin(angleRad);

//                     return (
//                         <NavButton
//                             key={btn.label}
//                             x={x}
//                             y={y}
//                             {...btn}
//                         />
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Navigation;

