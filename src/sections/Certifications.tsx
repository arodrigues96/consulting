import { motion, useScroll, useTransform } from 'framer-motion'
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
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section
      ref={ref}
      id="certifications"
      className="section-padding bg-gray-50 relative overflow-hidden"
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
            {t('certifications.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600"
          >
            {t('certifications.subtitle')}
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Top row: 3 certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6"
          >
            {topCertifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8 }}
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
          </motion.div>

          {/* Bottom row: 2 certifications centered */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="flex justify-center gap-12 md:gap-16"
          >
            {bottomCertifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8 }}
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
