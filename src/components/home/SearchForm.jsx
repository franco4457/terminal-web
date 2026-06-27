import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Calendar, User, Search } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import Button from '../ui/Button'

const cities = ['Buenos Aires', 'Córdoba', 'Rosario', 'La Plata', 'Mendoza', 'Mar del Plata']

function Field({ icon: Icon, label, children }) {
  return (
    <label className="flex flex-1 flex-col gap-1 text-left">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</span>
      <span className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 h-12 focus-within:border-primary-500">
        <Icon size={18} className="shrink-0 text-primary-600" />
        {children}
      </span>
    </label>
  )
}

const inputClass = 'w-full bg-transparent text-sm text-ink outline-none'

export default function SearchForm() {
  const { t } = useT()
  const navigate = useNavigate()
  const [origen, setOrigen] = useState('Buenos Aires')
  const [destino, setDestino] = useState('Córdoba')
  const [fecha, setFecha] = useState('')
  const [pax, setPax] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()
    const params = new URLSearchParams({ origen, destino, pax: String(pax) })
    if (fecha) params.set('fecha', fecha)
    navigate(`/viajes?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 shadow-lg md:flex-row md:items-end"
    >
      <Field icon={MapPin} label={t('home.searchOrigen')}>
        <select value={origen} onChange={(e) => setOrigen(e.target.value)} className={inputClass}>
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </Field>
      <Field icon={MapPin} label={t('home.searchDestino')}>
        <select value={destino} onChange={(e) => setDestino(e.target.value)} className={inputClass}>
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </Field>
      <Field icon={Calendar} label={t('home.searchFecha')}>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className={inputClass}
        />
      </Field>
      <Field icon={User} label={t('home.searchPasajero')}>
        <select
          value={pax}
          onChange={(e) => setPax(Number(e.target.value))}
          className={inputClass}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? 'Pasajero' : 'Pasajeros'}
            </option>
          ))}
        </select>
      </Field>
      <Button type="submit" size="lg" className="md:w-auto">
        <Search size={18} />
        {t('common.buscar')}
      </Button>
    </form>
  )
}
