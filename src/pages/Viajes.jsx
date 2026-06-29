import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowRight, CalendarDays, Users } from 'lucide-react'
import { useT } from '../i18n/LanguageContext'
import { companias } from '../data/companias'
import { buscarRutas } from '../utils/rutas'
import Container from '../components/layout/Container'
import Itinerario from '../components/viajes/Itinerario'
import RutaEmpresaCard from '../components/viajes/RutaEmpresaCard'

export default function Viajes() {
  const { t } = useT()
  const [params] = useSearchParams()
  const origen = params.get('origen')
  const destino = params.get('destino')
  const fecha = params.get('fecha')
  const hasSearch = Boolean(origen && destino)

  const resultado = useMemo(
    () => (hasSearch ? buscarRutas(origen, destino) : null),
    [hasSearch, origen, destino],
  )

  const fechaLabel = fecha
    ? new Date(fecha + 'T00:00:00').toLocaleDateString('es-AR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : '24 Oct, 2024'

  // Sin búsqueda (ingreso directo a /viajes): mostramos todas las compañías.
  if (!hasSearch) {
    return (
      <Container className="py-10">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {t('viajes.todasTitulo')}
          </h1>
          <p className="mt-2 text-sm text-muted">{t('viajes.todasSubtitulo')}</p>
        </header>
        <div className="space-y-4">
          {companias.map((empresa) => (
            <RutaEmpresaCard key={empresa.id} empresa={empresa} segmento={empresa.paradas} />
          ))}
        </div>
      </Container>
    )
  }

  return (
    <Container className="py-10">
      <header className="mb-8">
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

      <Itinerario resultado={resultado} />
    </Container>
  )
}
