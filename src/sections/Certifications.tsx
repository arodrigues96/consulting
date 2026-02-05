import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'
import { useLanguage } from '../contexts/LanguageContext'
import { Award } from 'lucide-react'

const certifications = [
  'AWS DevOps Engineer Professional',
  'AWS Solutions Architect Professional',
  'Terraform Associate',
  'AI Practitioner (AWS)',
  'SysOps Admin (AWS)',
]

export default function Certifications() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="certifications"
      className="section-padding bg-gray-50"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t('certifications.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('certifications.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-aws-orange/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-aws-orange" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cert}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
