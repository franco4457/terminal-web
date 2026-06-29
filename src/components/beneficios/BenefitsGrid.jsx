import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import { studentBenefits } from '../../data/benefits'
import { getIcon } from '../ui/icons'
import { cn } from '../../utils/cn'

// Tarjeta destacada por defecto: la marcada como featured en los datos (Grupo Familiar).
const defaultFeatured = studentBenefits.findIndex((b) => b.featured)

export default function BenefitsGrid() {
  const { t } = useT()
  // El destacado arranca en la tarjeta por defecto y va siguiendo al hover/foco.
  const [active, setActive] = useState(defaultFeatured)

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {studentBenefits.map((b, i) => {
        const Icon = getIcon(b.icon)
        const featured = active === i
        return (
          <article
            key={b.title}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(defaultFeatured)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(defaultFeatured)}
            className={cn(
              'rounded-2xl border p-6 transition-colors duration-300',
              featured
                ? 'border-primary-900 bg-primary-900 text-white'
                : 'border-line bg-white',
            )}
          >
            <span
              className={cn(
                'grid h-11 w-11 place-items-center rounded-xl transition-colors duration-300',
                featured ? 'bg-white/10 text-secondary-400' : 'bg-primary-50 text-primary-600',
              )}
            >
              <Icon size={22} />
            </span>
            <h3
              className={cn(
                'mt-4 text-lg font-semibold transition-colors duration-300',
                featured ? 'text-white' : 'text-ink',
              )}
            >
              {b.title}
            </h3>
            <p
              className={cn(
                'mt-2 text-sm transition-colors duration-300',
                featured ? 'text-primary-100' : 'text-muted',
              )}
            >
              {b.desc}
            </p>
            {b.action && (
              <button
                type="button"
                className={cn(
                  'mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-300',
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
