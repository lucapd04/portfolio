import React from 'react';
import Card from '../components/Card'

export default function Experience() {  
    return (
        <div className="flex flex-col md:mt-[-20%] items-center py-16 md:px-20" style={{
            background: 'linear-gradient(to right, rgb(4, 10, 29) 0%, black 10%, black 90%, rgb(4, 10, 29) 100%)'
        }}>
            <h2 className="experience-title rubik-headline font-bold text-5xl px-8 py-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-white to-cyan-400 relative inline-block mb-8">
                Experience
            </h2>
            <div className="w-3/4 px-4 mt-6">
                <ol className="text-left space-y-6">
                    <li>
                        <Card jobTitle="Project Manager at Western Tech for Social Impact" startDate="July 2024" 
                        description="Leading a team of 5+ developers to develop a diverse cast of projects for multiple non-profit organizations within London, ON" link="https://uwotsi.com/"/>
                    </li>
                    <li>
                        <Card jobTitle="AI Startup Co-founder" startDate="May 2024" endDate="August 2024" 
                        description="Co-founded an AI Stealth startup focusing on using watermarking for data protection against AI" link="https://www.linkedin.com/in/lucapduarte/"/>
                    </li>
                    <li>
                        <Card jobTitle="Intern at the Entrepreneurial Summer Internship program at the Ivey Business School" startDate="May 2024" endDate="July 2024" 
                        description="Joined the ESI program at Ivey, where I learned the different aspects on how to grow and manage a business" link="https://entrepreneurship.uwo.ca/for-students/internship/"/>
                    </li>
                    <li>
                        <Card jobTitle="Juniour Developer at MarmotTech" startDate="May 2024" endDate="August 2024" 
                        description="Used React Native to create mobile apps for companies in need of online presence" link="https://www.linkedin.com/company/marmottech/posts/?feedView=all"/>
                    </li>
                </ol>
            </div>

            <style jsx>{`
                .experience-title::before,
                .experience-title::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(to right, #3b82f6, #ffffff, #22d3ee);
                }

                .experience-title::before {
                    top: -12px;
                }

                .experience-title::after {
                    bottom: -12px;
                }

                .experience-title::before::after,
                .experience-title::after::before {
                    content: '';
                    position: absolute;
                    left: 10%;
                    right: 10%;
                    height: 2px;
                    background: linear-gradient(to right, #3b82f6, #ffffff, #22d3ee);
                }

                .experience-title::before::after {
                    top: 8px;
                }

                .experience-title::after::before {
                    bottom: 8px;
                }
            `}</style>
        </div>
    );
}