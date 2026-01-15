"use client";

import { Button } from "@/components/ui/button";
import { FiMail } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

const Testimonial = ({ text, author }) => (
  <div className="p-8 bg-[#252528] rounded-lg border border-white/10 h-full flex flex-col justify-between transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(0,225,135,0.2)]">
    <p className="text-lg italic leading-relaxed mb-6 text-white/90">
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
        {/* Changed items-center to items-stretch to force equal height */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <div className="flex flex-col justify-center items-start w-full md:w-3/5 p-10 bg-[#252528] rounded-xl">
            <p className="text-3xl font-semibold text-accent">
              If you're looking to improve your game, look no further.
            </p>
            <p className="mt-6">
              I have over 7 years of coaching experience, and over a decade of playing experience. 
              I've taught private lessons with students from beginners to 1800 USCF, and my students have seen rating increases of over 400 points. 
              I create personalized lesson plans for every student, with a focus on the practical aspects of chess and how to perform best at tournaments.
            </p>
            <p className="mt-6">
              I offer private coaching, group lessons, and training games. 
              Check out the services page for more information, or if there's something else in particular you're interested in, let me know. 
              The first trial lesson is always <span className="text-accent"> free of charge! </span>
            </p>
            <Link href="/contact">
              <Button size="lg" className="mt-8">
                <FiMail className="mr-2" />
                Contact
              </Button>
            </Link>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end items-start">          
            <Image 
              src="/Naveen_REU.PNG" 
              className="h-128 w-full object-cover rounded-xl" 
              width={300} 
              height={500}
              priority 
              alt="Naveen Coaching"
            />
          </div>
        </div>

        <div className="mt-16 pb-20">
          <h2 className="text-3xl font-semibold text-center mb-10">
            What my students are saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial 
              text="Naveen is a great coach, and I've seen my game improve significantly. I was stuck at 1200 USCF for a long time, but after a few months of lessons, I've reached 1600 USCF. I'm very happy with the results!"
              author="John Doe"
            />

            <Testimonial 
              text="A fantastic mentor for anyone looking to push past their rating plateau. The personalized lesson plans really made a difference. We focused on specific endgames I was struggling with, and I feel much more confident now."
              author="Jane Smith"
            />

            <Testimonial 
              text="Knowledgeable, professional, and very encouraging. Naveen doesn't just show you moves; he explains the 'why' behind them. My opening preparation has never been better thanks to our training games."
              author="Alex Wong"
            />

            <Testimonial 
              text="The best investment I've made for my chess career. The training games are incredibly helpful for testing new openings. Naveen provides deep analysis that you just can't get from an engine alone."
              author="Michael Chen"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
} 

export default Home