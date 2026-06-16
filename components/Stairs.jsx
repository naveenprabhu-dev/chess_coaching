import {motion} from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

const reverseIndex = (index) => {
    const totalSteps = 6; // # of steps
    return totalSteps - index - 1;

}

const Stairs = () => {
    return (
        <>
            {/* render 6 motion divs, representing the stairs, each div with the same animation. Delay for each div is 
            calculated dynamically based on reversed index, creating a staggered effect. */}
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeInOut", delay: 0.1 * reverseIndex(index) }}
                    className= "h-full w-full bg-foreground relative"
                />
            ))}
        </>
    );
};


export default Stairs
