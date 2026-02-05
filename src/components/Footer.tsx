import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative bg-white border-t border-gray-200">
      <div className="container-max py-12">
        <div className="text-center text-gray-500 text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
