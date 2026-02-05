import { motion, useScroll, useTransform } from 'framer-motion'
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const { t } = useLanguage()

  const skills = skillsKeys.map(({ key, icon }) => ({
    key,
    title: t(`skills.${key}.title`),
    description: t(`skills.${key}.desc`),
    icon,
  }))

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
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section
      ref={ref}
      id="skills"
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
            {t('skills.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600"
          >
            {t('skills.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto"
        >
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-aws-lightBlue/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-aws-lightBlue" />
                    </div>
                  </motion.div>
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
        </motion.div>
      </motion.div>
    </section>
  )
}
