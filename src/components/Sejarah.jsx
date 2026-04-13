import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaLandmark, FaScroll, FaFlag } from 'react-icons/fa'

const milestones = [
  {
    year: '732 M',
    icon: <FaLandmark />,
    title: 'Era Kerajaan Mataram Kuno',
    desc: 'Dinasti Syailendra membangun Candi Borobudur, salah satu keajaiban dunia yang kini menjadi warisan budaya UNESCO. Magelang menjadi pusat peradaban Buddha terbesar di Asia Tenggara.',
    color: 'from-gold-400 to-gold-600',
  },
  {
    year: '1755 M',
    icon: <FaScroll />,
    title: 'Kerajaan Mataram Kasultanan',
    desc: 'Perjanjian Giyanti membagi Mataram menjadi Kesultanan Yogyakarta dan Kasunanan Surakarta. Magelang berada di bawah kekuasaan Kesultanan Yogyakarta sebagai wilayah strategis.',
    color: 'from-primary-400 to-primary-600',
  },
  {
    year: '1811 M',
    icon: <FaLandmark />,
    title: 'Masa Penjajahan Belanda',
    desc: 'Belanda menjadikan Magelang sebagai kota garnisun penting. Infrastruktur kota dibangun termasuk jalan militer, benteng, dan gedung-gedung kolonial yang kini menjadi cagar budaya.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    year: '1812 M',
    icon: <FaLandmark />,
    title: 'Penemuan Kembali Borobudur',
    desc: 'Sir Thomas Stamford Raffles memimpin ekspedisi yang "menemukan kembali" Candi Borobudur yang tertutup abu vulkanik dan vegetasi hutan. Dimulainya upaya pemugaran besar-besaran.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    year: '1825–1830 M',
    icon: <FaFlag />,
    title: 'Perang Diponegoro',
    desc: 'Magelang menjadi salah satu arena pertempuran Perang Jawa atau Perang Diponegoro. Pangeran Diponegoro akhirnya ditangkap di Magelang melalui tipu muslihat Belanda pada 1830.',
    color: 'from-red-400 to-rose-600',
  },
  {
    year: '1945 M',
    icon: <FaFlag />,
    title: 'Kemerdekaan Indonesia',
    desc: 'Magelang turut berperan dalam perjuangan kemerdekaan. Kota ini menjadi bagian dari Provinsi Jawa Tengah dan terus berkembang sebagai pusat militer, pendidikan, dan pariwisata.',
    color: 'from-primary-400 to-primary-600',
  },
]

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex flex-col md:flex-row items-start gap-6 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Card */}
      <div className={`flex-1 glass-card p-6 card-hover ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
        <div className={`text-xs font-bold tracking-widest mb-2 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
          {item.year}
        </div>
        <h3 className="font-serif text-xl font-bold text-white mb-3">{item.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
      </div>

      {/* Center dot */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
          {item.icon}
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-white/20 to-transparent mt-2" style={{ minHeight: '40px' }} />
      </div>

      {/* Mobile dot (left) */}
      <div className={`md:hidden flex items-center gap-4 w-full`}>
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
          {item.icon}
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  )
}

export default function Sejarah() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="sejarah" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-dark-900 to-transparent pointer-events-none" />
      <div className="absolute -left-40 top-1/4 w-80 h-80 rounded-full bg-primary-900/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-1/4 w-80 h-80 rounded-full bg-gold-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Perjalanan Waktu
          </span>
          <h2 className="section-title mb-4">Sejarah Magelang</h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Lebih dari seribu tahun peradaban meninggalkan jejak yang tak tergantikan di bumi Magelang,
            dari kejayaan Kerajaan Mataram hingga era kemerdekaan Indonesia.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col gap-8 md:gap-6">
          {milestones.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
