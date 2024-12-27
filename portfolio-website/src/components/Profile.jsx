import React from 'react';
import Photo from '../assets/images/pfp2.jpg';
import ResumeButton from "../components/ResumeButton";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
import React_Logo from '../assets/images/react.png'
import Python from '../assets/images/python.png'
import SQL from '../assets/images/sql.png'
import C from '../assets/images/c++.png'
import Flask from '../assets/images/flask.png'
import Mongo from '../assets/images/mongo.png'
import Java from '../assets/images/java.png'
import JS from '../assets/images/javascript.png'
import HTML from '../assets/images/html.png'
import CSS from '../assets/images/css.png'

export default function Profile() {
  return (
    <>
      <div className="flex flex-col min-[1140px]:flex-row justify-center z-10">
        <div className="flex justify-center items-center">
            <div className="relative w-96 h-auto min-[1140px]:hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-700 to-teal-400 animate-gradient-x rounded-lg"></div>
              <img 
                className="relative z-10 w-full h-full object-cover rounded-lg p-[1px]" 
                src={Photo} 
                alt="Profile" 
              />
            </div>
        </div>
        <div className="text-center md:text-left min-[1140px]:w-1/2 bg-black text-white p-10 mt-10 relative overflow-hidden md:rounded-tl-[100px] max-[425px]:pb-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            background: 'linear-gradient(45deg, #0000ff, transparent 60%, #00ffff)',
            opacity: 0.2,
          }}></div>
          <div className="flex flex-col relative z-10">
            <h2 className="rubik-headline font-bold text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-white to-cyan-400">About me</h2>
            <p className="mb-4">
              I am a 3rd year Computer Science student currently enrolled in Western University. 
            </p>
            <p className="mb-4">
              Recently having finished my first year at university, I hope to continue my 4 year program and become a computer science major.
            </p>
            <p className="mb-4">
              I have been a programmer ever since 2016, when I first started learning the basics of Python through an online course on YouTube. Then in high school I joined the computer science course, continuing into my major during university. Throughout these years I have learned to code with Python, Java, C++, HTML and Flutter. I gained a lot of experience working on many different coding projects and also learned concepts such as algorithms and OOP.
            </p>
            <div className="flex flex-row items-center justify-center md:justify-start space-x-4 mt-2 mb-5">
              <ResumeButton/>
              <a href="https://github.com/lucapd04" target="_blank" rel="noopener noreferrer">
                <button 
                  type="button" 
                  className="h-12 w-12 flex items-center justify-center text-white bg-blue-600 hover:bg-blue-800 active:bg-blue-900 active:scale-95 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-0"
                >
                  <DiGithubBadge className="h-12 w-12"/>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/lucapduarte/" target="_blank" rel="noopener noreferrer">
                <button 
                  type="button" 
                  className="h-12 w-12 flex items-center justify-center text-white bg-blue-600 hover:bg-blue-800 active:bg-blue-900 active:scale-95 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-0"
                >
                  <FaLinkedinIn className="h-8 w-8"/>
                </button>
              </a>
            </div>
            <div className="flex flex-row flex-wrap space-x-2 max-[767px]:justify-center items-center">
              <img src={React_Logo} alt="React Logo" className="h-25 w-25"/>
              <img src={Python} alt="Python Logo" className="h-25 w-25"/>
              <img src={Flask} alt="Flask Logo" className="h-25 w-25"/>
              <img src={Mongo} alt="MongoDB Logo" className="h-25 w-25"/>
              <img src={JS} alt="Javascript Logo" className="h-25 w-25"/>
              <img src={HTML} alt="HTML Logo" className="h-25 w-25"/>
              <img src={CSS} alt="CSS Logo" className="h-25 w-25"/>
            </div>
            <p className="text-gray-600 mt-4">
              Icons by 
              <a className="underline" href="https://icons8.com/"> Icons8</a>
            </p>
          </div>
        </div>
        <img className="object-scale-down h-full w-[450px] min-[1507px]:w-96 mt-10 hidden min-[1140px]:block" src={Photo} alt="Profile" />
      </div>
    </>
  );
}