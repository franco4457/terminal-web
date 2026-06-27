import { useT } from '../../i18n/LanguageContext'

export default function SortSelect({ value, onChange }) {
  const { t } = useT()
  const options = [
    { key: 'recomendado', label: t('viajes.orden.recomendado') },
    { key: 'precioAsc', label: t('viajes.orden.precioAsc') },
    { key: 'salida', label: t('viajes.orden.salida') },
  ]
  return (
    <label className="flex items-center gap-2 text-sm text-muted">
      {t('viajes.ordenarPor')}:
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium text-ink outline-none focus:border-primary-500"
      >
        {options.map((o) => (
          <option key={o.key} value={o.key}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  )
}
