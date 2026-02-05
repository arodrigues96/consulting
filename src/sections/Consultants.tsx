import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'
import { useLanguage } from '../contexts/LanguageContext'

const consultants = [
  {
    name: 'André Rodrigues',
    photo: `${import.meta.env.BASE_URL}andre.jpg`,
  },
  {
    name: 'Bolívar Dutra',
    photo: `${import.meta.env.BASE_URL}boli.png`,
  },
]

export default function Consultants() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section
      ref={ref}
      id="consultants"
      className="section-padding bg-white relative overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="container-max"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            {t('consultants.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600"
          >
            {t('consultants.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto mb-16">
          {consultants.map((consultant, index) => (
            <motion.div
              key={consultant.name}
              variants={itemVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="text-center"
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-gray-100">
                  <motion.img
                    src={consultant.photo}
                    alt={consultant.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
              <motion.h3
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
              >
                {consultant.name}
              </motion.h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 px-4"
        >
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            {t('consultants.description')}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            {t('consultants.expertise')}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            {t('consultants.market')}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
