export default function Card({jobTitle, startDate, endDate, description, link = ""}) {
    return (
        <div className="relative group">
            {/* Darker metallic background with subtle gradient overlay */}
            <div className="flex flex-col text-left text-white space-y-1 p-6 rounded-lg
                bg-gradient-to-br from-black via-gray-950 to-black
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-700/5 before:via-gray-500/5 before:to-gray-700/5 before:opacity-30 before:rounded-lg
                hover:before:opacity-40 before:transition-opacity duration-300
                border-2 border-l-transparent border-t-transparent border-b-blue-900 border-r-blue-900 shadow-xl">
                
                {/* Content with enhanced styling */}
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
                    {link && (
                        <a 
                            href={link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 self-start block"
                        >
                            <button 
                                type="button" 
                                className="mb-5 px-4 py-2 text-sm font-medium text-white
                                    bg-blue-600
                                    hover:bg-blue-700
                                    active:bg-blue-800
                                    active:scale-95 rounded-lg
                                    transition-all duration-300 ease-in-out
                                    focus:outline-none focus:ring-0
                                    shadow-lg shadow-blue-500/20"
                            >
                                Learn more
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}