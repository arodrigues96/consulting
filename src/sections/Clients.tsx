import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'

const clients = [
  'Boston Celtics',
  'Moderna Pharmaceutics',
  'DreamWorks',
  'Playbill',
  'Asics',
]

export default function Clients() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 })

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
            Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600">
            Empresas líderes que confiam em nossa expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-aws-lightBlue hover:shadow-lg transition-all">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {client}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
