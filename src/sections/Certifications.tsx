import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'
import { useLanguage } from '../contexts/LanguageContext'

// Top row: 3 certifications
const topCertifications = [
  {
    name: 'AWS - DevOps Engineer Professional',
    image: `${import.meta.env.BASE_URL}certificates/devops-pro.png`,
  },
  {
    name: 'AWS - Solutions Architect Professional',
    image: `${import.meta.env.BASE_URL}certificates/solutions-architect-pro.png`,
  },
  {
    name: 'AWS - SysOps Admin',
    image: `${import.meta.env.BASE_URL}certificates/sysops.png`,
  },
]

// Bottom row: 2 certifications (centered)
const bottomCertifications = [
  {
    name: 'AWS - AI Early Adopter',
    image: `${import.meta.env.BASE_URL}certificates/aws-ai-early-adopter.png`,
  },
  {
    name: 'Hashicorp - Terraform Associate',
    image: `${import.meta.env.BASE_URL}certificates/terraform.png`,
  },
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('certifications.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            {t('certifications.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Top row: 3 certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {topCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 w-48 h-48 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {cert.name}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: 2 certifications centered */}
          <div className="flex justify-center gap-12 md:gap-16">
            {bottomCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 w-48 h-48 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {cert.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
