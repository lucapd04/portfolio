import Hero from './pages/Hero'
import About from './pages/About'
import Experience from './pages/Experience'

export default function App() {
  return (
    <main className="min-h-screen">
      <section className="relative h-screen">
        <Hero/>
      </section>
      <section className="relative h-screen">
        <About/>
      </section>
      <section className="relative h-screen">
        <Experience/>
      </section>
    </main>
  );
}