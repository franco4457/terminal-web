import { useT } from '../../i18n/LanguageContext'
import { images } from '../../data/images'
import Container from '../layout/Container'
import SearchForm from './SearchForm'

export default function Hero() {
  const { t } = useT()
  return (
    <section className="relative">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${images.heroTerminal})` }}
      >
        <div className="bg-primary-900/70">
          <Container className="py-20 text-center md:py-28">
            <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {t('home.heroTitle')}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">{t('home.heroSubtitle')}</p>
          </Container>
        </div>
      </div>
      <Container className="relative z-10 -mt-12 md:-mt-16">
        <SearchForm />
      </Container>
    </section>
  )
}
