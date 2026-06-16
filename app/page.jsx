"use client";

import { Button } from "@/components/ui/button";
import { FiMail } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

const Testimonial = ({ text, author }) => (
  <div className="font-inter p-6 md:p-8 bg-card rounded-lg border border-foreground/10 h-full flex flex-col justify-between transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(58,183,149,0.25)]">
    <p className="text-lg italic leading-relaxed mb-6 text-foreground/90">
      "{text}"
    </p>
    <p className="font-bold text-accent">— {author}</p>
  </div>
);

const Home = () => {
  return (
    <section className="min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1, 
          transition: { delay: 0.2, duration: 0.3, ease: "easeIn" } 
        }}
        className="container mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
          
          <div className="flex flex-col justify-center items-start w-full md:w-3/5 p-5 md:p-10 bg-card rounded-xl">
            <p className="text-xl md:text-2xl font-semibold text-accent">
              If you're looking to improve your game, look no further.
            </p>
            
            {/* Added md:leading-loose for wider line spacing on desktop */}
            <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed md:leading-loose">
              I have over 7 years of coaching experience, and over a decade of playing experience. 
              I've taught private lessons with students from beginners to 1800 USCF, and my students have seen rating increases of over 400 points. 
              I create personalized lesson plans for every student, with a focus on the practical aspects of chess and how to perform best at tournaments.
            </p>

            <div className="block md:hidden w-full my-4">
              <Image 
                src="/Naveen_REU.png" 
                className="w-full h-auto object-cover rounded-xl" 
                width={300} 
                height={500}
                priority 
                alt="Naveen Coaching"
              />
            </div>

            {/* Added md:leading-loose for wider line spacing on desktop */}
            <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed md:leading-loose">
              I offer private coaching, group lessons, and training games. 
              Check out the services page for more information, or if there's something else in particular you're interested in, let me know. 
              The first trial lesson is always <span className="text-accent"> free of charge! </span>
            </p>
            
            <Link href="/contact">
              <Button size="lg" className="mt-6 md:mt-8">
                <FiMail className="mr-2" />
                Contact
              </Button>
            </Link>
          </div>
          
          <div className="hidden md:flex md:w-2/5 justify-center md:justify-end">
            <Image
              src="/Naveen_REU.png"
              className="w-full h-full object-cover rounded-xl"
              width={300}
              height={500}
              priority
              alt="Naveen Coaching"
            />
          </div>
        </div>

        <div className="mt-16 pb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            What my students are saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial 
              text="After working with Naveen for a few months, I saw my practical skills improve significantly. We worked heavily on calculation and time management and I gained around 200 USCF points in my next tournaments. Naveen always provided homework positions, tips, and encouragement outside of class. Would highly recommend!"
              author="Rohan Shah (1684 USCF)"
            />

            <Testimonial 
              text="A fantastic mentor for anyone looking to push past their rating plateau. We focused on building a solid opening repertoire, training board vision, and which positions to spend time, and I feel like my skills have increased greatly. I won the U2000 section of Charlotte Spring Open after a couple months of time with Naveen, and gained 100 USCF in the month of May alone."
              author="Vasishta Tumuluri (1935 USCF)"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
} 

export default Home