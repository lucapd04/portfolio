import Spline from '@splinetool/react-spline';
import Navbar from '../components/Navbar'
import './Hero.css'
import { SlArrowDown } from "react-icons/sl";

export default function Hero() {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-start justify-center h-screen relative">
        <Spline className="absolute inset-0 z-0" scene="https://prod.spline.design/EI8UlXehr28y9JMO/scene.splinecode" />
        <div className="z-10 px-5 text-center md:ml-[5%] text-white md:text-left -mt-[12%] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <h1 className="rubik-headline font-bold text-6xl mb-8">Welcome to my journey</h1>
          <h2 className="rubik-subtitle text-2xl ml-2 mb-20">My name is Luca Duarte, and I am a Computer Science student</h2>
        </div>
        <div className="md:ml-[6%] animate-bounce flex flex-row text-center md:text-left gap-1 justify-center md:justify-start text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] absolute bottom-20 left-0 right-0 md:static md:mt-10">
          <SlArrowDown className="size-7"/>
          <h3 className="rubik-instruction text-2xl ml-2">Scroll down</h3>
        </div>
      </div>
    </>
  );
}