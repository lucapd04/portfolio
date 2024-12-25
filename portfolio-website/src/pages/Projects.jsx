import Spline from '@splinetool/react-spline';

export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative">
            <Spline className="absolute inset-0 z-0" scene="https://prod.spline.design/05GegHEcK7rdjrkO/scene.splinecode" />
            <div className="w-3/4 h-3/4 bg-black/50 backdrop-blur-xl z-10 rounded-lg">
                <div className="p-7 text-center">
                    <h1 className="text-white rubik-headline font-bold text-5xl">Projects</h1>
                    <div className="bg-white mx-auto w-1/2 h-px mt-5"/>
                    <div className="flex mt-12 px-20 gap-4 flex-wrap">
                    </div>
                </div>
            </div>
        </div>
    )
}