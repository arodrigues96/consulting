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
    'consultants.description': 'Juntos, somam mais de 15 anos de experiência em computação e computação em nuvem, atuando em projetos de alta complexidade e impacto. Possuem certificações reconhecidas internacionalmente, como AWS DevOps Engineer Professional, AWS Solutions Architect Professional, Terraform Associate, AWS SysOps Administrator, AI Practitioner, entre outras.',
    'consultants.expertise': 'Especialistas em administração, planejamento, migração e otimização de ambientes on-premise e em nuvem, ajudam empresas a alcançarem maior eficiência, segurança e escalabilidade.',
    'consultants.market': 'Com forte atuação no mercado internacional, trabalham com as tecnologias mais atuais e melhores práticas do setor.',
    
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
    'clients.description': 'Nossa equipe ajudou a entregar soluções AWS escaláveis para organizações que suportam:',
    'clients.bullet1': 'Plataformas de mídia e entretenimento de alto tráfego',
    'clients.bullet2': 'Sistemas críticos de saúde e ciências da vida',
    'clients.bullet3': 'Marcas globais de varejo e consumo',
    'clients.bullet4': 'Organizações de esportes profissionais',
    'clients.including': 'Incluindo trabalhos relacionados a:',
    'clients.clickToLearn': 'Clique e saiba mais',
    'clients.modal.challenges': 'Desafios',
    'clients.modal.solution': 'Solução AWS',
    'clients.modal.results': 'Resultados',
    
    // Footer
    'footer.continue': 'Continue explorando',
    'footer.copyright': '© 2026 AB Consulting. Todos os direitos reservados.',
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
    'consultants.description': 'Together, they have over 15 years of experience in computing and cloud computing, working on high-complexity and high-impact projects. They hold internationally recognized certifications, such as AWS DevOps Engineer Professional, AWS Solutions Architect Professional, Terraform Associate, AWS SysOps Administrator, AI Practitioner, among others.',
    'consultants.expertise': 'Specialists in administration, planning, migration and optimization of on-premise and cloud environments, helping companies achieve greater efficiency, security and scalability.',
    'consultants.market': 'With strong presence in the international market, they work with the most current technologies and best practices in the industry.',
    
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
    'clients.description': 'Our team has helped deliver scalable AWS solutions for organizations supporting:',
    'clients.bullet1': 'High-traffic media and entertainment platforms',
    'clients.bullet2': 'Mission-critical healthcare and life sciences systems',
    'clients.bullet3': 'Global retail and consumer brands',
    'clients.bullet4': 'Professional sports organizations',
    'clients.including': 'Including work connected to:',
    'clients.clickToLearn': 'Click to learn more',
    'clients.modal.challenges': 'Challenges',
    'clients.modal.solution': 'AWS Solution',
    'clients.modal.results': 'Results',
    
    // Footer
    'footer.continue': 'Keep exploring',
    'footer.copyright': '© 2026 AB Consulting. All rights reserved.',
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
