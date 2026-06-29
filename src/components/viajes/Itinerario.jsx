import { ArrowRight } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import RutaEmpresaCard from './RutaEmpresaCard'

/* Renderiza el resultado de buscarRutas: un encabezado por cada tramo y las
   empresas que lo cubren. El modelo siempre pasa por la Terminal de Almagro. */
export default function Itinerario({ resultado, fecha, pasajeros }) {
  const { t } = useT()
  const { error, tramos } = resultado

  if (error) {
    return (
      <div className="rounded-xl border border-dashed border-line p-10 text-center text-muted">
        {t(`viajes.${error}`)}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {tramos.map((tramo, i) => (
        <section key={`${tramo.desde}-${tramo.hasta}`} className="space-y-4">
          <header className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-secondary-600">
              {t('viajes.tramo').replace('{n}', String(i + 1))}
            </span>
            <h2 className="flex flex-wrap items-center gap-2 text-lg font-semibold text-ink">
              {tramo.desde}
              <ArrowRight size={18} className="text-primary-600" />
              {tramo.hasta}
            </h2>
          </header>

          {tramo.opciones.length === 0 ? (
            <div className="rounded-xl border border-dashed border-line p-8 text-center text-muted">
              {t('viajes.sinRutas')}
            </div>
          ) : (
            <div className="space-y-4">
              {tramo.opciones.map(({ empresa, segmento }) => (
                <RutaEmpresaCard
                  key={empresa.id}
                  empresa={empresa}
                  segmento={segmento}
                  desde={tramo.desde}
                  hasta={tramo.hasta}
                  fecha={fecha}
                  pasajeros={pasajeros}
                />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
