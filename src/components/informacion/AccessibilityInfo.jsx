import { Check } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import { accessibilityInfo } from '../../data/accessibility'
import { getIcon } from '../ui/icons'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

export default function AccessibilityInfo() {
  const { t } = useT()
  return (
    <section>
      <SectionHeading title={t('info.accesibilidadTitle')} centered />
      <div className="grid gap-6 md:grid-cols-3">
        {accessibilityInfo.map((group) => {
          const Icon = getIcon(group.icon)
          return (
            <Card key={group.title} className="p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-50 text-primary-600">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-muted">
                    <Check size={16} className="mt-0.5 shrink-0 text-success" />
                    {it}
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
