"use client";

import {Button} from "@/components/ui/button";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {Select, SelectContent, SelectOption, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaChess, FaMapMarkerAlt} from 'react-icons/fa';

import { motion } from 'framer-motion';

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
]

const serviceLabels = {
    "1": "Private Coaching",
    "2": "Group Coaching",
    "3": "Training Games",
    "4": "Other",
  };


const Contact = () => {
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
        // Send the form data 
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            // Handle success (e.g., show a success message)
            console.log('Form submitted successfully!');
            alert('Form submitted successfully!');
        } else {
            // Handle error (e.g., show an error message)
            console.log('Failed to submit the form. Please try again.');
            alert('Failed to submit the form. Please try again.');
        }
    };

  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}, }}
    className="py-6"
    >
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* contact form */}
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                        <h3 className="text-4xl text-accent">Interested in lessons?</h3>
                        <p  className="text-white/60">Fill out the form below and I'll get back to you as soon as possible. </p>
                        {/*input fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
                            <Input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
                            <Input type="text" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}/>
                            <Input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange}/>
                        </div>
                        {/*select fields */}
                        <Select onValueChange={handleSelectChange}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a service">
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel> Select a service</SelectLabel>
                                    <SelectItem value="1">Private Coaching</SelectItem>
                                    <SelectItem value="2">Group Coaching</SelectItem>
                                    <SelectItem value="3">Training Games</SelectItem>
                                    <SelectItem value="4">Other (Please let me know what you're looking for below.)</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/* message */}
                        <Textarea className="h-[200px]" name="message" placeholder="Type your message here." value={formData.message} onChange={handleChange}/>

                        {/* submit button */}
                        <Button type="submit" size="md" className="max-w-40">Submit</Button>  
                    </form>
                </div>

                {/* contact info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        {info.map((item, index) => {
                            return <li key={index} className="flex items-center gap-6">
                                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                    <div> {item.icon} </div>
                                </div>
                                <div>
                                    <p className="text-white/60"> {item.title} </p>
                                    <h3 className="text-xl"> {item.description} </h3>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>

            
        </div>
    
    </motion.section>
  )
}


export default Contact
