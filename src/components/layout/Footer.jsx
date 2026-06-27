import { Bus } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import Container from './Container'

export default function Footer() {
  const { t } = useT()
  const links = ['footer.horarios', 'footer.seguridad', 'footer.privacidad', 'footer.contacto']

  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 font-semibold text-primary-900">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary-900 text-white">
            <Bus size={16} />
          </span>
          {t('brand')}
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((key) => (
            <a key={key} href="#" className="text-sm text-muted hover:text-primary-700">
              {t(key)}
            </a>
          ))}
        </nav>
      </Container>
      <div className="border-t border-line">
        <Container className="py-4">
          <p className="text-xs text-muted">{t('footer.copyright')}</p>
        </Container>
      </div>
    </footer>
  )
}
