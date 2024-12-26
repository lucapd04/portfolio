import Spline from '@splinetool/react-spline';
import VCard from '../components/VCard'
import Logo from '../assets/images/tsi.png'
import TSI_Video from '../assets/tsi_site.mp4'
import emailjs from 'emailjs-com';
import React, { useState } from 'react';


export default function Projects() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = {
            firstName: document.getElementById('first_name').value,
            lastName: document.getElementById('last_name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('default-input').value,
        };  
    
        emailjs.send(
            'service_j858lxo',
            'template_61y26je',
            formData,
            'bxGu8YwBlgEOkNy6J'
        ).then(() => {
            alert('Email sent successfully!');
        }).catch((error) => {
            console.error('Error sending email:', error);
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="flex flex-col justify-center items-center py-12 relative">
            <Spline className="absolute inset-0 z-0" scene="https://prod.spline.design/05GegHEcK7rdjrkO/scene.splinecode" />
            <div className="w-3/4 h-3/4 bg-black/40 backdrop-blur-xl z-10 rounded-lg">
                <div className="p-7 text-center">
                    <h1 className="text-white rubik-headline font-bold text-5xl">Projects</h1>
                    <p className="text-white rubik-headline text-md font-light mt-3">Click on card to see further details, click outside of popup to leave</p>
                    <div className="bg-white mx-auto w-1/2 h-px mt-5"/>
                    <div className="flex justify-center items-center mt-12 px-20 gap-6 flex-wrap">
                        <VCard description="Website for the Western Tech for Social Impact club, developed using React and Tailwind" title="TSI Website" thumbnail={Logo} langs={["JavaScript", "React", "Tailwind"]} video={TSI_Video} link="https://uwotsi.com/"/>
                    </div>
                </div>
            </div>
            <h1 className="text-white rubik-headline font-bold text-5xl z-10 mt-10">Contact me</h1>
            <p className="text-white rubik-headline text-sm text-center w-3/4 md:text-md font-light z-10 mt-3">Want to work with me or simply have a chat? Send a message below and I will get back to you as soon as possible!</p>
            
            <form id="contact" onSubmit={handleSubmit} className="z-10 mt-10">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" name="firstName" value={formData.firstName} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" name="lastName" value={formData.lastName} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                    </div>
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                </div> 
                <div class="mb-6 flex-wrap">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        rows="10"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                        placeholder="Type your message here (Shift+Enter for new line)"
                    ></textarea>
                </div>  
                <button type="submit" class="mb-5 px-4 py-2 text-sm font-medium text-white
                                    bg-purple-600
                                    hover:bg-purple-700
                                    active:bg-purple-800
                                    active:scale-95 rounded-lg
                                    transition-all duration-300 ease-in-out
                                    focus:outline-none focus:ring-0
                                    shadow-lg shadow-purple-500/20">Submit</button>
            </form>

        </div>
    )
}