import { useT } from '../i18n/LanguageContext'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import CtaBanner from '../components/ui/CtaBanner'
import Button from '../components/ui/Button'
import TerminalMap from '../components/informacion/TerminalMap'
import ServicesLegend from '../components/informacion/ServicesLegend'
import AssistanceCard from '../components/informacion/AssistanceCard'
import AccessibilityInfo from '../components/informacion/AccessibilityInfo'

export default function Informacion() {
  const { t } = useT()
  return (
    <Container className='py-12 space-y-16'>
      <SectionHeading title={t('info.title')} subtitle={t('info.subtitle')} centered />

      <section>
        <SectionHeading title={t('info.planoTitle')} />
        <div className='grid gap-6 lg:grid-cols-[1.5fr_1fr]'>
          <TerminalMap />
          <ServicesLegend />
        </div>
      </section>

      <AssistanceCard />
      <AccessibilityInfo />

      <CtaBanner title={t('info.ctaTitle')} body={t('info.ctaBody')}>
        {/* <Button>{t('info.ctaPrimary')}</Button> */}
        <Button variant='outline' to='/guia-almagro'>
          {t('info.ctaSecondary')}
        </Button>
      </CtaBanner>
    </Container>
  )
}
