import Hero from "../components/hero"
import Portfolio from "../components/portfolio"
import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100">
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

