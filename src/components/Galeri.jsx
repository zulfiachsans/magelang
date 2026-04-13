import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80',
    alt: 'Candi Borobudur',
    label: 'Candi Borobudur',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1569912207582-53a37f35e89e?w=640&q=80',
    alt: 'Gunung Merapi dari Ketep Pass',
    label: 'Ketep Pass',
    span: '',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1604608672516-f1b9e2871ed5?w=640&q=80',
    alt: 'Candi Mendut',
    label: 'Candi Mendut',
    span: '',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=640&q=80',
    alt: 'Candi Pawon',
    label: 'Candi Pawon',
    span: '',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=640&q=80',
    alt: 'Gunung Tidar Magelang',
    label: 'Gunung Tidar',
    span: '',
  },
]

export default function Galeri() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="galeri" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -right-40 bottom-0 w-96 h-96 rounded-full bg-primary-900/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Keindahan Visual
          </span>
          <h2 className="section-title mb-4">Galeri Magelang</h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Sebuah koleksi gambar yang menangkap keindahan alam, arsitektur kuno, dan
            kehidupan sehari-hari di Magelang.
          </p>
        </motion.div>

        {/* Mosaic grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-3 md:gap-4"
          style={{ gridAutoRows: '200px' }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={titleInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = `https://picsum.photos/seed/${img.id + 20}/640/400`
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-semibold text-sm">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
