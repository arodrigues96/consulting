import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'
import { useLanguage } from '../contexts/LanguageContext'

const consultants = [
  {
    name: 'André Rodrigues',
    photo: '/andre.jpg',
  },
  {
    name: 'Bolívar Dutra',
    photo: '/boli.png',
  },
]

export default function Consultants() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="consultants"
      className="section-padding bg-white"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t('consultants.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('consultants.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto mb-16">
          {consultants.map((consultant, index) => (
            <motion.div
              key={consultant.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-gray-100">
                  <img
                    src={consultant.photo}
                    alt={consultant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                {consultant.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {t('consultants.description')}
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {t('consultants.expertise')}
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {t('consultants.market')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
