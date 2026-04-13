import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaStar, FaMountain, FaPray, FaCamera } from 'react-icons/fa'

const categories = ['Semua', 'Alam', 'Budaya', 'Religi']

const wisataData = [
  {
    id: 1,
    name: 'Candi Borobudur',
    category: 'Budaya',
    location: 'Kecamatan Borobudur',
    rating: 4.9,
    duration: '2–4 jam',
    desc: 'Candi Buddha terbesar di dunia dan Warisan Budaya UNESCO. Dibangun pada abad ke-9 dengan 2.672 panel relief dan 504 arca Buddha.',
    img: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=640&q=80',
    tag: 'UNESCO World Heritage',
    icon: <FaCamera />,
  },
  {
    id: 2,
    name: 'Ketep Pass',
    category: 'Alam',
    location: 'Sawangan, Kab. Magelang',
    rating: 4.7,
    duration: '1–3 jam',
    desc: 'Gardu pandang dengan pemandangan spektakuler Gunung Merapi dan Merbabu. Dilengkapi museum vulkanologi dan bioskop mini tentang letusan Merapi.',
    img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=640&q=80',
    tag: 'View Point Terbaik',
    icon: <FaMountain />,
  },
  {
    id: 3,
    name: 'Gunung Tidar',
    category: 'Alam',
    location: 'Kota Magelang',
    rating: 4.5,
    duration: '1–2 jam',
    desc: 'Bukit hijau di jantung Kota Magelang yang diyakini sebagai "Pakunya Pulau Jawa". Terdapat makam Syekh Subakir dan Pangeran Anis yang keramat.',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=640&q=80',
    tag: 'Wisata Alam & Religi',
    icon: <FaMountain />,
  },
  {
    id: 4,
    name: 'Candi Mendut',
    category: 'Religi',
    location: 'Mendut, Kab. Magelang',
    rating: 4.6,
    duration: '1–2 jam',
    desc: 'Candi Buddha dari abad ke-9 yang terkenal dengan tiga arca Buddha besar di dalamnya. Setiap tahun menjadi titik awal prosesi Waisak menuju Borobudur.',
    img: 'https://images.unsplash.com/photo-1604608672516-f1b9e2871ed5?w=640&q=80',
    tag: 'Situs Religi Bersejarah',
    icon: <FaPray />,
  },
  {
    id: 5,
    name: 'Taman Kyai Langgeng',
    category: 'Alam',
    location: 'Kota Magelang',
    rating: 4.4,
    duration: '2–3 jam',
    desc: 'Taman wisata keluarga seluas 27,5 hektar dengan koleksi tanaman langka, wahana permainan, dan pemandangan alam yang asri di tengah kota.',
    img: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=640&q=80',
    tag: 'Wisata Keluarga',
    icon: <FaCamera />,
  },
  {
    id: 6,
    name: 'Candi Pawon',
    category: 'Religi',
    location: 'Borobudur, Kab. Magelang',
    rating: 4.3,
    duration: '30–60 menit',
    desc: 'Candi Buddha kecil yang terletak di antara Mendut dan Borobudur. Dipercaya sebagai tempat peristirahatan sang raja sebelum naik ke Borobudur.',
    img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=640&q=80',
    tag: 'Segitiga Suci Borobudur',
    icon: <FaPray />,
  },
]

function WisataCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden card-hover group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.target.src = `https://picsum.photos/seed/${item.id}/640/400`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
            {item.tag}
          </span>
        </div>

        {/* Category */}
        <div className="absolute top-3 right-3">
          <span className="bg-dark-900/70 backdrop-blur-sm text-white/80 text-xs px-3 py-1 rounded-full border border-white/10">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-serif text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
            {item.name}
          </h3>
          <div className="flex items-center gap-1 text-gold-400 text-sm flex-shrink-0 ml-2">
            <FaStar />
            <span className="text-white/70">{item.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white/40 text-xs mb-3">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-primary-400" />
            {item.location}
          </span>
          <span className="flex items-center gap-1">
            <FaClock />
            {item.duration}
          </span>
        </div>

        <p className="text-white/55 text-sm leading-relaxed line-clamp-3">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Wisata() {
  const [activeFilter, setActiveFilter] = useState('Semua')
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  const filtered =
    activeFilter === 'Semua'
      ? wisataData
      : wisataData.filter((w) => w.category === activeFilter)

  return (
    <section id="wisata" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute -right-40 top-1/3 w-96 h-96 rounded-full bg-primary-900/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Destinasi Pilihan
          </span>
          <h2 className="section-title mb-4">Wisata Magelang</h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Dari candi berusia ribuan tahun hingga puncak gunung yang menakjubkan, Magelang
            menyimpan ragam destinasi wisata yang tak terlupakan.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-900/30'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <WisataCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
