import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-white to-gray-50 pt-20 md:pt-24"
    >
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-gray-900 tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-3 sm:mb-4 font-light">
            {t('hero.subtitle')}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mt-6 sm:mt-8 px-4">
            {t('hero.description')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
