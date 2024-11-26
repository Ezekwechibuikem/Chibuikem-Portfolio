"use client"
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
    return (
        <motion.div
            initial={{
                opacity: 0.10,
                scale: 0.2
            }}
            whileInView={{
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1,
                
                scale: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                opacity: {
                    duration: 0.4,       
                    ease: "linear",      
                }
            }}
            viewport={{ 
                once: true,
                amount: 0.5             
            }}

            className={clsx(
                "custom-boarder p-4 sm:p-6 md:p-8 rounded-xl flex items-center justify-center space-y-4 sm:space-y-6",
                className)}>
            {children}
        </motion.div>
    );
}

export default ItemLayout;