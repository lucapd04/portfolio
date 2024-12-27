import React, {useRef, useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import { createPortal } from 'react-dom';

export default function VCard({thumbnail, title, description, langs, video = "", code, link=""}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const descriptionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const checkTruncation = () => {
            if (descriptionRef.current && containerRef.current) {
                const descElement = descriptionRef.current;
                const containerElement = containerRef.current;
                
                // Reset any previous truncation state
                descElement.style.height = 'auto';
                
                // Get the available space in the container
                const containerHeight = containerElement.clientHeight;
                const titleHeight = containerElement.querySelector('h1').offsetHeight;
                const tagsHeight = containerElement.querySelector('.tags-container').offsetHeight;
                const padding = 32; // Account for padding (16px top + 16px bottom)
                
                // Calculate maximum available height for description
                const maxAvailableHeight = containerHeight - titleHeight - tagsHeight - padding;
                
                // Set the height and check if content is truncated
                descElement.style.height = `${maxAvailableHeight}px`;
                setIsTruncated(descElement.scrollHeight > maxAvailableHeight);
            }
        };

        checkTruncation();
        window.addEventListener('resize', checkTruncation);
        
        return () => window.removeEventListener('resize', checkTruncation);
    }, [description, langs]);

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
    
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        
        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const Modal = () => (
        <div className="fixed top-0 left-0 right-0 bottom-0 min-h-screen min-w-screen flex items-center justify-center" style={{ zIndex: 9999 }}>
            <div 
                className="absolute top-0 left-0 right-0 bottom-0 min-h-screen min-w-screen bg-black bg-opacity-60 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            />
            <SlideIn direction="up">
                <div 
                    className="relative inset-0 rounded-lg max-w-4xl w-full overflow-y-auto"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-50% from-black via-purple-950 to-black rounded-lg border border-purple-900" />
                    <div className="flex-row relative z-10 p-6">
                        {video ? (
                            <video width="100%" height="auto" autoPlay loop muted>
                                <source src={video} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        ) : thumbnail && (
                            <img 
                                className="w-full object-cover h-96 rounded-lg p-0" 
                                src={thumbnail} 
                                alt={title}
                            />
                        )}
                        <div className="text-white p-3">
                            <h1 className="font-bold text-xl mb-2">{title}</h1>
                            <div className="flex flex-wrap gap-2">
                                {langs.map((lang, index) => (
                                    <span
                                        key={index}
                                        className="rubik-subtitle px-2 py-1 text-sm bg-purple-900 rounded-md border border-purple-700"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                            <p className="rubik-subtitle mt-2 mb-2 text-[15px]">{description}</p>
                            <div className="flex flex-row space-x-2">
                                <a href={code} target="_blank" rel="noopener noreferrer">
                                    <Button className="border border-purple-800 hover:bg-zinc-800 transition ease-in-out duration-300 bg-zinc-950 flex p-2 items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                        </svg>
                                        View code
                                    </Button>
                                </a>
                                {link && (
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                        <button className="border font-bold border-purple-800 hover:bg-zinc-800 transition ease-in-out duration-300 bg-zinc-950 flex p-2 items-center rounded-lg" type="button">
                                            Homepage
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1.5">
                                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </SlideIn>
        </div>
    );
    
    return (
        <>
            <div 
                onClick={() => setIsOpen(true)} 
                className="border-2 border-purple-700 hover:border-purple-400 transition transform duration-300 hover:scale-110 relative flex-row rounded-lg w-full min-[785px]:w-1/2 min-[1240px]:w-1/3 min-[1763px]:w-1/4 min-[2100px]:w-1/6 text-white h-[400px]"
            >
                <div 
                    className="absolute inset-0 rounded-lg 
                    bg-gradient-to-br from-black via-purple-950 to-black 
                    duration-300 opacity-60 shadow-xl"
                />
                <div className="relative z-10 text-left flex flex-col h-full">
                    <img 
                        className="w-full object-cover h-44 flex-shrink-0 rounded-t-lg p-0" 
                        src={thumbnail} 
                        alt={title}
                    />
                    <div className="p-4 flex flex-col flex-grow">
                        <h1 className="font-bold text-xl mb-1.5 truncate">{title}</h1>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {langs.map((lang, index) => (
                                <span
                                    key={index}
                                    className="rubik-subtitle px-2 py-1 text-sm bg-purple-900 rounded-md border border-purple-700"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                        <div className="relative flex-grow overflow-hidden">
                            <p className="rubik-subtitle text-[15px] absolute inset-0">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {isOpen && createPortal(<Modal />, document.body)}
        </>
    );
}