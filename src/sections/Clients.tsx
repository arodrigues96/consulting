import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'
import { useLanguage } from '../contexts/LanguageContext'

const clients = [
  'Boston Celtics',
  'Moderna Pharmaceutics',
  'DreamWorks',
  'Playbill',
  'Asics',
]

export default function Clients() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section
      ref={ref}
      id="clients"
      className="section-padding bg-white relative overflow-hidden"
    >
      <motion.div
        style={{ y }}
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
            {t('clients.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600"
          >
            {t('clients.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {clients.map((client) => (
            <motion.div
              key={client}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-aws-lightBlue hover:shadow-xl transition-all cursor-pointer">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                  {client}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
