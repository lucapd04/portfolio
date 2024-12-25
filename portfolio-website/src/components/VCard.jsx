export default function VCard({img, title, description, langs}) {
    return (
        <div className="relative flex-row rounded-lg w-full md:w-1/2 min-[1253px]:w-1/3 min-[1763px]:w-1/4 min-[2100px]:w-1/6 text-white">
            <div className="absolute inset-0 rounded-lg
                bg-gradient-to-br from-black via-purple-950 to-black
                duration-300 opacity-60 shadow-xl border-2 border-purple-700"/>
            <div className="relative z-10 space-y-1 text-left">
                <img className="w-full object-cover h-44 border-l-purple-700 border-2 border-b-transparent border-t-purple-700 border-r-purple-700 rounded-t-lg p-0" src={img}/>
                <div className=" p-3">
                    <h1 className="font-bold text-xl mb-2">{title}</h1>
                    <div className="flex flex-wrap gap-2">
                        {langs.map((lang, index) => (
                            <span 
                            key={index}
                            className="px-2 py-1 text-sm bg-purple-900 rounded-md border border-purple-700"
                            >
                            {lang}
                            </span>
                        ))}
                    </div>
                    <p className="mt-2 text-[15px]">{description}</p>
                </div>
            </div>
        </div>
    )
}