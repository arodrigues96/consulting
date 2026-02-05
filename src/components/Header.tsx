import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Menu, X } from 'lucide-react'
import { BrazilFlag, USFlag } from './Flags'

const menuItems = [
  { key: 'consultants', id: 'consultants' },
  { key: 'certifications', id: 'certifications' },
  { key: 'skills', id: 'skills' },
  { key: 'projects', id: 'projects' },
  { key: 'clients', id: 'clients' },
]

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80 // Altura aproximada do header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <nav className="flex items-center justify-between py-3 md:py-4">
          {/* Logo/Title */}
          <div className="flex items-center">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setMobileMenuOpen(false)
              }}
              className="text-xl md:text-2xl font-bold text-gray-900 hover:text-aws-orange transition-colors"
            >
              AB Solutions
            </button>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-aws-orange font-medium transition-colors text-sm lg:text-base"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Language Selector - Desktop: absolute right, Mobile: normal */}
            <div className="hidden md:flex items-center gap-1.5 absolute right-4 sm:right-6">
              <button
                onClick={() => setLanguage('pt')}
                className={`p-1 rounded-lg transition-all ${
                  language === 'pt'
                    ? 'bg-aws-orange/20 ring-2 ring-aws-orange'
                    : 'hover:bg-gray-100'
                }`}
                title="Português"
              >
                <BrazilFlag className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`p-1 rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-aws-orange/20 ring-2 ring-aws-orange'
                    : 'hover:bg-gray-100'
                }`}
                title="English"
              >
                <USFlag className="w-4 h-4" />
              </button>
            </div>
            {/* Language Selector - Mobile */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                onClick={() => setLanguage('pt')}
                className={`p-1 rounded-lg transition-all ${
                  language === 'pt'
                    ? 'bg-aws-orange/20 ring-2 ring-aws-orange'
                    : 'hover:bg-gray-100'
                }`}
                title="Português"
              >
                <BrazilFlag className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`p-1 rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-aws-orange/20 ring-2 ring-aws-orange'
                    : 'hover:bg-gray-100'
                }`}
                title="English"
              >
                <USFlag className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-aws-orange transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-aws-orange font-medium transition-colors py-2"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
