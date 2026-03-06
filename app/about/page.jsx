"use client"; // Required for Framer Motion

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"; // Import motion

const About = () => {
  return (
    <section>
      {/* Wrapping the container in motion.div. 
         Note: delay is set to 0.2 instead of 2.4 for better speed.
      */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1, 
          transition: { delay: 0.2, duration: 0.3, ease: "easeIn" } 
        }}
        className="container mx-auto flex flex-col md:flex-row"
      >
        <div className="flex flex-col gap-6 p-6 md:p-10 bg-[#252528] rounded-xl w-full md:w-3/5">
          <h3 className="text-3xl text-accent">
            About Me
          </h3>
          <p>
           I've been a competitive chess player for over 10 years, and still continue playing actively to this day.  
           Some of my accomplishments include winning the 2022 NC State Scholastics, the 2023 NC State Championship, and participating in the Denker and Barber Tournament of Champions. 
           I achieved National Master in 2022, and am currently around my peak ratings of 2387 USCF and 2271 FIDE.
          </p>

          <p>
            In addition to my playing career, I've been coaching at all types of settings for over 5 years - in private and group lessons, chess camps, and at school chess clubs. I have a great passion for teaching and seeing any chess player put in the work and improve. I create lesson plans each week catered to your needs, and will be available online to chat during your tournaments for opening preparation or just any general advice. Please reach out outside of lesson time!
          </p>
        </div>

        <div className="hidden md:flex flex-1 items-start justify-end ml-0 md:ml-6 mt-6 md:mt-0">
         <Image 
            src="/Naveen_Yellowstone.PNG" 
            className="h-128 w-full object-cover rounded-xl" 
            width={500} 
            height={300} 
            priority // Recommended for images high up on the page
            alt="About Me"
          />
        </div>
      </motion.div> 
    </section>
  )
}

export default About;