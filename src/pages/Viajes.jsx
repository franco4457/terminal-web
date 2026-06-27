import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowRight, CalendarDays, Users } from 'lucide-react'
import { useT } from '../i18n/LanguageContext'
import { trips as allTrips } from '../data/trips'
import Container from '../components/layout/Container'
import TripFilters from '../components/viajes/TripFilters'
import TripList from '../components/viajes/TripList'
import SortSelect from '../components/viajes/SortSelect'

export default function Viajes() {
  const { t } = useT()
  const [params] = useSearchParams()
  const origen = params.get('origen') || 'Buenos Aires'
  const destino = params.get('destino') || 'Córdoba'
  const fecha = params.get('fecha')

  const [tiposSel, setTiposSel] = useState([])
  const [franjasSel, setFranjasSel] = useState([])
  const [orden, setOrden] = useState('recomendado')

  const toggle = (setter) => (key) =>
    setter((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))

  const clear = () => {
    setTiposSel([])
    setFranjasSel([])
    setOrden('recomendado')
  }

  const visibleTrips = useMemo(() => {
    let list = allTrips.filter((trip) => {
      const okTipo = tiposSel.length === 0 || tiposSel.includes(trip.tipo)
      const okFranja = franjasSel.length === 0 || franjasSel.includes(trip.franja)
      return okTipo && okFranja
    })
    if (orden === 'precioAsc') {
      list = [...list].sort((a, b) => a.precioEstudiante - b.precioEstudiante)
    } else if (orden === 'salida') {
      list = [...list].sort((a, b) => a.salida.localeCompare(b.salida))
    }
    return list
  }, [tiposSel, franjasSel, orden])

  const fechaLabel = fecha
    ? new Date(fecha + 'T00:00:00').toLocaleDateString('es-AR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : '24 Oct, 2024'

  return (
    <Container className="py-10">
      <header className="mb-6">
        <h1 className="flex flex-wrap items-center gap-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {origen}
          <ArrowRight size={24} className="text-primary-600" />
          {destino}
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={16} /> {fechaLabel}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users size={16} /> {t('viajes.pasajeros')}
          </span>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <TripFilters
          tiposSel={tiposSel}
          franjasSel={franjasSel}
          onToggleTipo={toggle(setTiposSel)}
          onToggleFranja={toggle(setFranjasSel)}
          onClear={clear}
        />

        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted">
              {t('viajes.mostrando').replace('{n}', String(visibleTrips.length))}
            </p>
            <SortSelect value={orden} onChange={setOrden} />
          </div>
          <TripList trips={visibleTrips} origenCiudad={origen} destinoCiudad={destino} />
        </div>
      </div>
    </Container>
  )
}
