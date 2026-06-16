"use client"; // Required for Framer Motion

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"; // Import motion

const About = () => {
  return (
    <section>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1, 
          transition: { delay: 0.2, duration: 0.3, ease: "easeIn" } 
        }}
        className="container mx-auto flex flex-col md:flex-row items-start gap-6"
      >
        <div className="flex flex-col gap-4 md:gap-6 p-5 md:p-10 bg-card rounded-xl w-full md:w-3/5">
          <h3 className="text-xl md:text-3xl text-accent">
            About Me
          </h3>
          <p className="text-base md:text-lg leading-relaxed md:leading-loose">
           I've been a competitive chess player for over 10 years. Some of my accomplishments include winning the 2022 NC State Scholastics, the 2023 and 2025 NC State Championships, and participating in the Denker and Barber Tournament of Champions.
           I achieved <span className="text-accent">National Master</span> in 2022 and am currently at my peak ratings of <span className="text-accent">2387</span> USCF and <span className="text-accent">2271</span> FIDE. I'm currently the 4th highest rated active player in North Carolina, aiming for FM and beyond.
           I know firsthand the cutthroat nature of the current tournament circuit, and will do everything to set you up for success.
          </p>

          {/* MOBILE IMAGE: Displays between paragraphs on mobile, hides on desktop */}
          <div className="block md:hidden w-full my-2">
             <Image 
                src="/Naveen_Yellowstone.PNG" 
                className="w-full h-auto object-cover rounded-xl" 
                width={500} 
                height={300} 
                priority
                alt="Naveen at Yellowstone"
              />
          </div>

          <p className="text-base md:text-lg leading-relaxed md:leading-loose">
            In addition to my playing career, I've been coaching at all types of settings for over 5 years - in private and group lessons, chess camps, and at school chess clubs. I have a great passion for teaching and seeing any chess player put in effort and improve. I'll be available online to chat during your tournaments for opponent specific opening preparation or just any general advice. Please reach out outside of lessons to make the most out of our time!
          </p>

          <p className="text-base md:text-lg leading-relaxed md:leading-loose">
            Outside of the board, I also enjoy writing about chess. You can read my blog{' '}
            <a
              href="https://substack.com/@naveenprabhu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:text-foreground transition-all"
            >
              here
            </a>
            .
          </p>
        </div>

        {/* DESKTOP IMAGE: Displays side-by-side on desktop, hides on mobile */}
        <div className="hidden md:flex w-2/5 items-start justify-end">
         <Image 
            src="/Naveen_Yellowstone.PNG" 
            className="w-full h-auto object-contain rounded-xl" 
            width={500} 
            height={300} 
            priority // Recommended for images high up on the page
            alt="Naveen at Yellowstone"
          />
        </div>
      </motion.div> 
    </section>
  )
}

export default About;