import { images } from './images'

/* Favoritos locales del barrio (Guía Almagro) y destinos destacados del Home. */
export const localFavorites = [
  {
    id: 'cafe-las-violetas',
    title: 'Café Las Violetas',
    desc: 'Un imponente café histórico famoso por sus vitrales y pastelería tradicional. A un corto paseo de la estación, perfecto para un descanso temprano.',
    image: images.cafeVioletas,
    imgClass: 'object-[center_24%]',
  },
  {
    id: 'libreria-del-parque',
    title: 'Librería del Parque',
    desc: 'Una librería independiente ubicada cerca del Parque Rivadavia. Ofrece una selección cuidada de literatura y un refugio tranquilo del tránsito.',
    image: images.libreria,
  },
]

/* Destinos con descuento estudiantil (sección "Especiales para Estudiantes") */
export const studentDestinations = [
  {
    id: 'la-plata',
    title: 'La Plata',
    subtitle: 'Buenos Aires',
    image: images.laPlata,
    badge: true,
  },
  {
    id: 'rosario',
    title: 'Rosario',
    subtitle: 'Servicio Expreso',
    image: images.rosario,
    badge: false,
  },
]
