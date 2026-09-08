import React, { useRef, useState, useEffect } from 'react';
import Card from '../components/Card'
import AWS_Practitioner from '../assets/practitioner.pdf'

export default function Experience() {  
    const SlideIn = ({ 
        children, 
        direction = 'left',
        threshold = 0.2, 
        rootMargin = '0px' 
      }) => {
        const [isVisible, setIsVisible] = useState(false);
        const elementRef = useRef(null);
      
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
              }
            },
            {
              threshold,
              rootMargin
            }
          );
      
          if (elementRef.current) {
            observer.observe(elementRef.current);
          }
      
          return () => observer.disconnect();
        }, [threshold, rootMargin]);
      
        const getInitialTransform = () => {
          switch (direction) {
            case 'left':
              return 'translateX(-100%)';
            case 'right':
              return 'translateX(100%)';
            case 'up':
              return 'translateY(100%)';
            case 'down':
              return 'translateY(-100%)';
            default:
              return 'translateX(-100%)';
          }
        };
      
        return (
          <div
            ref={elementRef}
            className={`
              transform transition-all duration-700 ease-out
              ${isVisible ? 'translate-x-0 translate-y-0 opacity-100' : 'opacity-0'}
            `}
            style={{
              transform: isVisible ? 'translate(0)' : getInitialTransform()
            }}
          >
            {children}
          </div>
        );
      };

    return (
          <div className="flex flex-col items-center py-16 md:px-20" style={{
              background: 'linear-gradient(to right, rgb(5, 13, 39) 0%, black 10%, black 90%, rgb(5, 13, 39) 100%)'
          }}>
            <h2 className="experience-title rubik-headline font-bold text-5xl px-8 py-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-white to-cyan-400 relative inline-block mb-8">
                Experience
            </h2>
            <div className="w-3/4 px-4 mt-6">
                <ol className="text-left space-y-6">
                    <li>
                        <SlideIn>
                            <Card jobTitle="AWS Cloud Practitioner Certification" startDate="July 2026"
                            description="Acquired AWS Cloud Practitioner certificate" pdf={AWS_Practitioner}/>
                        </SlideIn>
                    </li>
                    <li>
                        <SlideIn>
                            <Card jobTitle="Cloud Developer at the Bank of Montreal" startDate="May 2025"
                            description="Working under the Cloud Serverless team at BMO to help develop and maintain the bank's cloud infrastructre" link="https://www.linkedin.com/in/lucapduarte/"/>
                        </SlideIn>
                    </li>
                    <li>
                        <SlideIn>
                            <Card jobTitle="Project Manager at Western Tech for Social Impact" startDate="July 2024" endDate="August 2025"
                            description="Lead two teams of 5+ developers to develop a diverse cast of projects for multiple non-profit organizations within London, ON" link="https://uwotsi.com/"/>
                        </SlideIn>
                    </li>
                    <li>
                        <SlideIn>
                            <Card jobTitle="AI Startup Co-founder" startDate="May 2024" endDate="August 2024" 
                            description="Co-founded an AI Stealth startup focusing on using watermarking for data protection against AI" link="https://www.linkedin.com/in/lucapduarte/"/>
                        </SlideIn>
                    </li>
                    <li>
                        <SlideIn>
                            <Card jobTitle="Intern at the Entrepreneurial Summer Internship program at the Ivey Business School" startDate="May 2024" endDate="July 2024" 
                            description="Joined the ESI program at Ivey, where I learned the different aspects on how to grow and manage a business" link="https://entrepreneurship.uwo.ca/for-students/internship/"/>
                        </SlideIn>
                    </li>
                    <li>
                        <SlideIn>
                            <Card jobTitle="Junior Developer at MarmotTech" startDate="May 2024" endDate="August 2024" 
                            description="Used React Native to create mobile apps for companies in need of online presence" link="https://www.linkedin.com/company/marmottech/posts/?feedView=all"/>
                        </SlideIn>
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