import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

// Session 6, Part C. Note the dots: this file lives in src/pages, so it has to
// climb out of pages first -- "../components/Hero", not "./components/Hero".
//
// The home page is the dashboard: a bit of who I am, a bit of my work, a bit of
// how to reach me. Each detail page carries the whole story of one thing.
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
