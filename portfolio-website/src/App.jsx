import Hero from './pages/Hero'
import About from './pages/About'
import Experience from './pages/Experience'

export default function App() {
  return (
    <main className="overflow-x-hidden min-h-screen relative">
      <section id="home">
        <Hero/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="experience">
      </section>
    </main>
  );
}