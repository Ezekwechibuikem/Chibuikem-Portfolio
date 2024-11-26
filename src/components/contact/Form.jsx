"use client"
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';


const container = {
  hidden: {opacity:0},
  show: {
      opacity: 1,
      transition:{
          staggerChildren: 0.5,
          delayChildren: 0.5,
      }
  }
}


const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
}


export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Please wait ............")
    
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params, 
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          }
        }
      )
      .then(
        () => {
          toast.success("Ding! Your message just made my day! 🎯 I'm cooking up a response that'll be worth the wait", {
            id: toastId
          })
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        },
        (error) => {
          toast.error("Oops! It looks like something went wrong. 🛠️ But no worries—I'm on it! I'll get this sorted out ASAP, so please hang tight.", {
            id: toastId
          })
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      );
  };

  const onSubmit = data => {
    const templateParams = {
      to_name: "Ezekwe Chibuikem Bonaventure",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form 

      variants={container}
      initial="hidden"
      animate="show"

        onSubmit={handleSubmit(onSubmit)}
        className='max-w-sm w-[90%] sm:w-[80%] md:w-[70%] mx-auto flex flex-col items-center justify-center space-y-4'
      >
        <motion.input 
          variants={item}
          type="text" 
          placeholder="name" 
          {...register("name", {
            required: "Hey! Don't forget to fill this out - it's kind of important.", 
            minLength:{value: 3, message: "Whoops! Your name seems a bit shy, more characters."}
          })} 
          className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
        />
        {errors.name && 
          <span className='inline-block self-start text-accent text-sm'>{errors.name.message}</span>
        }

        <motion.input 
          variants={item}
          type="email" 
          placeholder="email" 
          {...register("email", {
            required: "Hey! Just a heads-up to make sure you fill this out. It's important!"
          })} 
          className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
        />  
        {errors.email && 
          <span className='inline-block self-start text-accent text-sm'>{errors.email.message}</span>
        }

        <motion.textarea 
          variants={item}
          placeholder='message' 
          {...register("message", {
            required: "This one's not optional - we really need this info!", 
            maxLength: {
              value: 500,
              message: "we have a character overflow! Mission Control requests less than 500 characters "
            }, 
            minLength: {
              value: 50,
              message: "Additional details would enhance your message. ",
            }
          })} 
          className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
        />
        {errors.message && 
          <span className='inline-block self-start text-accent text-sm'>{errors.message.message}</span>
        }

        <motion.input 
          variants={item}
          value="Reach out!"
          className="px-6 py-2 text-sm rounded-md shadow-lg bg-background border border-accent/30 border-solid
          hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit" 
        />
      </motion.form>
    </>
  );
}