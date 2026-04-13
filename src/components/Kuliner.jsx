import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FaFire, FaLeaf, FaStar } from 'react-icons/fa'

const kulinerData = [
  {
    id: 1,
    name: 'Kupat Tahu Magelang',
    desc: 'Ketupat dengan tahu goreng, tauge, dan sayur kol, disiram bumbu kacang manis gurih khas Magelang. Menjadi sarapan favorit warga setempat sejak turun-temurun.',
    origin: 'Kota Magelang',
    price: 'Rp 10.000 – 18.000',
    spicy: 1,
    rating: 4.9,
    vegetarian: true,
    img: 'https://cdn.pixabay.com/photo/2022/09/07/07/03/food-7438574_640.jpg',
    emoji: '🥗',
    tags: ['Sarapan', 'Khas Magelang'],
  },
  {
    id: 2,
    name: 'Soto Magelang',
    desc: 'Soto dengan kuah bening segar berisi daging ayam suwir, tempe goreng, tauge, dan lontong. Disajikan dengan sambal dan krupuk, menghangatkan di segala cuaca.',
    origin: 'Kota Magelang',
    price: 'Rp 15.000 – 25.000',
    spicy: 2,
    rating: 4.8,
    vegetarian: false,
    img: 'https://cdn.pixabay.com/photo/2020/05/25/10/38/soup-5218568_640.jpg',
    emoji: '🍜',
    tags: ['Makanan Berat', 'Legendaris'],
  },
  {
    id: 3,
    name: 'Gethuk Magelang',
    desc: 'Kue tradisional dari singkong yang dihaluskan kemudian diberi warna-warni dan rasa berbeda. Oleh-oleh ikonik Magelang yang wajib dibawa pulang.',
    origin: 'Kab. Magelang',
    price: 'Rp 5.000 – 15.000',
    spicy: 0,
    rating: 4.7,
    vegetarian: true,
    img: 'https://cdn.pixabay.com/photo/2017/07/23/23/57/cake-2533201_640.jpg',
    emoji: '🍡',
    tags: ['Oleh-oleh', 'Jajanan Pasar'],
  },
  {
    id: 4,
    name: 'Nasi Lesah',
    desc: 'Nasi dengan lauk tempe, tahu, dan daging yang dimasak dengan santan kental berbumbu rempah. Disajikan dengan taburan bawang goreng renyah dan hidangan sayur.',
    origin: 'Kota Magelang',
    price: 'Rp 12.000 – 22.000',
    spicy: 1,
    rating: 4.6,
    vegetarian: false,
    img: 'https://cdn.pixabay.com/photo/2020/02/15/11/31/rice-4850872_640.jpg',
    emoji: '🍚',
    tags: ['Makanan Berat', 'Tradisional'],
  },
  {
    id: 5,
    name: 'Bongko Kopyor',
    desc: 'Minuman es segar berisi kelapa muda kopyor, kolang-kaling, dan roti tawar yang direndam dalam kuah santan manis berwarna merah jambu muda yang menyegarkan.',
    origin: 'Kab. Magelang',
    price: 'Rp 8.000 – 15.000',
    spicy: 0,
    rating: 4.5,
    vegetarian: true,
    img: 'https://cdn.pixabay.com/photo/2016/03/05/22/29/dessert-1239149_640.jpg',
    emoji: '🥤',
    tags: ['Minuman', 'Oleh-oleh'],
  },
  {
    id: 6,
    name: 'Ayam Goreng Magelang',
    desc: 'Ayam kampung goreng dengan bumbu bacem khas Magelang yang meresap sempurna. Disajikan dengan lalapan segar, sambal tomat pedas, dan nasi putih hangat.',
    origin: 'Kota Magelang',
    price: 'Rp 25.000 – 50.000',
    spicy: 3,
    rating: 4.8,
    vegetarian: false,
    img: 'https://cdn.pixabay.com/photo/2019/01/31/09/31/chicken-3966598_640.jpg',
    emoji: '🍗',
    tags: ['Makanan Berat', 'Populer'],
  },
]

function SpicyIndicator({ level }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3].map((i) => (
        <FaFire
          key={i}
          className={`text-xs ${i <= level ? 'text-red-400' : 'text-white/20'}`}
        />
      ))}
    </div>
  )
}

export default function Kuliner() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="kuliner" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute -left-40 top-1/4 w-96 h-96 rounded-full bg-gold-600/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Cita Rasa Otentik
          </span>
          <h2 className="section-title mb-4">Kuliner Magelang</h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Magelang menawarkan pengalaman kuliner yang kaya — dari sarapan pagi di alun-alun
            hingga jajanan pasar yang menggugah selera.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            breakpoints={{
              480:  { slidesPerView: 1.5 },
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14 px-2"
          >
            {kulinerData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="glass-card overflow-hidden card-hover group h-full">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/${item.id + 10}/640/400`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />

                    {/* Emoji badge */}
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-dark-900/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xl">
                      {item.emoji}
                    </div>

                    {/* Vegetarian badge */}
                    {item.vegetarian && (
                      <div className="absolute top-3 right-3 bg-green-500/90 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <FaLeaf className="text-xs" />
                        <span>Vegetarian</span>
                      </div>
                    )}

                    {/* Price */}
                    <div className="absolute bottom-3 right-3 bg-dark-900/80 backdrop-blur-sm text-gold-400 text-xs font-semibold px-3 py-1 rounded-full border border-gold-400/20">
                      {item.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-400 transition-colors leading-tight">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1 text-gold-400 text-sm ml-2 flex-shrink-0">
                        <FaStar />
                        <span className="text-white/60 text-xs">{item.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/40 text-xs">{item.origin}</span>
                      <SpicyIndicator level={item.spicy} />
                    </div>

                    <p className="text-white/55 text-sm leading-relaxed line-clamp-3 mb-3">{item.desc}</p>

                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-white/5 border border-white/10 text-white/50 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
