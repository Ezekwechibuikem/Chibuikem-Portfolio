"use client"
import React from "react";
import ProjectLayout from "./ProjectLayout";
import { motion } from "framer-motion";

const container = {
    hidden: {opacity:0},
    show: {
        opacity: 1,
        transition:{
            staggerChildren: 0.3,
            delayChildren: 1.5,
        }
    }
}


const ProjectList = ({ projects }) => {
    return (
        <motion.div 

        variants={container}
        initial="hidden"
        animate="show"
        
        className="w-full max-w-4xl px-4 md:px-8 lg:px-16 mx-auto py-8">
            <div className="grid gap-8">
                {projects.map((project, index) => (
                    <ProjectLayout key={project.id} {...project} />
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectList;