import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaMapMarkerAlt } from 'react-icons/fa'

const navLinks = [
  { id: 'hero',    label: 'Beranda' },
  { id: 'sejarah', label: 'Sejarah' },
  { id: 'wisata',  label: 'Wisata' },
  { id: 'kuliner', label: 'Kuliner' },
  { id: 'galeri',  label: 'Galeri' },
]

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-gold-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <FaMapMarkerAlt className="text-white text-sm" />
          </div>
          <span className="font-serif font-bold text-xl text-white">
            Magelang<span className="text-primary-400">Explore</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  active === id
                    ? 'text-primary-400'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
                {active === id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-400" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('wisata')}
          className="hidden md:block btn-primary text-sm"
        >
          Jelajahi Sekarang
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-800/95 backdrop-blur-md px-4 pb-4 pt-2 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition ${
                active === id
                  ? 'bg-primary-500/20 text-primary-400'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('wisata')}
            className="btn-primary mt-2 text-sm text-center"
          >
            Jelajahi Sekarang
          </button>
        </div>
      </div>
    </nav>
  )
}
