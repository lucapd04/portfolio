import Spline from '@splinetool/react-spline';
import Navbar from './Navbar'
import './Hero.css'

export default function App() {
  return (
    <>
      <Navbar/>
      <div className="relative flex flex-col items-start justify-center h-screen">
        <Spline className="absolute inset-0 z-0" scene="https://prod.spline.design/6s1KXAeWtxT5mGoz/scene.splinecode" />
        <div className="z-10 text-center md:ml-20 text-white md:text-left">
          <h1 className="rubik-headline font-bold text-6xl mb-8">Welcome to my journey</h1>
          <h2 className="rubik-subtitle text-2xl ml-2">My name is Luca Duarte, a Computer Science student</h2>
        </div>
      </div>
    </>
  );
}
