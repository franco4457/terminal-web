import { HUB, companias, esAlmagro } from '../data/companias'

/* Devuelve las empresas cuyo recorrido incluye `parada`, junto con el segmento
   del recorrido entre Almagro y esa parada (para resaltar el tramo). */
function empresasQueIncluyen(parada) {
  const opciones = []
  for (const empresa of companias) {
    const idx = empresa.paradas.findIndex((p) => p.nombre === parada)
    if (idx === -1) continue
    // El hub es siempre la primera parada (índice 0); el segmento va de Almagro a la parada.
    const segmento = empresa.paradas.slice(0, idx + 1)
    opciones.push({ empresa, segmento })
  }
  return opciones
}

/* Modelo hub-and-spoke: la Terminal de Almagro es el centro.
   - Si el origen no es Almagro -> tramo origen -> Almagro.
   - Si el destino no es Almagro -> tramo Almagro -> destino.
   Devuelve { error } o { tramos: [{ desde, hasta, opciones }] }. */
export function buscarRutas(origen, destino) {
  const origenAlmagro = esAlmagro(origen)
  const destinoAlmagro = esAlmagro(destino)

  if (origen === destino || (origenAlmagro && destinoAlmagro)) {
    return { error: 'mismoOrigenDestino', tramos: [] }
  }

  const tramos = []
  if (!origenAlmagro) {
    tramos.push({ desde: origen, hasta: HUB, opciones: empresasQueIncluyen(origen) })
  }
  if (!destinoAlmagro) {
    tramos.push({ desde: HUB, hasta: destino, opciones: empresasQueIncluyen(destino) })
  }

  return { error: null, tramos }
}
