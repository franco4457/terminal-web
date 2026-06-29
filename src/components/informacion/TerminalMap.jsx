import { useState } from 'react'
import { useT } from '../../i18n/LanguageContext'
import { images } from '../../data/images'
import { cn } from '../../utils/cn'

const floors = [
  { key: 'baja', src: images.terminalMapBaja, label: 'info.plantaBaja' },
  { key: 'alta', src: images.terminalMapAlta, label: 'info.plantaAlta' }
]

export default function TerminalMap() {
  const { t } = useT()
  const [floor, setFloor] = useState('baja')
  const current = floors.find((f) => f.key === floor) ?? floors[0]

  return (
    <div className='relative overflow-hidden rounded-2xl border border-line bg-surface'>
      <img
        src={current.src}
        alt={`${t('info.planoTitle')} — ${t(current.label)}`}
        className='h-80 w-full object-contain p-2 md:h-112'
      />

      {/* Toggle Planta Baja / Planta Alta */}
      <div className='absolute left-4 top-4 inline-flex rounded-lg bg-white p-1 shadow-sm'>
        {floors.map((f) => {
          const active = f.key === floor
          return (
            <button
              key={f.key}
              type='button'
              onClick={() => setFloor(f.key)}
              aria-pressed={active}
              className={cn(
                'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                active ? 'bg-primary-900 text-white' : 'text-muted hover:text-primary-700'
              )}
            >
              {t(f.label)}
            </button>
          )
        })}
      </div>
    </div>
  )
}
