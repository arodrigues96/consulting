import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'
import { Cloud, Settings, TrendingUp, Server } from 'lucide-react'

const skills = [
  {
    title: 'Administração de Ambientes',
    icon: Server,
    description: 'Gestão completa de infraestrutura cloud',
  },
  {
    title: 'Planejamento',
    icon: Settings,
    description: 'Estratégias personalizadas para sua empresa',
  },
  {
    title: 'Migração on-premise/AWS',
    icon: Cloud,
    description: 'Transição segura e eficiente para a nuvem',
  },
  {
    title: 'Otimização de Ambientes',
    icon: TrendingUp,
    description: 'Performance e custos otimizados',
  },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="section-padding bg-white"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Nossas Habilidades
          </h2>
          <p className="text-xl text-gray-600">
            Expertise em todas as áreas da computação em nuvem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-aws-lightBlue/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-aws-lightBlue" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
