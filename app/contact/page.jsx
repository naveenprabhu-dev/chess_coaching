"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Added ImSpinner8 for the loading animation
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { ImSpinner8 } from "react-icons/im"; 
import { motion, AnimatePresence } from 'framer-motion';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(919)-579-0897'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'navnp04@gmail.com'
    }
];

const serviceLabels = {
    "1": "Private Coaching",
    "2": "Group Coaching",
    "3": "Training Games",
    "4": "Other",
};

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPending, setIsPending] = useState(false); // New state for loading
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSelectChange = (value) => {
        setFormData({
            ...formData,
            service: serviceLabels[value]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true); // Start loading

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please check your connection.');
        } finally {
            setIsPending(false); // Stop loading regardless of outcome
        }
    };

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    
                    <div className="xl:w-[54%] order-2 xl:order-none min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form 
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="flex flex-col gap-6 p-10 bg-card rounded-xl" 
                                    onSubmit={handleSubmit}
                                >
                                    <h3 className="text-4xl text-accent">Want to improve?</h3>
                                    <p className="text-foreground/60">Fill out the form below and I'll get back to you as soon as possible.</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                                        <Input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                                        <Input type="text" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                                        <Input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
                                    </div>

                                    <Select onValueChange={handleSelectChange} required>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Select a service</SelectLabel>
                                                <SelectItem value="1">Private Coaching</SelectItem>
                                                <SelectItem value="2">Group Coaching</SelectItem>
                                                <SelectItem value="3">Training Games</SelectItem>
                                                <SelectItem value="4">Other</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>

                                    <Textarea className="h-[200px]" name="message" placeholder="Type your message here." value={formData.message} onChange={handleChange} required />

                                    {/* Updated Button with Loading Logic */}
                                    <Button 
                                        type="submit" 
                                        size="md" 
                                        className="max-w-40 flex items-center justify-center gap-2"
                                        disabled={isPending} // Disable while sending
                                    >
                                        {isPending ? (
                                            <>
                                                <ImSpinner8 className="animate-spin text-xl" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Submit"
                                        )}
                                    </Button>  
                                </motion.form>
                            ) : (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center p-10 bg-card rounded-xl border-2 border-dashed border-accent text-center h-full min-h-[580px]"
                                >
                                    <div className="text-6xl mb-6">♟️</div>
                                    <h2 className="text-4xl font-semibold text-accent mb-4">Message Received!</h2>
                                    <p className="text-foreground/60 text-lg max-w-md">
                                        Thanks for reaching out! I've received your request and will get back to you 
                                        as soon as possible.
                                    </p>
                                    <button 
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-8 text-accent underline hover:text-foreground transition-all"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-card text-accent rounded-md flex items-center justify-center">
                                        <div>{item.icon}</div>
                                    </div>
                                    <div>
                                        <p className="text-foreground/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;