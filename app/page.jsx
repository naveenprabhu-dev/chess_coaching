import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import {FiMail} from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';


const Testimonial = ({ quote, text, author }) => (
  <div className="p-6 bg-gray-800 rounded-lg border-2 border-dashed border-gray-500 mb-6">
    <h3 className="text-2xl font-semibold mb-4">{quote}</h3>
    <p className="mb-4">{text}</p>
    <p className="font-bold">{author}</p>
  </div>
);

const Home = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto flex">
        <div className="flex flex-col justify-center items-start w-1/2">
          <h1 className="ml-3 text-3xl font-semibold mt-10">Welcome to my coaching website!</h1>
          <p className="ml-3 mt-5">If you're looking to improve your game, <span className="text-accent"> look no further. </span> I have over 7 years of coaching experience, and over a decade of playing experience. </p>
          <p className="ml-3 mt-10"> I've taught private lessons with students from beginners to 1800 USCF, and my students have seen rating increases of over 400 points. 
          I create personalized lesson plans for every student, with a focus on the practical aspects of chess and how to perform best at tournaments. </p>
          <p className="ml-3 mt-10"> I offer private coaching, group lessons, and training games. 
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
          <div className="flex-1 flex justify-end items-start">          
            <Image src="/Naveen_CCC.PNG" className="h-128 object-cover rounded-xl" width={300} height={500}/>
          </div>
      </div>

      <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center">What my students are saying</h2>
          <Testimonial className="w-full" 
            quote="Naveen is a great coach, and I've seen my game improve significantly since I started working with him. He's very patient and explains concepts clearly."
            text="I was stuck at 1200 USCF for a long time, but after a few months of lessons with Naveen, I've reached 1600 USCF. I'm very happy with the results!"
            author="John Doe"
            >
          </Testimonial>

      </div>
    </section>
  )
} 

export default Home

