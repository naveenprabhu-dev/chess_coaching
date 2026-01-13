import React from 'react'
import Image from 'next/image';

const Coaching_Philosophy = () => {
  return (

    <section>
      <div className="container mx-auto flex">
        <div className="flex flex-col gap-6 p-10 bg-[#252528] rounded-xl w-3/5">
          <h3 className="text-3xl text-accent">
            Coaching Philosophy
          </h3>
          <p>
           My coaching philosophy revolves around the practical side of chess - what will help you in your tournaments the most. 
           As an active competitor myself, I'll pull back the curtain on my own training routine, and describe what I do at the board to maximize results. 
         </p>

          <p>
           I believe that tactics and calculation are undoubtedly the most important aspect of chess, and must be trained constantly to remain sharp at the board.
           During lessons, I'll show you how to efficiently calculate so that you can focus on the most important lines while improving your time management. 
           We'll also analyze your games, and see where the best areas are for improvement. 
          </p>
          <p>
           Additionally, I'll provide you with some puzzles to work on, so that we can discuss at the beginning of the next lesson. 
           When outside of the lesson, feel free to reach out! I'd love to help you prepare openings for tournaments, answer any questions, or just discuss anything chess related!
          </p>
          
        </div>

        <div className="w-full flex-1 flex items-start justify-end ml-6">
         <Image src="/Naveen_CSO.PNG" className="h-128 w-full object-cover rounded-xl" width={500} height={300} />
        </div>

      </div> 
    </section>
    
  )
}

export default Coaching_Philosophy