import { useT } from '../../i18n/LanguageContext'
import { stationMarkers } from '../../data/services'
import { images } from '../../data/images'
import { getIcon } from '../ui/icons'
import Badge from '../ui/Badge'

export default function StationMap() {
  const { t } = useT()
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line">
      <img
        src={images.stationMap}
        alt={t('guia.aroundTitle')}
        className="h-72 w-full object-cover md:h-full"
      />
      <div className="absolute left-4 top-4">
        <Badge tone="gold">{t('common.comoLlegar')}</Badge>
      </div>
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        {stationMarkers.map((m) => {
          const Icon = getIcon(m.icon)
          return (
            <span
              key={m.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-ink shadow-sm"
            >
              <Icon size={14} className="text-primary-600" />
              {m.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}
