import { MapPin, CircleDot, ExternalLink } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

/* Una empresa recomendada para un tramo. Muestra el recorrido (segmento entre
   Almagro y el extremo del tramo) y un botón externo para reservar. */
export default function RutaEmpresaCard({ empresa, segmento }) {
  const { t } = useT()
  const intermedias = segmento.slice(1, -1)

  return (
    <Card className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:items-center">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            {empresa.nombre}
          </span>
          {intermedias.length > 0 && (
            <Badge tone="blue">
              {`${intermedias.length} ${t('viajes.paradasIntermedias')}`}
            </Badge>
          )}
        </div>

        <ol className="mt-4 space-y-3">
          {segmento.map((parada, i) => {
            const esExtremo = i === 0 || i === segmento.length - 1
            const Icon = esExtremo ? MapPin : CircleDot
            return (
              <li key={`${parada.nombre}-${i}`} className="flex items-start gap-3">
                <Icon
                  size={16}
                  className={esExtremo ? 'mt-0.5 shrink-0 text-primary-600' : 'mt-0.5 shrink-0 text-primary-300'}
                  aria-hidden
                />
                <div>
                  <p className={esExtremo ? 'text-sm font-semibold text-ink' : 'text-sm text-ink'}>
                    {parada.nombre}
                  </p>
                  {parada.nota && <p className="text-xs text-muted">{parada.nota}</p>}
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <div className="flex flex-col items-stretch gap-2 border-t border-line pt-4 md:items-end md:border-l md:border-t-0 md:pl-6 md:pt-0">
        <Button href={empresa.url} target="_blank" rel="noreferrer" size="md" className="md:w-auto">
          {t('viajes.reservarEn').replace('{empresa}', empresa.nombre)}
          <ExternalLink size={16} />
        </Button>
      </div>
    </Card>
  )
}
