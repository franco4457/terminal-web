import { useT } from '../../i18n/LanguageContext'
import { mapLegend } from '../../data/accessibility'
import { getIcon } from '../ui/icons'
import Card from '../ui/Card'

export default function ServicesLegend() {
  const { t } = useT()
  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-ink">{t('info.leyendaTitle')}</h3>
      <ul className="space-y-4">
        {mapLegend.map((item) => {
          const Icon = getIcon(item.icon)
          return (
            <li key={item.label} className="flex gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-600">
                <Icon size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{item.label}</p>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
