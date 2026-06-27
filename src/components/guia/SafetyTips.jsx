import { ShieldCheck } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import { safetyTips } from '../../data/services'
import { getIcon } from '../ui/icons'

export default function SafetyTips() {
  const { t } = useT()
  return (
    <section className="rounded-2xl bg-primary-900 p-8 text-white md:p-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
          <ShieldCheck size={22} className="text-secondary-400" />
        </span>
        <h2 className="text-xl font-semibold md:text-2xl">{t('guia.safetyTitle')}</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {safetyTips.map((tip) => {
          const Icon = getIcon(tip.icon)
          return (
            <div key={tip.title} className="flex flex-col gap-2">
              <Icon size={20} className="text-secondary-400" />
              <p className="font-semibold">{tip.title}</p>
              <p className="text-sm text-primary-100">{tip.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
