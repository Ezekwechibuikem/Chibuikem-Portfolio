"use client"
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"
import Form from '@/components/contact/Form';

export default function Contact() {
  return (
    <>
      <Image 
        src={bg} 
        alt="background-image" 
        className="fixed top-0 left-0 w-screen h-screen object-cover object-center opacity-25 -z-50"
        priority
      />

      <article className="relative w-full min-h-screen py-8 flex flex-col items-center justify-center space-y-8 px-4">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 w-full sm:w-[90%] md:w-[85%] lg:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl capitalize">
            Summon The Wizard
          </h1>
          
          <p className="text-center font-light text-lg sm:text-xl md:text-2xl lg:text-4xl max-w-[90%] sm:max-w-[85%] md:max-w-[80%]">
            Together, let&apos;s conjure up some digital magic that will leave your users saying, &quot;How did they do that?&quot; 
            <span className="block mt-2">
              (Don&apos;t worry, I won&apos;t reveal all my secrets - a wizard must keep some tricks up his sleeve, after all! 🎩✨)
            </span>
          </p>
        </div>

        <Form />
      </article>
    </>
  );
}