import { ArrowRight } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import { studentBenefits } from '../../data/benefits'
import { getIcon } from '../ui/icons'
import { cn } from '../../utils/cn'

export default function BenefitsGrid() {
  const { t } = useT()
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {studentBenefits.map((b) => {
        const Icon = getIcon(b.icon)
        const featured = b.featured
        return (
          <article
            key={b.title}
            className={cn(
              'rounded-2xl border p-6',
              featured
                ? 'border-primary-900 bg-primary-900 text-white'
                : 'border-line bg-white',
            )}
          >
            <span
              className={cn(
                'grid h-11 w-11 place-items-center rounded-xl',
                featured ? 'bg-white/10 text-secondary-400' : 'bg-primary-50 text-primary-600',
              )}
            >
              <Icon size={22} />
            </span>
            <h3 className={cn('mt-4 text-lg font-semibold', featured ? 'text-white' : 'text-ink')}>
              {b.title}
            </h3>
            <p className={cn('mt-2 text-sm', featured ? 'text-primary-100' : 'text-muted')}>
              {b.desc}
            </p>
            {b.action && (
              <button
                type="button"
                className={cn(
                  'mt-4 inline-flex items-center gap-1 text-sm font-semibold',
                  featured ? 'text-secondary-400' : 'text-primary-600 hover:text-primary-700',
                )}
              >
                {t(b.action)}
                <ArrowRight size={16} />
              </button>
            )}
          </article>
        )
      })}
    </div>
  )
}
