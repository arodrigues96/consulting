import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'
import { useLanguage } from '../contexts/LanguageContext'
import { X } from 'lucide-react'

interface ClientCase {
  client: string
  title: string
  description: string
  challenges: string[]
  solution: string[]
  results: string[]
}

const clientCases: Record<string, ClientCase> = {
  'Boston Celtics': {
    client: 'Boston Celtics',
    title: 'Infraestrutura de Streaming e Analytics em Tempo Real',
    description: 'Solução AWS para suportar streaming de jogos ao vivo, análise de performance em tempo real e plataforma de fan engagement.',
    challenges: [
      'Picos de tráfego durante jogos ao vivo (até 10x o tráfego normal)',
      'Processamento de dados de analytics em tempo real',
      'Alta disponibilidade durante eventos críticos'
    ],
    solution: [
      'Arquitetura serverless com AWS Lambda e API Gateway para escalabilidade automática',
      'Amazon CloudFront para distribuição global de conteúdo',
      'Amazon Kinesis para processamento de streaming de dados em tempo real',
      'Amazon DynamoDB para armazenamento de métricas de performance',
      'AWS Auto Scaling Groups para EC2 instances durante eventos',
      'Amazon S3 para armazenamento de vídeos e highlights'
    ],
    results: [
      '99.9% de uptime durante temporada regular e playoffs',
      'Redução de 40% nos custos de infraestrutura com serverless',
      'Latência de streaming reduzida em 60% com CloudFront',
      'Processamento de 50M+ eventos de analytics por jogo'
    ]
  },
  'Moderna Pharmaceutics': {
    client: 'Moderna Pharmaceutics',
    title: 'Plataforma de Pesquisa e Desenvolvimento Farmacêutico',
    description: 'Infraestrutura AWS para suportar pesquisas genômicas, análise de dados clínicos e colaboração global de equipes de pesquisa.',
    challenges: [
      'Processamento de grandes volumes de dados genômicos (petabytes)',
      'Conformidade com regulamentações HIPAA e FDA',
      'Colaboração segura entre equipes globais'
    ],
    solution: [
      'Amazon EMR para processamento de big data genômico com Spark',
      'AWS Glue para ETL de dados clínicos',
      'Amazon S3 com versionamento e lifecycle policies para dados de pesquisa',
      'AWS PrivateLink para conexões seguras entre VPCs',
      'Amazon RDS com encryption at rest e in transit',
      'AWS Systems Manager para compliance e auditoria',
      'Amazon SageMaker para modelos de machine learning em pesquisa'
    ],
    results: [
      'Processamento de análises genômicas 10x mais rápido',
      '100% de conformidade com HIPAA e FDA',
      'Redução de 50% no tempo de análise de dados clínicos',
      'Colaboração segura entre 15+ laboratórios globais'
    ]
  },
  'DreamWorks': {
    client: 'DreamWorks',
    title: 'Render Farm e Pipeline de Produção de Animação',
    description: 'Infraestrutura AWS para renderização de animações, armazenamento de assets e pipeline de produção distribuído.',
    challenges: [
      'Renderização de frames de animação (milhões de horas de CPU)',
      'Armazenamento de terabytes de assets por projeto',
      'Pipeline de produção distribuído globalmente'
    ],
    solution: [
      'Amazon EC2 Spot Instances para render farm (milhares de instâncias)',
      'AWS Batch para gerenciamento de jobs de renderização',
      'Amazon FSx for Lustre para armazenamento de alta performance',
      'Amazon S3 com Intelligent-Tiering para assets de produção',
      'AWS DataSync para sincronização de assets entre locais',
      'Amazon ECS para pipeline de processamento de vídeo',
      'AWS Direct Connect para conexão de alta velocidade com estúdios'
    ],
    results: [
      'Renderização de projetos 5x mais rápida com Spot Instances',
      'Redução de 60% nos custos de render farm',
      'Armazenamento de 500+ TB de assets com alta disponibilidade',
      'Pipeline de produção 24/7 com alta disponibilidade'
    ]
  },
  'Playbill': {
    client: 'Playbill',
    title: 'Plataforma de Conteúdo e E-commerce Teatral',
    description: 'Solução AWS para plataforma de conteúdo teatral, e-commerce de ingressos e aplicativo móvel com sincronização em tempo real.',
    challenges: [
      'Picos de tráfego durante vendas de ingressos (eventos populares)',
      'Sincronização de inventário em tempo real',
      'Experiência de usuário fluida em múltiplos dispositivos'
    ],
    solution: [
      'Amazon CloudFront com Lambda@Edge para personalização de conteúdo',
      'Amazon ElastiCache (Redis) para cache de sessões e inventário',
      'Amazon RDS Multi-AZ para banco de dados altamente disponível',
      'AWS AppSync para GraphQL API com sincronização em tempo real',
      'Amazon SQS para processamento assíncrono de pedidos',
      'AWS WAF para proteção contra bots e DDoS',
      'Amazon Pinpoint para notificações push e email marketing'
    ],
    results: [
      'Suporte a 100K+ usuários simultâneos durante vendas de ingressos',
      'Tempo de carregamento reduzido em 70% com CloudFront',
      '99.99% de disponibilidade durante eventos críticos',
      'Aumento de 35% em conversões de e-commerce'
    ]
  },
  'Asics': {
    client: 'Asics',
    title: 'Plataforma de E-commerce e Analytics de Performance',
    description: 'Infraestrutura AWS para e-commerce global, análise de dados de wearables e aplicativo de fitness com processamento de dados em tempo real.',
    challenges: [
      'E-commerce global com baixa latência em múltiplas regiões',
      'Processamento de dados de wearables (milhões de dispositivos)',
      'Análise de performance atlética em tempo real'
    ],
    solution: [
      'Multi-region deployment com Amazon Route 53 para roteamento geográfico',
      'Amazon DynamoDB Global Tables para dados de usuários replicados',
      'Amazon Kinesis Data Streams para ingestão de dados de wearables',
      'Amazon Redshift para data warehouse de analytics',
      'Amazon EKS para aplicações containerizadas',
      'AWS Lambda para processamento serverless de eventos',
      'Amazon CloudWatch para monitoramento e alertas',
      'AWS Step Functions para orquestração de workflows de analytics'
    ],
    results: [
      'Latência reduzida em 50% para usuários globais',
      'Processamento de 1B+ eventos de wearables por mês',
      'Redução de 45% nos custos de infraestrutura',
      'Insights de analytics disponíveis em tempo quase real'
    ]
  }
}

