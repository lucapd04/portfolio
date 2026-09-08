import { useState } from "react";
import { createPortal } from "react-dom";

export default function Card({ jobTitle, startDate, endDate = "Present", description, link = "", pdf = "" }) {
    const [isOpen, setIsOpen] = useState(false);

    const modal = (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]"
            onClick={() => setIsOpen(false)}
        >
            <div
                className="bg-white rounded-lg w-full max-w-4xl h-[80vh] p-4"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-end mb-2">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        Close
                    </button>
                </div>
                <iframe
                    src={pdf}
                    className="w-full h-[calc(100%-2rem)]"
                    title={`${jobTitle} certificate`}
                />
            </div>
        </div>
    );

    return (
        <div className="relative group">
            <div className="transition transform duration-300 hover:scale-110 flex flex-col text-left text-white space-y-1 p-6 rounded-lg
                bg-gradient-to-br from-black via-gray-950 to-black
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-700/5 before:via-gray-500/5 before:to-gray-700/5 before:opacity-30 before:rounded-lg
                hover:before:opacity-40 before:transition-opacity duration-300
                border-2 border-l-transparent border-t-transparent border-b-blue-900 border-r-transparent shadow-xl">
                <div className="relative z-10">
                    <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-300 text-lg">
                        {startDate} - {endDate}
                    </p>
                    <p className="pb-2 font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-white to-gray-200">
                        {jobTitle}
                    </p>
                    <p className="text-xl pb-2 text-gray-300">
                        {description}
                    </p>

                    {pdf ? (
                        <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            className="mb-5 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:scale-95 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 shadow-lg shadow-blue-500/20"
                        >
                            View Certificate
                        </button>
                    ) : link ? (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 self-start block"
                        >
                            <button
                                type="button"
                                className="mb-5 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:scale-95 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 shadow-lg shadow-blue-500/20"
                            >
                                Learn more
                            </button>
                        </a>
                    ) : null}
                </div>
            </div>

            {isOpen && createPortal(modal, document.body)}
        </div>
    );
}