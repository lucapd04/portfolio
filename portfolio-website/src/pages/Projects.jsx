import Spline from '@splinetool/react-spline';
import VCard from '../components/VCard'
import Logo from '../assets/images/tsi.png'

export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative">
            <Spline className="absolute inset-0 z-0" scene="https://prod.spline.design/05GegHEcK7rdjrkO/scene.splinecode" />
            <div className="w-3/4 h-3/4 bg-black/50 backdrop-blur-xl z-10 rounded-lg">
                <div className="p-7 text-center">
                    <h1 className="text-white rubik-headline font-bold text-5xl">Projects</h1>
                    <div className="bg-white mx-auto w-1/2 h-px mt-5"/>
                    <div className="flex mt-12 px-20 gap-4 flex-wrap">
                        <VCard description="Website for the Western Tech for Social Impact club, developed using React and Tailwind" title="TSI Website" img={Logo} langs={["JavaScript", "React", "Tailwind"]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}