const clients = [
  'Boston Celtics',
  'Moderna Pharmaceutics',
  'DreamWorks',
  'Playbill',
  'Asics',
]

export default function Clients() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const { t } = useLanguage()
  const [selectedClient, setSelectedClient] = useState<string | null>(null)

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
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section
      ref={ref}
      id="clients"
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
            {t('clients.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600"
          >
            {t('clients.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto mb-12 px-4"
        >
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6"
          >
            {t('clients.description')}
          </motion.p>
          <motion.ul
            variants={containerVariants}
            className="space-y-3 mb-6 text-left"
          >
            {[
              t('clients.bullet1'),
              t('clients.bullet2'),
              t('clients.bullet3'),
              t('clients.bullet4')
            ].map((bullet, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 text-base sm:text-lg text-gray-700"
              >
                <span className="text-aws-orange mt-1">•</span>
                <span>{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-700 font-medium mb-4"
          >
            {t('clients.including')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {clients.map((client) => (
            <motion.div
              key={client}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              className="text-center"
            >
              <div
                onClick={() => setSelectedClient(client)}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-aws-lightBlue active:border-aws-lightBlue hover:shadow-xl active:shadow-lg transition-all cursor-pointer touch-manipulation"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                  {client}
                </h3>
                <p className="text-sm sm:text-base text-aws-orange font-medium">
                  {t('clients.clickToLearn')}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedClient && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedClient(null)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-16 xl:inset-32 z-50 bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[90vh]"
            >
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="flex justify-between items-start mb-4 sm:mb-6 gap-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 flex-1 pr-2">
                    {clientCases[selectedClient]?.client}
                  </h2>
                  <button
                    onClick={() => setSelectedClient(null)}
                    className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors flex-shrink-0 touch-manipulation"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {clientCases[selectedClient]?.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      {clientCases[selectedClient]?.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {t('clients.modal.challenges')}
                    </h4>
                    <ul className="space-y-2">
                      {clientCases[selectedClient]?.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                          <span className="text-aws-orange mt-1 flex-shrink-0">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {t('clients.modal.solution')}
                    </h4>
                    <ul className="space-y-2">
                      {clientCases[selectedClient]?.solution.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                          <span className="text-aws-lightBlue mt-1 flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {t('clients.modal.results')}
                    </h4>
                    <ul className="space-y-2">
                      {clientCases[selectedClient]?.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                          <span className="text-green-600 mt-1 flex-shrink-0">→</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
