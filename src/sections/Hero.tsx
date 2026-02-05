import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-white to-gray-50 pt-20 md:pt-24"
    >
      <motion.div
        style={{ opacity, y }}
        className="container-max text-center w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-gray-900 tracking-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-3 sm:mb-4 font-light"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mt-6 sm:mt-8 px-4"
          >
            {t('hero.description')}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
