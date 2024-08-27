import Spline from '@splinetool/react-spline';
import Navbar from './Navbar'
import './Hero.css'
import { SlArrowDown } from "react-icons/sl";

export default function Hero() {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-start justify-center h-screen">
        <Spline className="absolute inset-0 z-0" scene="https://prod.spline.design/X0WlTZvEU-qCV0aJ/scene.splinecode" />
        <div className="z-10 text-center md:ml-[5%] text-white md:text-left -mt-[12%]">
          <h1 className="rubik-headline font-bold text-6xl mb-8">Welcome to my journey</h1>
          <h2 className="rubik-subtitle text-2xl ml-2 mb-20">My name is Luca Duarte, and I am a Computer Science student</h2>
          <div className="animate-bounce flex flex-row text-center md:text-left gap-1 justify-center md:justify-start">
            <SlArrowDown className="size-7"/>
            <h3 className="rubik-instruction text-2xl ml-2">Scroll down</h3>
          </div>
        </div>
      </div>
    </>
  );
}
