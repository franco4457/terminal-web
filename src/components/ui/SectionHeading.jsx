import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'

/* Encabezado de sección. centered=true para títulos centrados (Guía / Info);
   action={{ label, to }} agrega un link "Ver todo →" a la derecha. */
export default function SectionHeading({
  title,
  subtitle,
  action,
  centered = false,
  className,
}) {
  return (
    <div
      className={cn(
        'mb-8',
        centered ? 'text-center max-w-2xl mx-auto' : 'flex items-end justify-between gap-4',
        className,
      )}
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-ink tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
      </div>
      {action && !centered && (
        <Link
          to={action.to}
          className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700"
        >
          {action.label}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  )
}
