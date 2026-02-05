import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'
import { useLanguage } from '../contexts/LanguageContext'
import { Cloud, Code, BarChart3, Database, GitBranch, Activity, Cpu, RefreshCw } from 'lucide-react'

const skillsKeys = [
  { key: 'admin', icon: Database },
  { key: 'planning', icon: Code },
  { key: 'migration', icon: Cloud },
  { key: 'optimization', icon: BarChart3 },
  { key: 'cicd', icon: GitBranch },
  { key: 'monitoring', icon: Activity },
  { key: 'automation', icon: Cpu },
  { key: 'migrations', icon: RefreshCw },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })
  const { t } = useLanguage()

  const skills = skillsKeys.map(({ key, icon }) => ({
    key,
    title: t(`skills.${key}.title`),
    description: t(`skills.${key}.desc`),
    icon,
  }))

  return (
    <section
      ref={ref}
      id="skills"
      className="section-padding bg-white"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aws-lightBlue/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-aws-lightBlue" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
