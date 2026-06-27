import { ZoomIn, ZoomOut, Download } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import { images } from '../../data/images'

export default function TerminalMap() {
  const { t } = useT()
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
      <img
        src={images.terminalMap}
        alt={t('info.planoTitle')}
        className="h-80 w-full object-cover md:h-[28rem]"
      />
      <div className="absolute right-4 top-4 flex flex-col gap-2">
        {[ZoomIn, ZoomOut, Download].map((Icon, i) => (
          <button
            key={i}
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg bg-white text-primary-700 shadow-sm hover:bg-primary-50"
            aria-label="Control del plano"
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
    </div>
  )
}
