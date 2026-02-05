import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  pt: {
    // Navigation
    'nav.projects': 'Projetos',
    'nav.clients': 'Clientes',
    'nav.skills': 'Nossas Habilidades',
    'nav.consultants': 'Consultores',
    'nav.certifications': 'Certificações',
    
    // Hero
    'hero.title': 'AB Solutions',
    'hero.subtitle': 'Especialistas em Computação em Nuvem',
    'hero.description': 'Mais de 15 anos de experiência transformando infraestruturas e otimizando ambientes cloud',
    
    // Consultants
    'consultants.title': 'Nossos Consultores',
    'consultants.subtitle': 'Especialistas certificados com experiência internacional',
    
    // Certifications
    'certifications.title': 'Certificações',
    'certifications.subtitle': 'Credenciais que comprovam nossa expertise',
    
    // Skills
    'skills.title': 'Nossas Habilidades',
    'skills.subtitle': 'Expertise em todas as áreas da computação em nuvem',
    'skills.admin.title': 'Administração de Ambientes',
    'skills.admin.desc': 'Gestão completa de infraestrutura cloud',
    'skills.planning.title': 'Planejamento',
    'skills.planning.desc': 'Estratégias personalizadas para sua empresa',
    'skills.migration.title': 'Migração on-premise/AWS',
    'skills.migration.desc': 'Transição segura e eficiente para a nuvem',
    'skills.optimization.title': 'Otimização de Ambientes',
    'skills.optimization.desc': 'Performance e custos otimizados',
    'skills.cicd.title': 'Implementação de CI/CD',
    'skills.cicd.desc': 'Automação completa de pipelines de desenvolvimento e deploy',
    'skills.monitoring.title': 'Implementação de monitoramento e observabilidade',
    'skills.monitoring.desc': 'Sistemas completos de monitoramento, logging e métricas',
    'skills.automation.title': 'Automação de processos',
    'skills.automation.desc': 'Automação de workflows e processos de infraestrutura',
    'skills.migrations.title': 'Migrações de on-premise para nuvem e nuvem-nuvem',
    'skills.migrations.desc': 'Migrações seguras e eficientes entre ambientes',
    
    // Projects
    'projects.title': 'Projetos Realizados',
    'projects.subtitle': 'Soluções implementadas com sucesso',
    
    // Clients
    'clients.title': 'Nossos Clientes',
    'clients.subtitle': 'Empresas líderes que confiam em nossa expertise',
    
    // Footer
    'footer.continue': 'Continue explorando',
    'footer.copyright': '© 2024 AWS Consulting. Todos os direitos reservados.',
  },
  en: {
    // Navigation
    'nav.projects': 'Projects',
    'nav.clients': 'Clients',
    'nav.skills': 'Our Skills',
    'nav.consultants': 'Consultants',
    'nav.certifications': 'Certifications',
    
    // Hero
    'hero.title': 'AB Solutions',
    'hero.subtitle': 'Cloud Computing Specialists',
    'hero.description': 'Over 15 years of experience transforming infrastructures and optimizing cloud environments',
    
    // Consultants
    'consultants.title': 'Our Consultants',
    'consultants.subtitle': 'Certified specialists with international experience',
    
    // Certifications
    'certifications.title': 'Certifications',
    'certifications.subtitle': 'Credentials that prove our expertise',
    
    // Skills
    'skills.title': 'Our Skills',
    'skills.subtitle': 'Expertise in all areas of cloud computing',
    'skills.admin.title': 'Environment Administration',
    'skills.admin.desc': 'Complete cloud infrastructure management',
    'skills.planning.title': 'Planning',
    'skills.planning.desc': 'Customized strategies for your company',
    'skills.migration.title': 'On-premise/AWS Migration',
    'skills.migration.desc': 'Safe and efficient transition to the cloud',
    'skills.optimization.title': 'Environment Optimization',
    'skills.optimization.desc': 'Optimized performance and costs',
    'skills.cicd.title': 'CI/CD Implementation',
    'skills.cicd.desc': 'Complete automation of development and deployment pipelines',
    'skills.monitoring.title': 'Monitoring and Observability Implementation',
    'skills.monitoring.desc': 'Complete monitoring, logging and metrics systems',
    'skills.automation.title': 'Process Automation',
    'skills.automation.desc': 'Automation of workflows and infrastructure processes',
    'skills.migrations.title': 'On-premise to Cloud and Cloud-to-Cloud Migrations',
    'skills.migrations.desc': 'Safe and efficient migrations between environments',
    
    // Projects
    'projects.title': 'Completed Projects',
    'projects.subtitle': 'Successfully implemented solutions',
    
    // Clients
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Leading companies that trust our expertise',
    
    // Footer
    'footer.continue': 'Keep exploring',
    'footer.copyright': '© 2024 AWS Consulting. All rights reserved.',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  useEffect(() => {
    // Tentar detectar idioma baseado na geolocalização ou preferência do navegador
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('en')) {
      setLanguage('en')
    } else {
      setLanguage('pt')
    }
  }, [])

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.pt] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
