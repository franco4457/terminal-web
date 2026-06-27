/* Placeholders deterministas (picsum.photos por seed — siempre cargan, sin API key).
   Reemplazar por imágenes reales de la terminal cuando estén disponibles. */
const img = (seed, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const images = {
  heroTerminal: img('almagro-terminal', 1600, 800),
  laPlata: img('la-plata-bsas', 800, 600),
  rosario: img('rosario-expreso', 800, 600),
  parque: img('parque-rivadavia', 900, 700),
  stationMap: img('mapa-estacion', 1000, 700),
  cafeVioletas: img('cafe-las-violetas', 800, 600),
  libreria: img('libreria-del-parque', 800, 600),
  students: img('estudiantes-abono', 900, 700),
  terminalMap: '/images/mapa-p-alta.png'
}
