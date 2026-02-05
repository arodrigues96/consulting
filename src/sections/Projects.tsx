import { motion } from 'framer-motion'
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
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="projects"
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
            {t('projects.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-aws-orange/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-aws-orange"></div>
                <h3 className="text-lg font-medium text-gray-900">
                  {project}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
