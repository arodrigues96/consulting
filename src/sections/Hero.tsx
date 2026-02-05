import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900 tracking-tight">
            Consultoria AWS
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4 font-light">
            Especialistas em Computação em Nuvem
          </p>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mt-8">
            Mais de <span className="font-semibold text-aws-orange">15 anos</span> de experiência
            transformando infraestruturas e otimizando ambientes cloud
          </p>
        </motion.div>
      </div>
    </section>
  )
}
