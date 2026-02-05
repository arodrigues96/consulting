import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'
import { useLanguage } from '../contexts/LanguageContext'

const projects = [
  'Implementação de CI/CD',
  'Monitoramento e Observabilidade',
  'Automação de processos',
  'Migrações on-premise → nuvem',
  'Migrações nuvem-nuvem',
  'AWS Org Management',
  'Implementação de VPN',
  'Análise de FinOps para redução de custos',
  'Rightsizing de infraestrutura',
  'SSO',
  'Sys Admin',
  'Documentação e Padronização de processos',
  'Treinamentos',
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section
      ref={ref}
      id="projects"
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
            {t('projects.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600"
          >
            {t('projects.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-aws-orange/30 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-aws-orange"></div>
                <h3 className="text-lg font-medium text-gray-900">
                  {project}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
