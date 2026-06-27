import { useT } from '../../i18n/LanguageContext'
import { studentDestinations } from '../../data/favoritos'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'

export default function StudentSpecials() {
  const { t } = useT()
  return (
    <section>
      <SectionHeading
        title={t('home.studentTitle')}
        subtitle={t('home.studentSubtitle')}
        action={{ label: t('common.verTodo'), to: '/beneficios-estudiantiles' }}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {studentDestinations.map((d) => (
          <article
            key={d.id}
            className="group relative overflow-hidden rounded-2xl border border-line"
          >
            <img
              src={d.image}
              alt={d.title}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
            {d.badge && (
              <div className="absolute right-4 top-4">
                <Badge tone="gold">{t('home.studentBadge')}</Badge>
              </div>
            )}
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <h3 className="text-xl font-semibold">{d.title}</h3>
              <p className="text-sm text-primary-100">{d.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
