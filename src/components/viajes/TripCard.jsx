import { ArrowRight } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import { tiposBus } from '../../data/trips'
import { getIcon } from '../ui/icons'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

const tipoLabel = Object.fromEntries(tiposBus.map((t) => [t.key, t.label]))
const formatPrice = (n) => `$${n.toLocaleString('es-AR')}`

function Endpoint({ time, ciudad, terminal, align = 'left' }) {
  return (
    <div className={align === 'right' ? 'text-right' : 'text-left'}>
      <p className="text-2xl font-semibold text-ink">{time}</p>
      <p className="text-sm font-medium text-ink">{ciudad}</p>
      <p className="text-xs text-muted">{terminal}</p>
    </div>
  )
}

export default function TripCard({ trip, origenCiudad, destinoCiudad }) {
  const { t } = useT()
  return (
    <Card className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:items-center">
      <div>
        <div className="flex items-center gap-4">
          <Endpoint time={trip.salida} ciudad={origenCiudad} terminal={trip.origenTerminal} />
          <div className="flex flex-1 flex-col items-center text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary-600">
              {trip.empresa}
            </span>
            <div className="my-1 flex w-full items-center gap-1 text-line">
              <span className="h-px flex-1 bg-line" />
              <ArrowRight size={16} className="text-primary-400" />
              <span className="h-px flex-1 bg-line" />
            </div>
            <span className="text-xs text-muted">{tipoLabel[trip.tipo]}</span>
          </div>
          <Endpoint
            time={trip.llegada}
            ciudad={destinoCiudad}
            terminal={trip.destinoTerminal}
            align="right"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-muted">
          {trip.amenities.map((a) => {
            const Icon = getIcon(a)
            return <Icon key={a} size={16} aria-hidden />
          })}
        </div>
      </div>

      <div className="flex flex-col items-stretch gap-2 border-t border-line pt-4 md:items-end md:border-l md:border-t-0 md:pl-6 md:pt-0">
        <Badge tone="success" className="self-start md:self-end">
          {t('viajes.descuentoEstudiantil')}
        </Badge>
        <div className="md:text-right">
          <span className="mr-2 text-sm text-muted line-through">
            {formatPrice(trip.precioBase)}
          </span>
          <span className="text-2xl font-bold text-ink">{formatPrice(trip.precioEstudiante)}</span>
        </div>
        <Button size="md" className="md:w-auto">
          {t('viajes.seleccionarAsiento')}
        </Button>
      </div>
    </Card>
  )
}
