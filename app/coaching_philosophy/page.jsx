"use client"; // Required for Framer Motion

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"; // Import motion

const Coaching_Philosophy = () => {
  return (
    <section>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1, 
          transition: { delay: 0.2, duration: 0.3, ease: "easeIn" } 
        }}
        className="container mx-auto flex flex-col md:flex-row items-start gap-4 md:gap-6"
      >
        <div className="flex flex-col gap-4 md:gap-6 p-5 md:p-10 bg-card rounded-xl w-full md:w-3/5">
          <h3 className="text-xl md:text-3xl text-accent">
            Coaching Philosophy
          </h3>
          <p className="text-base md:text-lg leading-relaxed md:leading-loose">
           My coaching philosophy revolves around the practical side of chess - what will help you to score points in your tournaments. 
           As an active competitor myself, I'll pull back the curtain on my own training routine and describe what I do at the board to maximize results. 
         </p>

          <p className="text-base md:text-lg leading-relaxed md:leading-loose">
           I believe that tactics and calculation are undoubtedly the most important aspect of chess, and must be trained constantly to remain sharp at the board.
           During lessons, I'll show you how to efficiently calculate so that you can focus on the most important lines while improving your time management. 
           We'll also analyze your games and see where which areas most need improvement. 
          </p>

          {/* MOBILE IMAGE: Sandwiched between paragraphs 2 and 3, hidden on desktop */}
          <div className="block md:hidden w-full my-2">
             <Image 
                src="/Naveen_CSO.jpg" 
                className="w-full h-auto object-cover rounded-xl" 
                width={500} 
                height={300} 
                priority
                alt="Coaching Philosophy"
              />
          </div>

          <p className="text-base md:text-lg leading-relaxed md:leading-loose">
           Additionally, I'll provide you with some puzzles to work on to discuss at the beginning of the next lesson. 
           When outside of the lesson, feel free to reach out! I'd love to help you prepare openings for tournaments, answer any questions, or just discuss anything chess related!
          </p>
        </div>

        {/* DESKTOP IMAGE: Hidden on mobile, displays side-by-side on desktop */}
        <div className="hidden md:flex md:w-2/5 items-start justify-end">
         <Image 
            src="/Naveen_CSO.jpg" 
            className="w-full h-auto object-contain rounded-xl" 
            width={500} 
            height={300} 
            priority
            alt="Coaching Philosophy"
          />
        </div>
      </motion.div> 
    </section>
  )
}

export default Coaching_Philosophy;