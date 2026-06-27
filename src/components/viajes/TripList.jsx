import { useT } from '../../i18n/LanguageContext'
import TripCard from './TripCard'

export default function TripList({ trips, origenCiudad, destinoCiudad }) {
  const { t } = useT()

  if (trips.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-line p-10 text-center text-muted">
        {t('viajes.sinResultados')}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          trip={trip}
          origenCiudad={origenCiudad}
          destinoCiudad={destinoCiudad}
        />
      ))}
    </div>
  )
}
