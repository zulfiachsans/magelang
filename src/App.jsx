import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sejarah from './components/Sejarah'
import Wisata from './components/Wisata'
import Kuliner from './components/Kuliner'
import Galeri from './components/Galeri'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Sejarah />
        <Wisata />
        <Kuliner />
        <Galeri />
      </main>
      <Footer />
    </div>
  )
}

export default App
