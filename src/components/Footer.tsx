import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200">
      <div className="container-max py-12">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center justify-center"
        >
          <p className="text-sm text-gray-600 mb-3 font-medium">Continue explorando</p>
          <ChevronDown className="w-8 h-8 text-aws-orange" />
        </motion.div>
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2024 AWS Consulting. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
