/* Leyenda de servicios del plano de la terminal (Información). */
export const mapLegend = [
  { icon: 'boleteria', label: 'Boleterías', desc: 'Atención al público — planta baja.' },
  { icon: 'bano', label: 'Baños Públicos y Accesibles', desc: 'Disponibles en cada nivel.' },
  { icon: 'rampa', label: 'Rampas y Ascensores', desc: 'Acceso sin escaleras a todas las plataformas.' },
  { icon: 'informes', label: 'Punto de Informes', desc: 'Personal de atención y objetos perdidos.' },
  { icon: 'embarque', label: 'Zona de Embarque', desc: 'Plataformas 1 al 24, señalizadas por color.' },
]

/* Información de accesibilidad (3 cards con lista de puntos). */
export const accessibilityInfo = [
  {
    icon: 'movilidad',
    title: 'Movilidad Reducida',
    items: [
      'Sillas de ruedas disponibles en la terminal',
      'Rampas de baja pendiente',
      'Asistencia para abordar las unidades',
    ],
  },
  {
    icon: 'cognitiva',
    title: 'Señalización Cognitiva',
    items: [
      'Señalética clara con pictogramas',
      'Planos hápticos en puntos clave',
      'Anuncios por audio en cada nivel',
    ],
  },
  {
    icon: 'personal',
    title: 'Personal de Apoyo',
    items: [
      'Personal capacitado en LSA (Lengua de Señas Argentina)',
      'Atención prioritaria a personas con discapacidad',
      'Disponible las 24 horas',
    ],
  },
]
