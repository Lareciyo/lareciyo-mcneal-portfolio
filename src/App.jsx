import { Hero } from "./v0-exports/Hero"
import { About } from "./v0-exports/About"
import { Projects } from "./v0-exports/Projects"
import { Skills } from "./v0-exports/Skills"
import { Contact } from "./v0-exports/Contact"
import { Footer } from "./v0-exports/Footer"

function App() {
  return (
    <div className="bg-slate-950">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App