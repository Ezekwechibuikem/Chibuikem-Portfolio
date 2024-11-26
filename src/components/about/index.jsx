"use client"
import React from "react";
import ItemLayout from "./ItemLayout";



const AboutDetails = () => {
    const startYear = 2019; 
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear;

    return (
        <section className="-mt-10 sm:-mt-15 md:-mt-20 w-full px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full">
                <ItemLayout className={'col-span-12 lg:col-span-8 flex-col items-start'}>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left w-full capitalize text-accent">
                        Digital Sorcerer Supreme
                    </h2>
                    <p className="font-light text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed">
                        Picture me as your friendly neighborhood code wizard, 
                        armed with a keyboard instead of a wand! My spellbook? 
                        Pure JavaScript magic. I've mastered the ancient scrolls of React.js and Next.js, 
                        using them to conjure up websites so smooth, they make butter jealous. 
                        Think of me as a digital architect who builds portals (aka websites) that even Doctor Strange would approve of. 
                        I'm that developer who turns coffee into code and bugs into features (okay, mostly!). 
                        When I'm not brewing up responsive designs with my Jamstack cauldron, I'm probably debugging in my digital workshop, 
                        making sure every pixel is as perfect as a unicorn's mane. 
                        Need your web presence to be faster than a ninja and more secure than a dragon's vault? 
                        That's my specialty! Let's create some digital magic together that'll make your users say 
                        "How did they do that?" (Don't worry, I won't reveal all my secrets... just most of them! 🎩✨)
                    </p>
                </ItemLayout>
                <div className="col-span-12 md:col-span-4 flex flex-col gap-4 sm:gap-6 md:gap-8 h-full">
                    <ItemLayout className={'h-1/2 text-accent'}>
                        <p className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-8xl w-full text-left">
                        {yearsOfExperience}+ <sub className="font-semibold text-xs sm:text-sm md:text-base">years of experience</sub>
                        </p>
                    </ItemLayout>
                    <ItemLayout className={'h-1/2 text-accent'}>
                        <img 
                            src="https://visitcount.itsvg.in/api?id=Ezekwechibuikem&label=Views&color=12&icon=5&pretty=false" 
                            alt="Visit Count"
                            className="h-12 sm:h-16 md:h-20"
                        />
                    </ItemLayout>
                </div>
                <ItemLayout className={'col-span-12 sm:col-span-6 lg:col-span-4 !p-0'}>
                    <img className="w-full h-auto" 
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ezekwechibuikem&show_icons=true&icon_color=FFFFFF&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&hide_border=true" 
                        alt="Ezekwechibuikem" loading="lazy" 
                    />
                </ItemLayout>
                <ItemLayout className={'col-span-12 sm:col-span-6 lg:col-span-8 !p-0'}>
                    <img className="w-full h-auto" 
                        src="https://github-readme-stats.vercel.app/api?username=Ezekwechibuikem&show_icons=true&icon_color=FFFFFF&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&hide_border=true" 
                        alt="Ezekwechibuikem" loading="lazy" 
                    />
                </ItemLayout>
                <ItemLayout className={'col-span-12'}>
                    <img className="w-full h-auto" src="https://skillicons.dev/icons?i=js,html,css,python,cs,c,react,angular,threejs,django,nodejs,npm,mysql,postgres,linux,ubuntu,vscode,visualstudio,gitlab,nginx,powershell,bootstrap,wordpress,jquery,figma,ps" 
                        alt="Ezekwechibuikem" loading="lazy" 
                    />
                </ItemLayout>
                <ItemLayout className={'col-span-12 md:col-span-6 !p-0'}>
                    <img className="w-full h-auto" 
                        src="https://github-readme-streak-stats.herokuapp.com?user=Ezekwechibuikem&theme=dark&hide_border=true&date_format=M%20j%5B%2C%20Y%5D&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B&stroke_width=5&stroke=FEFE5B" 
                        alt="Ezekwechibuikem" 
                        loading="lazy" 
                    />
                </ItemLayout>
                <ItemLayout className={"col-span-12 md:col-span-6 !p-0"}>
                    <a href="https://github.com/Ezekwechibuikem/vacation-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    >
                    <img
                        className="w-full h-auto"
                        src="https://github-readme-stats.vercel.app/api/pin/?username=Ezekwechibuikem&repo=vacation-tracker&theme=transparent&hide_border=true&description_lines_count=true"
                        alt="Vacation Tracker"
                        loading="lazy"
                    />
                    </a>
                </ItemLayout>
            </div>
        </section>
    )
}

export default AboutDetails