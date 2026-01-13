import React from 'react'
import Image from 'next/image';

const About = () => {
  return (

    <section>
      <div className="container mx-auto flex">
        <div className="flex flex-col gap-6 p-10 bg-[#252528] rounded-xl w-3/5">
          <h3 className="text-3xl text-accent">
            About Me
          </h3>
          <p>
           I've been a competitive chess player for over 10 years, and still continue playing actively to this day.  
           Some of my acccomplishments include winning the 2022 NC State Scholastics, the 2023 NC State Championship, and participating in the Denker and Barber Tournament of Champions. 
           I achieved National Master in 2022, and am currently at my peak ratings of 2361 USCF and 2257 FIDE.
          </p>

          <p>
            In addition to my playing career, I've been coaching at all types of settings for over 5 years - in private and group lessons, chess camps, and at school chess clubs. I have a great passion for teaching and seeing any chess player put in the work and improve. I create lesson plans each week catered to your needs, and will be available online to chat during your tournaments for opening preparation or just any general advice. Please reach out outside of lesson time!
          </p>
        </div>

        <div className="flex-1 flex items-start justify-end ml-6">
         <Image src="/Naveen_Yellowstone.PNG" className="h-128 w-full object-cover rounded-xl" width={500} height={300} />
        </div>

      </div> 
    </section>
    
  )
}

export default About
