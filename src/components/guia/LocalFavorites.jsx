import { useT } from '../../i18n/LanguageContext'
import { localFavorites } from '../../data/favoritos'
import { cn } from '../../utils/cn'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

export default function LocalFavorites() {
  const { t } = useT()
  return (
    <section>
      <SectionHeading title={t('guia.favoritesTitle')} />
      <div className="grid gap-6 sm:grid-cols-2">
        {localFavorites.map((f) => (
          <Card key={f.id} as="article" className="overflow-hidden">
            <img
              src={f.image}
              alt={f.title}
              className={cn('h-48 w-full object-cover', f.imgClass)}
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-muted">{f.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
