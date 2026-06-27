import { useT } from '../../i18n/LanguageContext'
import { tiposBus } from '../../data/trips'
import Card from '../ui/Card'

const franjas = ['manana', 'tarde', 'noche', 'trasnoche']

export default function TripFilters({
  tiposSel,
  franjasSel,
  onToggleTipo,
  onToggleFranja,
  onClear,
}) {
  const { t } = useT()
  return (
    <Card as="aside" className="p-5 h-fit lg:sticky lg:top-20">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-ink">{t('viajes.filtros')}</h2>
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-semibold text-primary-600 hover:text-primary-700"
        >
          {t('viajes.limpiarTodo')}
        </button>
      </div>

      <fieldset className="border-t border-line py-4">
        <legend className="mb-3 text-sm font-semibold text-ink">{t('viajes.tipoBus')}</legend>
        <div className="space-y-2">
          {tiposBus.map((tb) => (
            <label key={tb.key} className="flex cursor-pointer items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                checked={tiposSel.includes(tb.key)}
                onChange={() => onToggleTipo(tb.key)}
                className="h-4 w-4 accent-primary-600"
              />
              {tb.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="border-t border-line py-4">
        <legend className="mb-3 text-sm font-semibold text-ink">{t('viajes.horarioSalida')}</legend>
        <div className="grid grid-cols-2 gap-2">
          {franjas.map((f) => {
            const active = franjasSel.includes(f)
            return (
              <button
                key={f}
                type="button"
                onClick={() => onToggleFranja(f)}
                aria-pressed={active}
                className={
                  'rounded-lg border px-3 py-2 text-sm transition-colors ' +
                  (active
                    ? 'border-primary-600 bg-primary-50 font-semibold text-primary-700'
                    : 'border-line text-muted hover:border-primary-300')
                }
              >
                {t(`viajes.franja.${f}`)}
              </button>
            )
          })}
        </div>
      </fieldset>
    </Card>
  )
}
