import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown, FaMapMarkerAlt, FaStar } from 'react-icons/fa'

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('sejarah')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1920&q=85"
          alt="Borobudur Magelang"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: 'brightness(0.45) saturate(1.2)' }}
        />
        <div className="hero-gradient absolute inset-0" />
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-dark-900/60" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold-400/60 animate-float"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i * 0.4}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 mb-6"
        >
          <FaMapMarkerAlt className="text-primary-400" />
          <span>Jawa Tengah, Indonesia</span>
          <span className="text-white/40">•</span>
          <FaStar className="text-gold-400 text-xs" />
          <span>Destinasi Unggulan</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
        >
          <span className="text-white">Selamat Datang</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-primary-400 to-primary-500">
            di Magelang
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Kota bersejarah di kaki Gunung Merapi yang menyimpan
          warisan budaya dunia, kuliner otentik, dan alam yang memesona.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {[
            { value: '1200+', label: 'Tahun Sejarah' },
            { value: '50+', label: 'Destinasi Wisata' },
            { value: '30+', label: 'Kuliner Khas' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400 font-serif">{stat.value}</div>
              <div className="text-white/50 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => document.getElementById('wisata')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base px-8 py-4"
          >
            Jelajahi Wisata
          </button>
          <button
            onClick={() => document.getElementById('sejarah')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline text-base px-8 py-4"
          >
            Pelajari Sejarah
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <FaChevronDown className="animate-bounce" />
      </motion.button>
    </section>
  )
}
