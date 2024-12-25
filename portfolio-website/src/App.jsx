import Hero from './pages/Hero'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

export default function App() {
  return (
    <main className="overflow-visible min-h-screen relative">
      <section id="home">
        <Hero/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="experience">
        <Experience/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
    </main>
  );
}