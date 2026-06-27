import { useT } from '../../i18n/LanguageContext'
import { stationServices } from '../../data/services'
import { getIcon } from '../ui/icons'
import Card from '../ui/Card'

export default function ServicesPanel() {
  const { t } = useT()
  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-ink">{t('guia.servicesTitle')}</h3>
      <ul className="space-y-5">
        {stationServices.map((s) => {
          const Icon = getIcon(s.icon)
          return (
            <li key={s.title} className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-600">
                <Icon size={20} />
              </span>
              <div>
                <p className="font-semibold text-ink">{s.title}</p>
                <p className="text-sm text-muted">{s.desc}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
