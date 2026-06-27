import { useT } from '../i18n/LanguageContext'
import { images } from '../data/images'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import CtaBanner from '../components/ui/CtaBanner'
import Button from '../components/ui/Button'
import BenefitsGrid from '../components/beneficios/BenefitsGrid'
import FaqAccordion from '../components/beneficios/FaqAccordion'

export default function Beneficios() {
  const { t } = useT()
  return (
    <Container className="py-12 space-y-16">
      {/* Hero */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {t('beneficios.heroTitle')}
          </h1>
          <p className="mt-4 text-muted">{t('beneficios.heroBody')}</p>
          <Button className="mt-6">{t('beneficios.registrarme')}</Button>
        </div>
        <img
          src={images.students}
          alt={t('beneficios.heroTitle')}
          className="h-72 w-full rounded-2xl object-cover md:h-80"
        />
      </section>

      {/* Beneficios */}
      <section>
        <SectionHeading title={t('beneficios.benefitsTitle')} centered />
        <BenefitsGrid />
      </section>

      {/* FAQ */}
      <section>
        <SectionHeading title={t('beneficios.faqTitle')} centered />
        <FaqAccordion />
      </section>

      {/* CTA */}
      <CtaBanner title={t('beneficios.ctaTitle')} body={t('beneficios.ctaBody')}>
        <Button>{t('beneficios.ctaButton')}</Button>
      </CtaBanner>
    </Container>
  )
}
