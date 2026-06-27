import { useT } from '../i18n/LanguageContext'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import StationMap from '../components/guia/StationMap'
import ServicesPanel from '../components/guia/ServicesPanel'
import SafetyTips from '../components/guia/SafetyTips'
import LocalFavorites from '../components/guia/LocalFavorites'

export default function GuiaAlmagro() {
  const { t } = useT()
  return (
    <Container className="py-12 space-y-16">
      <SectionHeading title={t('guia.title')} subtitle={t('guia.subtitle')} centered />

      <section>
        <SectionHeading title={t('guia.aroundTitle')} />
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <StationMap />
          <ServicesPanel />
        </div>
      </section>

      <SafetyTips />
      <LocalFavorites />
    </Container>
  )
}
