import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // One IntersectionObserver drives every .reveal element on the page.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    const show = (el) => el.classList.add('is-visible')
    if (!('IntersectionObserver' in window)) {
      els.forEach(show)
      return
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    )
    els.forEach((el) => io.observe(el))
    // Safety net: never leave content hidden if the observer misses an element.
    const t = setTimeout(() => els.forEach(show), 2200)
    return () => {
      io.disconnect()
      clearTimeout(t)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
