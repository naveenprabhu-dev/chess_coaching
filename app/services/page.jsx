"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import {FaChess} from 'react-icons/fa';
import Link from "next/link";
import { MoveLeftIcon } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";


const services = [
  {
    num: '01',
    title: 'Private Coaching',
    description: 'A one on one lesson, typically lasting 1 hour, which I\'ll plan and establish based on your needs. Rate: $35 per hour.',
   
  },
  {
    num: '02',
    title: 'Group Lessons',
    description: 'Have friends or family that want to learn chess? I offer group lessons for as many as interested. Rate: $25 per hour.',

  },
  {
    num: '03',
    title: 'Training Games',
    description: 'I offer training games at 20 to 30 minutes per side. You can pick which color or opening you want to work on, or if you want to play without anything specific in mind, that\'s also fine! We\'ll also analyze the game thoroughly afterwards. Rate: $20 per game.',
   
  },

  {
    num: '04', 
    title: 'Other', 
    description: 'Anything specific that you want to work on? Describe it in the contact section, and I\'d be happy to get back to you.'
  }


]




const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mb-10">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start"
        >
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-6 group self-start">
              <div className= "w-full flex justify-between items-center">
                {/* think about removing the number, looks cleaner, and changing the title font of each service */}
                <div className= "text-5xl font-extrabold text-outline text-transparent group-hover: text-outline-hover leading-none">{service.num} </div>
              </div>
              <div>
                <h2 className="text-accent text-[28px]">{service.title}</h2>
                <p>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            </div>
          ))}
        </motion.div> 
      </div>
    </section>
  );
}



// const Services = () => {
//   return (
//   <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
//     <div className="container mx-auto">
//       <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity:1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}}}
//       className="grid grid-cols-1 md: grid-cols-2 gap-[60px]"
//       >
//       {services.map((service, index) => {
//           return <div key= {index}>
//             <div>
//               <div>{service.num}</div>
//             </div>
//             <div>
//               <h2>{service.title}</h2>
//               <p>{service.description}</p>
//               <div className="border-b border-white/20 w-full"></div>
//           </div>
//       })}
//       </motion.div> 
//     </div>
//   </section>
//   )
// }

export default Services
