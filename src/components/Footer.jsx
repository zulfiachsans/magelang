import { FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube, FaHeart } from 'react-icons/fa'

const sections = [
  {
    title: 'Jelajahi',
    links: ['Sejarah', 'Wisata', 'Kuliner', 'Galeri'],
  },
  {
    title: 'Wisata Populer',
    links: ['Candi Borobudur', 'Ketep Pass', 'Gunung Tidar', 'Candi Mendut'],
  },
  {
    title: 'Kuliner Khas',
    links: ['Kupat Tahu', 'Soto Magelang', 'Gethuk', 'Nasi Lesah'],
  },
]

const scrollTo = (id) => {
  const el = document.getElementById(id.toLowerCase().replace(/ /g, ''))
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute -left-40 top-0 w-80 h-80 rounded-full bg-primary-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-gold-500 flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-sm" />
              </div>
              <span className="font-serif font-bold text-xl text-white">
                Magelang<span className="text-primary-400">Explore</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Portal informasi wisata, kuliner, dan sejarah Kota &amp; Kabupaten Magelang.
              Warisan budaya dunia di hati Jawa Tengah.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: <FaInstagram />, label: 'Instagram' },
                { icon: <FaFacebook />,  label: 'Facebook' },
                { icon: <FaYoutube />,   label: 'YouTube' },
              ].map(({ icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary-400 hover:border-primary-400/50 hover:bg-primary-400/10 transition-all duration-300"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{s.title}</h4>
              <ul className="space-y-2">
                {s.links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo(link)}
                      className="text-white/40 text-sm hover:text-primary-400 transition-colors duration-200 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} MagelangExplore. Dibuat dengan{' '}
            <FaHeart className="inline text-primary-400 mx-0.5" />
            untuk Magelang yang lebih dikenal dunia.
          </p>
          <p className="text-white/20 text-xs">
            Data wisata bersumber dari berbagai sumber terpercaya
          </p>
        </div>
      </div>
    </footer>
  )
}
