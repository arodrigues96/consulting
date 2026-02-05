import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollBottom = scrollTop + windowHeight

      // Mostrar apenas se não chegou no final (com margem de 100px)
      const isNearBottom = scrollBottom >= documentHeight - 100
      setIsVisible(!isNearBottom)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Verificar estado inicial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
          style={{ left: '50%' }}
        >
          <motion.button
            onClick={scrollDown}
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center gap-2 bg-transparent pointer-events-auto cursor-pointer"
          >
            <p className="text-sm md:text-base text-gray-600 font-medium whitespace-nowrap">{t('footer.continue')}</p>
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-aws-orange" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
