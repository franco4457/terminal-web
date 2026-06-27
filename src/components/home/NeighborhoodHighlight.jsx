import { MapPin } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import { images } from '../../data/images'
import Button from '../ui/Button'

export default function NeighborhoodHighlight() {
  const { t } = useT()
  return (
    <section className="grid items-center gap-8 md:grid-cols-2">
      <img
        src={images.parque}
        alt={t('home.neighborhoodTitle')}
        className="h-72 w-full rounded-2xl object-cover md:h-96"
      />
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {t('home.neighborhoodTitle')}
        </h2>
        <p className="mt-4 text-muted">{t('home.neighborhoodBody')}</p>
        <Button to="/guia-almagro" variant="outline" className="mt-6">
          <MapPin size={18} />
          {t('common.comoLlegar')}
        </Button>
      </div>
    </section>
  )
}
