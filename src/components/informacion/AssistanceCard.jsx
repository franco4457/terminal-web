import { LifeBuoy } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import Button from '../ui/Button'

export default function AssistanceCard() {
  const { t } = useT()
  return (
    <section className="flex flex-col items-start gap-4 rounded-2xl bg-primary-900 p-8 text-white md:flex-row md:items-center md:justify-between">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-secondary-400">
          <LifeBuoy size={24} />
        </span>
        <div>
          <h3 className="text-xl font-semibold">{t('info.asistenciaTitle')}</h3>
          <p className="mt-1 max-w-xl text-sm text-primary-100">{t('info.asistenciaBody')}</p>
        </div>
      </div>
      <Button className="shrink-0">{t('info.asistenciaButton')}</Button>
    </section>
  )
}
