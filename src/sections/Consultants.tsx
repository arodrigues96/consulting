import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'

const consultants = [
  {
    name: 'André Rodrigues',
    photo: '/placeholder-andre.jpg', // Placeholder - substituir por foto real
  },
  {
    name: 'Bolívar Dutra',
    photo: '/placeholder-bolivar.jpg', // Placeholder - substituir por foto real
  },
]

export default function Consultants() {
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
            Nossos Consultores
          </h2>
          <p className="text-xl text-gray-600">
            Especialistas certificados com experiência internacional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
          {consultants.map((consultant, index) => (
            <motion.div
              key={consultant.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-aws-orange to-aws-lightBlue flex items-center justify-center overflow-hidden shadow-2xl">
                  <span className="text-white text-4xl md:text-5xl font-bold">
                    {consultant.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                {consultant.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
