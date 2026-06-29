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

/* Turnos de asistencia: cada uno con el responsable de guardia y su teléfono.
   Se usa para mostrar "el responsable en ese momento" en el modal de asistencia. */
export const assistanceShifts = [
  { nombre: 'Lucía Fernández', telefono: '+54 11 5555-1001', horario: '06:00 – 14:00' },
  { nombre: 'Martín Gómez', telefono: '+54 11 5555-1002', horario: '14:00 – 22:00' },
  { nombre: 'Sofía Ramírez', telefono: '+54 11 5555-1003', horario: '22:00 – 06:00' },
]

/* Devuelve el responsable de guardia según la hora actual. */
export function getAssistanceOnDuty(date = new Date()) {
  const h = date.getHours()
  if (h >= 6 && h < 14) return assistanceShifts[0]
  if (h >= 14 && h < 22) return assistanceShifts[1]
  return assistanceShifts[2]
}
