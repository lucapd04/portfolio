import React from 'react';

export default function Experience() {
    return (
        <div className="flex flex-col mt-[-3%] items-center min-h-screen bg-black">
            <h2 className="experience-title rubik-headline font-bold text-5xl px-8 py-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-white to-cyan-400 relative inline-block mb-8">
                Experience
            </h2>
            <div className="w-3/4 px-4">
                <ol className="text-left">
                    <li>
                        {/* Add your experience items here */}
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