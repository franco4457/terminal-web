/* Empresas y recorridos para el buscador de rutas.
   Modelo hub-and-spoke: la Terminal de Almagro es el centro y cada empresa
   es un "rayo" que parte desde Almagro (su primera parada).
   Cada parada conserva su nota/subtítulo original para mostrarla en la tarjeta. */

export const HUB = 'Terminal de Almagro'

export const companias = [
  {
    id: 'transbsas',
    nombre: 'TransBsAs',
    url: 'https://danteuade.github.io/Proyecto_Indivdual2/Index.html',
    paradas: [
      { nombre: 'Parque Rivadavia', nota: 'Av. Rivadavia y Acoyte (Origen CABA)' },
      { nombre: 'Agronomía', nota: 'Av. San Martín y Pampa (Parada Secundaria)' },
      { nombre: 'Pacífico', nota: 'Av. J.B. Justo y Santa Fe (Subte D / Tren San Martín)' },
      { nombre: 'Puente Saavedra', nota: 'Av. Gral Paz y Cabildo (Parada Importante)' },
      { nombre: 'Cruce de San Antonio de Areco', nota: 'RN 8 (Parada de Ruta Importante)' },
      { nombre: 'Cruce de Capitán Sarmiento', nota: 'RN 8 (Parada de Ruta Secundaria)' },
      { nombre: 'Cruce de Arrecifes', nota: 'RN 8 (Parada de Ruta Secundaria)' },
      { nombre: 'Av. Pellegrini y Av. Rocha', nota: 'Ingreso Pergamino (Secundaria)' },
      { nombre: 'Terminal de Ómnibus de Pergamino', nota: 'Final del Recorrido' }
    ]
  },
  {
    id: 'rutatlantica',
    nombre: 'Rutatlántica',
    url: 'https://carandia.github.io/Proyecto_micro/',
    paradas: [
      { nombre: 'Almagro Terminal', nota: 'Punto de partida' },
      { nombre: 'San Clemente del Tuyú', nota: 'Intermedia' },
      { nombre: 'Las Toninas', nota: 'Intermedia' },
      { nombre: 'Santa Teresita', nota: 'Intermedia' },
      { nombre: 'Mar del Tuyú', nota: 'Intermedia' },
      { nombre: 'San Bernardo', nota: 'Intermedia' },
      { nombre: 'Pinamar', nota: 'Intermedia' },
      { nombre: 'Villa Gesell', nota: 'Intermedia' },
      { nombre: 'Mar del Plata', nota: 'Destino costero' }
    ]
  },
  {
    id: 'plusmar',
    nombre: 'Plusmar',
    url: 'https://jonathandylanverones.github.io/JonaDydWeb/paradas.html',
    paradas: [
      { nombre: 'Terminal Almagro', nota: 'Punto de partida' },
      { nombre: 'Terminal Tres Arroyos', nota: 'Destino final' }
    ]
  },
  {
    id: 'expreso-suroeste',
    nombre: 'Expreso Suroeste',
    url: 'https://paula-brusati.github.io/Proyecto2/',
    paradas: [
      { nombre: 'Terminal Almagro', nota: 'Parque Rivadavia - CABA' },
      { nombre: 'Parada Ezeiza', nota: 'Centro de Trasbordo' },
      { nombre: 'Terminal Cañuelas', nota: 'Polos Universitarios' },
      { nombre: 'Parada Uribelarrea', nota: 'Acceso Turístico' },
      { nombre: 'Terminal Lobos', nota: 'Destino final' }
    ]
  },
  {
    id: 'pulqui',
    nombre: 'Pulqui',
    url: 'https://franco4457.github.io/uni-web-proyecto-2/reserva.html',
    // url: 'http://127.0.0.1:5500/reserva.html',
    paradas: [
      { nombre: 'Parque Rivadavia', nota: 'Punto de partida' },
      { nombre: 'Rosario', nota: 'Intermedia' },
      { nombre: 'Santa Fe de la Vera Cruz', nota: 'Intermedia' },
      { nombre: 'Reconquista', nota: 'Intermedia' },
      { nombre: 'Resistencia', nota: 'Intermedia' },
      { nombre: 'Formosa', nota: 'Intermedia' },
      { nombre: 'Asunción', nota: 'Destino internacional' }
    ]
  }
]

/* Normaliza un nombre: minúsculas y sin acentos, para comparar de forma robusta. */
function normalizar(nombre) {
  return nombre.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim()
}

/* Detecta cualquier variante del hub: "Parque Rivadavia", "Almagro Terminal",
   "Terminal Almagro", "Parque Rivadavia (CABA)", etc. */
export function esAlmagro(nombre) {
  const n = normalizar(nombre)
  return n.includes('almagro') || n.includes('parque rivadavia')
}

/* Lista de paradas para los <select>: el hub primero y luego todas las
   paradas no-Almagro (deduplicadas por nombre, en orden de aparición). */
export function getParadas() {
  const vistas = new Set()
  const resto = []
  for (const empresa of companias) {
    for (const parada of empresa.paradas) {
      if (esAlmagro(parada.nombre) || vistas.has(parada.nombre)) continue
      vistas.add(parada.nombre)
      resto.push(parada.nombre)
    }
  }
  return [HUB, ...resto]
}
