import Hero from './components/Hero'
import About from './components/About'

export default function App() {
  return (
    <main className="min-h-screen">
      <section className="relative h-screen">
        <Hero/>
      </section>
      <section className="relative h-screen">
        <About/>
      </section>
    </main>
  );
}